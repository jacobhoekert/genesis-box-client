const IMAGE_SIZE = '_400x400';

export const BuildImageUrl = (image) => {
  return image.src.slice(0,image.src.search(/\.(jpe?g|gif|png|tiff)/))
    + IMAGE_SIZE
    + image.src.slice(image.src.search(/\.(jpe?g|gif|png|tiff)/))
}