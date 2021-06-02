import React from "react";
//Styles
import {
  AboutFlexStyled,
  AboutFlexItem,
  FlexHeaderItem,
  TitleItem,
  ParagraphItem
} from "./styles";
import { SectionContainer } from "../styles";
//Content
import content from "../../content/aboutUs";
function AboutPage({ id }) {
  return (
    <SectionContainer id={id}>
      <AboutFlexStyled>
        <AboutFlexItem>
          <FlexHeaderItem>
            <TitleItem>{content.whoWeAre.title}</TitleItem>
          </FlexHeaderItem>
          <ParagraphItem>{content.whoWeAre.content}</ParagraphItem>
        </AboutFlexItem>
        <AboutFlexItem>
          <FlexHeaderItem>
            <TitleItem>{content.mision.title}</TitleItem>
          </FlexHeaderItem>
          <ParagraphItem>{content.mision.content}</ParagraphItem>
        </AboutFlexItem>
        <AboutFlexItem>
          <FlexHeaderItem>
            <TitleItem>{content.whoWeAre.title}</TitleItem>
          </FlexHeaderItem>
          <ParagraphItem>{content.whoWeAre.content}</ParagraphItem>
        </AboutFlexItem>
        <AboutFlexItem>
          <FlexHeaderItem>
            <TitleItem>{content.values.title}</TitleItem>
          </FlexHeaderItem>
          <ParagraphItem>{content.values.content}</ParagraphItem>
        </AboutFlexItem>
      </AboutFlexStyled>
    </SectionContainer>
  );
}

export default AboutPage;
