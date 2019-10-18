interface IImageProps {
  node: {
    name: string;
    publicURL: string;
  };
}

export const getImagePath = (images: IImageProps[], imageName: string): string => {
  const imagePath = images.filter((image) => image.node.name === imageName);

  return imagePath[0].node.publicURL;
};
