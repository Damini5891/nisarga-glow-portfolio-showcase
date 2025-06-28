from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
from PIL import Image
from pathlib import Path
import json
import uuid

app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = 20 * 1024 * 1024  # 20 MB limit
CORS(app)

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / 'data'
PUBLIC_DIR = Path(__file__).resolve().parents[1] / 'public'
EVENTS_DIR = PUBLIC_DIR / 'events'
GALLERY_FILE = DATA_DIR / 'gallery.json'
REVIEWS_FILE = DATA_DIR / 'reviews.json'

EVENTS_DIR.mkdir(parents=True, exist_ok=True)
DATA_DIR.mkdir(parents=True, exist_ok=True)
if not GALLERY_FILE.exists():
    GALLERY_FILE.write_text('[]')
if not REVIEWS_FILE.exists():
    REVIEWS_FILE.write_text('[]')

def load_json(path):
    with open(path, 'r') as f:
        return json.load(f)

def save_json(path, data):
    with open(path, 'w') as f:
        json.dump(data, f, indent=2)

@app.errorhandler(413)
def too_large(e):
    return jsonify({'error': 'file too large'}), 413

@app.route('/api/gallery', methods=['GET'])
def get_gallery():
    return jsonify(load_json(GALLERY_FILE))

@app.route('/api/gallery', methods=['POST'])
def upload_gallery():
    title = request.form.get('title')
    description = request.form.get('description')
    event = request.form.get('event')
    other_event = request.form.get('other_event')
    if not title or not description or not event:
        return jsonify({'error': 'missing fields'}), 400
    category = other_event if event.lower() == 'others' else event
    folder = EVENTS_DIR / category
    folder.mkdir(parents=True, exist_ok=True)
    gallery = load_json(GALLERY_FILE)
    uploaded_items = []
    files = request.files.getlist('images')
    for file in files:
        ext = Path(secure_filename(file.filename)).suffix or '.png'
        existing = list(folder.glob('*' + ext))
        next_idx = len(existing) + 1
        filename = f"{next_idx}{ext}"
        filepath = folder / filename
        # compress image
        img = Image.open(file.stream)
        img.save(filepath, optimize=True, quality=70)
        rel_path = f"/events/{category}/{filename}"
        item = {
            'type': 'image',
            'src': rel_path,
            'title': title,
            'category': category,
            'description': description
        }
        gallery.append(item)
        uploaded_items.append(item)
    save_json(GALLERY_FILE, gallery)
    return jsonify({'uploaded': uploaded_items})

@app.route('/api/reviews', methods=['GET'])
def get_reviews():
    reviews = load_json(REVIEWS_FILE)
    reviews = list(reversed(reviews))[:3]
    return jsonify(reviews)

@app.route('/api/reviews', methods=['POST'])
def add_review():
    data = request.get_json(force=True)
    text = data.get('text')
    author = data.get('author')
    if not text or not author:
        return jsonify({'error': 'missing fields'}), 400
    reviews = load_json(REVIEWS_FILE)
    reviews.append({'text': text, 'author': author})
    save_json(REVIEWS_FILE, reviews)
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    app.run(debug=True)
