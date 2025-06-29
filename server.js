import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const galleryFile = path.join(__dirname, 'src', 'data', 'customGallery.json');
const reviewsFile = path.join(__dirname, 'src', 'data', 'reviews.json');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { eventType } = req.body;
    const dir = path.join(__dirname, 'public', 'events', eventType);
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

app.post('/api/upload', upload.single('image'), (req, res) => {
  const { eventType, title, description } = req.body;
  if (!req.file) return res.status(400).json({ error: 'No file' });
  const entry = {
    type: 'image',
    src: `/events/${eventType}/${req.file.filename}`,
    title,
    category: eventType.charAt(0).toUpperCase() + eventType.slice(1),
    description
  };
  let items = [];
  if (fs.existsSync(galleryFile)) {
    items = JSON.parse(fs.readFileSync(galleryFile, 'utf8'));
  }
  items.push(entry);
  fs.writeFileSync(galleryFile, JSON.stringify(items, null, 2));
  res.json({ success: true });
});

app.post('/api/review', (req, res) => {
  const { title, text, rating, author } = req.body;
  let reviews = [];
  if (fs.existsSync(reviewsFile)) {
    reviews = JSON.parse(fs.readFileSync(reviewsFile, 'utf8'));
  }
  reviews.push({ title, text, rating: Number(rating), author });
  fs.writeFileSync(reviewsFile, JSON.stringify(reviews, null, 2));
  res.json({ success: true });
});

app.use(express.static(path.join(__dirname, 'dist')));

// Serve index.html for all SPA routes so that client side routing works
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'));
