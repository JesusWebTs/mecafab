import styled from "styled-components";

const buttonSize = ["50px", "80px", "100px"];

export const CarouselContainerStyled = styled.div`
  height: 50vh;
  background-color: black;
  position: relative;
  overflow-x: hidden;
`;
export const SliderItemStyled = styled.div`
  position: relative;
  display: inline-block;
  width: 100vw;
  height: 100%;
`;
export const SliderContainerStyled = styled.div`
  min-width: max-content;
  height: 100%;
  position: absolute;
  transform: translateX(-${({ translateX }) => translateX}%);
  transition: transform 0.5s ease;
`;
export const ComponentContainerStyled = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
export const ImageStyled = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

export const SelectedContainerStyled = styled.div`
  position: absolute;
  gap: 15px;
  display: flex;
  justify-content: center;
  bottom: 20px;
  width: 100%;
  margin: auto;
`;
export const SelectorStyled = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;
    background-color: black;
    transition: opacity 0.5s ease;
    ${({ current }) => (current ? "opacity: 1;" : "opacity: 0;")}
  }
`;

export const RightButtonStyled = styled.div`
  position: absolute;
  border-radius: 50%;
  width: ${({ size = 0 }) => buttonSize[size]};
  height: ${({ size = 0 }) => buttonSize[size]};
  background-color: #00000077;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${({ size = 0 }) => buttonSize[size]};
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #000000bb;
  }
  &:after {
    content: "";
    position: absolute;
    border-top: 7px solid white;
    border-left: 7px solid white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: ${({ size = 0 }) => buttonSize[size]};
    height: ${({ size = 0 }) => buttonSize[size]};
    transform: scale(0.3) rotate(-45deg);
  }
`;
export const LeftButtonStyled = styled.div`
  position: absolute;
  border-radius: 50%;
  width: ${({ size = 0 }) => buttonSize[size]};
  height: ${({ size = 0 }) => buttonSize[size]};
  background-color: #00000077;
  top: 0;
  bottom: 0;
  margin: auto;
  right: ${({ size = 0 }) => buttonSize[size]};
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #000000bb;
  }
  &:after {
    content: "";
    position: absolute;
    border-bottom: 7px solid white;
    border-right: 7px solid white;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: ${({ size = 0 }) => buttonSize[size]};
    height: ${({ size = 0 }) => buttonSize[size]};
    transform: scale(0.3) rotate(-45deg);
  }
`;
