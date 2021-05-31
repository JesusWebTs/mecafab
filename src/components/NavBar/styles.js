import styled from "styled-components";
import colors from "../../styles/colors";

export const NavBarStyled = styled.nav`
  background-color: ${colors.black};
  min-height: 3em;
  display: flex;
  justify-content: space-between;
  padding-left: 3.125em;
  padding-right: 3.125em;
  position: sticky;
  top: 0;
`;

export const LogoStyled = styled.div`
  color: ${colors.white};
`;

export const LinkContainerStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 14px;
  list-style: none;
`;

export const LinkItemStyled = styled.li`
  height: 100%;
  cursor: pointer;
  padding: 5px;
  min-width: 70px;
  border-radius: 8px;
  position: relative;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.3);
  }

  &:before {
    content: "";
    position: absolute;
    background-color: white;
    width: 100%;
    height: 3px;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
    transition: transform 0.5s ease;
    transform: scale(0);
  }
  &:hover:before {
    transform: scale(1);
  }
`;

export const LinkStyled = styled.a`
  color: ${colors.white};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
