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
const manualGallery: GalleryItem[] = [
  {
    type: 'video',
    title: 'Vijay Prakash Concert',
    category: 'Featured',
    url: 'https://www.instagram.com/reel/DJOZpguv6He/',
    description: 'Exclusive collaboration with music maestro Vijay Prakash',
  },
  ...(customGallery as GalleryItem[]),
];

export const galleryItems: GalleryItem[] = [...autoGallery, ...manualGallery];

export const categories = ['All', ...Array.from(new Set(galleryItems.map((item) => item.category)))];
