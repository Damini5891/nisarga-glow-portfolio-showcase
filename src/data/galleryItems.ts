export interface GalleryItem {
  type: 'image' | 'video';
  src?: string;
  title: string;
  category: string;
  description: string;
  url?: string;
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const imageModules = import.meta.glob('../../public/events/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,gif,GIF,heic,HEIC}', {
  eager: true,
  as: 'url',
});

const autoGallery: GalleryItem[] = Object.entries(imageModules).map(([path, url]) => {
  const match = /public\/(?:events)\/([^/]+)\/([^/]+)$/.exec(path);
  const categorySlug = match?.[1] ?? 'events';
  const file = match?.[2] ?? '';
  const title = file.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
  const description = `${capitalize(categorySlug)} event - ${title}`;
  return {
    type: 'image',
    src: url as string,
    title,
    category: capitalize(categorySlug),
    description,
  };
});

import customGallery from './customGallery.json';

export const galleryItems = customGallery;
export const categories = ['All', ...Array.from(new Set(customGallery.map((item) => item.category)))];
