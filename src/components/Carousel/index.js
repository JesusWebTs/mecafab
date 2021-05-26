import React from "react";
//hooks
import { useShowImage } from "./hook/useShowImage";
//styles
import {
  CarouselContainerStyled,
  LeftButtonStyled,
  RightButtonStyled,
  ImageStyled,
  SelectedContainerStyled,
  SelectorStyled,
  SliderContainerStyled,
  ComponentContainerStyled,
  SliderItemStyled,
} from "./styles";

function Caroucel({ children, content = [] }) {
  const { nextImage, prevImage, translateX, currentImage, setImage } =
    useShowImage({
      numberImages: content.length,
    });
  return (
    <CarouselContainerStyled>
      <SliderContainerStyled translateX={translateX}>
        {content.map((el) => (
          <SliderItemStyled>
            <ImageStyled image={el.image} />
            <ComponentContainerStyled>{el.component}</ComponentContainerStyled>
          </SliderItemStyled>
        ))}
      </SliderContainerStyled>
      <LeftButtonStyled onClick={nextImage}></LeftButtonStyled>
      <RightButtonStyled onClick={prevImage}></RightButtonStyled>
      <SelectedContainerStyled>
        {content.map((el, index) => (
          <SelectorStyled
            onClick={() => setImage(index)}
            current={currentImage === index ? true : false}
          />
        ))}
      </SelectedContainerStyled>
    </CarouselContainerStyled>
  );
}

export default Caroucel;
