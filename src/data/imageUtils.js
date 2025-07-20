import Modern from '../assets/Homepics/Modern.jpeg';
import Suburban from '../assets/Homepics/Suburban.jpeg';
import Mountain from '../assets/Homepics/Mountain.jpeg';
import Waterfront from '../assets/Homepics/Waterfront.jpeg';

// Put fallback images in an array
const fallbackImages = [Modern, Suburban, Mountain, Waterfront];

// Image cache to avoid recomputing
const imageCache = {};

export const getPropertyImageById = (id) => {
  if (imageCache[id]) {
    return imageCache[id];
  }

  try {
    const imageUrl = new URL(`../assets/Homepics/image_${id}.jpg`, import.meta.url).href;
    imageCache[id] = imageUrl;
    return imageUrl;
  } catch {
    let fallbackImage;
    for (let i = 0; i < fallbackImages.length; i++) {
      if (id % fallbackImages.length === i) {
        fallbackImage = fallbackImages[i];
        break;
      }
    }
    imageCache[id] = fallbackImage;
    return fallbackImage;
  }
};