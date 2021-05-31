import React from "react";
//Styles
import {
  NavBarStyled,
  LogoStyled,
  LinkStyled,
  LinkContainerStyled,
  LinkItemStyled,
} from "./styles";

function NavBar({ content = [] }) {
  return (
    <NavBarStyled>
      <LogoStyled>
        <h2>MecaFab</h2>
      </LogoStyled>
      <LinkContainerStyled>
        {content.map((el) => (
          <LinkItemStyled> 
            <LinkStyled href={el.href}>{el.title}</LinkStyled>
          </LinkItemStyled>
        ))}
        
      </LinkContainerStyled>
    </NavBarStyled>
  );
}

export default NavBar;
