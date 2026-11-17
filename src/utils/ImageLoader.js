const images = import.meta.glob(
  '../assets/cards/**/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default'
  }
);

export function getCardImages(cardId, type) {
  const foundImages = Object.entries(images)
    .filter(([path]) => {
      return path.includes(`card-${cardId}/${type}/`);
    })
    .sort(([a], [b]) => a.localeCompare(b));

  console.log("FOUND IMAGES:", foundImages);

  return foundImages.map(([path, url], index) => ({
    url,
    alt: `${type} image ${index + 1}`
  }));
}