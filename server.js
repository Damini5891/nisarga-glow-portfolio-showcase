import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryFile = path.join(__dirname, 'src', 'data', 'customGallery.json');
const reviewsFile = path.join(__dirname, 'src', 'data', 'reviews.json');

function sendJson(res, status, data) {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });
  res.end(JSON.stringify(data));
}

function serveStatic(req, res) {
  const filePath = path.join(
    __dirname,
    'dist',
    req.url === '/' ? 'index.html' : req.url
  );
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

const server = http.createServer((req, res) => {
  if (req.method === 'OPTIONS' && req.url.startsWith('/api/')) {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST,OPTIONS',
    });
    return res.end();
  }
  if (req.method === 'POST' && req.url === '/api/review') {
    let body = '';
    req.on('data', chunk => (body += chunk));
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
    req.on('data', chunk => (body += chunk));
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
  } else {
    serveStatic(req, res);
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
