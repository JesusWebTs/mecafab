import { useEffect, useState } from "react";

export const useShowImage = ({ numberImages = 0 }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    return setTranslateX((currentImage * 100) / numberImages);
    return () => {};
  }, [currentImage]);
  const nextImage = () => {
    if (currentImage >= numberImages - 1)
      return setCurrentImage((prevState) => 0);

    setCurrentImage((prevState) => prevState + 1);
  };
  const prevImage = () => {
    if (currentImage <= 0)
      return setCurrentImage((prevState) => numberImages - 1);
    setCurrentImage((prevState) => prevState - 1);
  };

  const setImage = (image) => {
    setCurrentImage(image);
  };
  return {
    currentImage,
    translateX,
    nextImage,
    prevImage,
    setImage
  };
};
