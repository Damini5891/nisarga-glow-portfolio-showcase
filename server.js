import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryFile = path.join(__dirname, 'src', 'data', 'customGallery.json');
const reviewsFile = path.join(__dirname, 'src', 'data', 'reviews.json');
const eventsFile = path.join(__dirname, 'src', 'data', 'events.json');

function sendJson(res, status, data) {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });
  res.end(JSON.stringify(data));
}

function serveStatic(req, res) {
  let filePath = path.join(__dirname, 'dist', req.url.split('?')[0]);
  if (req.url === '/' || !fs.existsSync(filePath)) {
    filePath = path.join(__dirname, 'dist', 'index.html');
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
    } else {
      res.writeHead(200);
      res.end(content);
    }
  });
}

const MAX_BODY_SIZE = 25 * 1024 * 1024; // 25MB

const EMAIL_USER = 'nisargaforbusiness@gmail.com';
const EMAIL_PASS = 'Nisarga@1234';  

const server = http.createServer((req, res) => {
  if (req.method === 'OPTIONS' && req.url.startsWith('/api/')) {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST,GET,DELETE,OPTIONS',
    });
    return res.end();
  }
  if (req.method === 'GET' && req.url === '/api/gallery') {
    const items = fs.existsSync(galleryFile)
      ? JSON.parse(fs.readFileSync(galleryFile, 'utf8'))
      : [];
    sendJson(res, 200, items);
  } else if (req.method === 'GET' && req.url === '/api/events') {
    const events = fs.existsSync(eventsFile)
      ? JSON.parse(fs.readFileSync(eventsFile, 'utf8'))
      : [];
    sendJson(res, 200, events);
  } else if (req.method === 'GET' && req.url === '/api/reviews') {
    const reviews = fs.existsSync(reviewsFile)
      ? JSON.parse(fs.readFileSync(reviewsFile, 'utf8'))
      : [];
    sendJson(res, 200, reviews);
  } else if (req.method === 'DELETE' && req.url.startsWith('/api/gallery')) {
    const url = new URL(req.url, 'http://localhost');
    const src = url.searchParams.get('src');
    if (!src) return sendJson(res, 400, { error: 'Missing src' });
    let items = [];
    if (fs.existsSync(galleryFile)) {
      items = JSON.parse(fs.readFileSync(galleryFile, 'utf8'));
    }
    items = items.filter(item => item.src !== src);
    fs.writeFileSync(galleryFile, JSON.stringify(items, null, 2));
    const filePath = path.join(__dirname, 'public', src);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    sendJson(res, 200, { success: true });
  } else if (req.method === 'DELETE' && req.url.startsWith('/api/event')) {
    const url = new URL(req.url, 'http://localhost');
    const index = Number(url.searchParams.get('index'));
    if (Number.isNaN(index)) return sendJson(res, 400, { error: 'Invalid index' });
    let events = [];
    if (fs.existsSync(eventsFile)) {
      events = JSON.parse(fs.readFileSync(eventsFile, 'utf8'));
    }
    if (index >= 0 && index < events.length) {
      const [removed] = events.splice(index, 1);
      fs.writeFileSync(eventsFile, JSON.stringify(events, null, 2));
      const imgPath = path.join(__dirname, 'public', removed.image);
      if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
      sendJson(res, 200, { success: true });
    } else {
      sendJson(res, 400, { error: 'Invalid index' });
    }
  } else if (req.method === 'DELETE' && req.url.startsWith('/api/review')) {
    const url = new URL(req.url, 'http://localhost');
    const index = Number(url.searchParams.get('index'));
    if (Number.isNaN(index)) return sendJson(res, 400, { error: 'Invalid index' });
    let reviews = [];
    if (fs.existsSync(reviewsFile)) {
      reviews = JSON.parse(fs.readFileSync(reviewsFile, 'utf8'));
    }
    if (index >= 0 && index < reviews.length) {
      reviews.splice(index, 1);
      fs.writeFileSync(reviewsFile, JSON.stringify(reviews, null, 2));
      sendJson(res, 200, { success: true });
    } else {
      sendJson(res, 400, { error: 'Invalid index' });
    }
  } else if (req.method === 'POST' && req.url === '/api/review') {
    let body = '';
    let received = 0;
    req.on('data', chunk => {
      received += chunk.length;
      if (received > MAX_BODY_SIZE) {
        sendJson(res, 413, { error: 'Payload too large' });
        req.destroy();
        return;
      }
      body += chunk;
    });
    req.on('end', () => {
      try {
        const { title, text, rating, author } = JSON.parse(body || '{}');
        let reviews = [];
        if (fs.existsSync(reviewsFile)) {
          reviews = JSON.parse(fs.readFileSync(reviewsFile, 'utf8'));
        }
        reviews.push({
          title,
          text,
          rating: Number(rating),
          author,
        });
        fs.writeFileSync(reviewsFile, JSON.stringify(reviews, null, 2));
        sendJson(res, 200, { success: true });
      } catch {
        sendJson(res, 400, { error: 'Invalid JSON' });
      }
    });
  } else if (req.method === 'POST' && req.url === '/api/upload') {
    let body = '';
    let received = 0;
    req.on('data', chunk => {
      received += chunk.length;
      if (received > MAX_BODY_SIZE) {
        sendJson(res, 413, { error: 'Payload too large' });
        req.destroy();
        return;
      }
      body += chunk;
    });
    req.on('end', () => {
      try {
        const { eventType, title, description, image } = JSON.parse(body || '{}');
        if (!image) return sendJson(res, 400, { error: 'No image' });
        const buffer = Buffer.from(image, 'base64');
        const dir = path.join(__dirname, 'public', 'events', eventType);
        fs.mkdirSync(dir, { recursive: true });
        const filename = Date.now() + '.jpg';
        fs.writeFileSync(path.join(dir, filename), buffer);
        let items = [];
        if (fs.existsSync(galleryFile)) {
          items = JSON.parse(fs.readFileSync(galleryFile, 'utf8'));
        }
        items.push({
          type: 'image',
          src: `/events/${eventType}/${filename}`,
          title,
          category: eventType.charAt(0).toUpperCase() + eventType.slice(1),
          description,
        });
        fs.writeFileSync(galleryFile, JSON.stringify(items, null, 2));
        sendJson(res, 200, { success: true });
      } catch {
        sendJson(res, 400, { error: 'Invalid JSON' });
      }
    });
  } else if (req.method === 'POST' && req.url === '/api/event') {
    let body = '';
    let received = 0;
    req.on('data', chunk => {
      received += chunk.length;
      if (received > MAX_BODY_SIZE) {
        sendJson(res, 413, { error: 'Payload too large' });
        req.destroy();
        return;
      }
      body += chunk;
    });
    req.on('end', () => {
      try {
        const { title, date, description, image } = JSON.parse(body || '{}');
        if (!image) return sendJson(res, 400, { error: 'No image' });
        const buffer = Buffer.from(image, 'base64');
        const dir = path.join(__dirname, 'public', 'bookings');
        fs.mkdirSync(dir, { recursive: true });
        const filename = Date.now() + '.jpg';
        fs.writeFileSync(path.join(dir, filename), buffer);
        let events = [];
        if (fs.existsSync(eventsFile)) {
          events = JSON.parse(fs.readFileSync(eventsFile, 'utf8'));
        }
        events.push({ title, date, description, image: `/bookings/${filename}` });
        fs.writeFileSync(eventsFile, JSON.stringify(events, null, 2));
        sendJson(res, 200, { success: true });
      } catch {
        sendJson(res, 400, { error: 'Invalid JSON' });
      }
    });
  } else if (req.method === 'POST' && req.url === '/api/contact') {
    let body = '';
    let received = 0;
    req.on('data', chunk => {
      received += chunk.length;
      if (received > MAX_BODY_SIZE) {
        sendJson(res, 413, { error: 'Payload too large' });
        req.destroy();
        return;
      }
      body += chunk;
    });
    req.on('end', async () => {
      try {
        const { name, email, eventType, eventDate, message } = JSON.parse(body || '{}');
        // Configure transporter
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS
          }
        });
        // Compose email
        const mailOptions = {
          from: EMAIL_USER,
          to: 'raidamini2010@gmail.com', // <-- Replace with the email you want to receive submissions
          subject: `New Contact Form Submission from ${name}`,
          text: `
Name: ${name}
Email: ${email}
Event Type: ${eventType}
Event Date: ${eventDate}
Message: ${message}
          `,
        };
        await transporter.sendMail(mailOptions);
        sendJson(res, 200, { success: true });
      } catch (err) {
        console.error('Nodemailer error:', err); // <-- Add this line
        sendJson(res, 500, { error: 'Failed to send email' });
      }
    });
  } else {
    serveStatic(req, res);
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
