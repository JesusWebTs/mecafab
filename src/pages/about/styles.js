import styled from "styled-components";

export const AboutFlexStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 320px;
  gap: 10px;
`;

export const AboutFlexItem = styled.article`
  max-width: 45%;
  &:nth-child(even) {
    text-align: left;
  }
  &:nth-child(odd) {
    text-align: right;
  }
`;
export const FlexHeaderItem = styled.header``;
export const TitleItem = styled.h2`
  font-size: 24px;
`;
export const ParagraphItem = styled.p`
  font-size: 17px;
`;
export const IconItem = styled.i``;
