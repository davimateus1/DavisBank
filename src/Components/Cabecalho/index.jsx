import React from "react";
import styled from "styled-components";
import bank_logo from "../../assets/images/bank_logo.png";
import { corPrimaria } from "../UI/variaveis";

const ButtonCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props) => (props.primary ? "white" : corPrimaria)};
  color: ${(props) => props.primary ? corPrimaria : "white"};
`;

const StyledHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <ButtonCabecalho target="_blank" href="https://github.com/davimateus1">
          Github
        </ButtonCabecalho>
        <ButtonCabecalho primary target="_blank" href="https://www.linkedin.com/in/davimateusg/">
          LinkedIn
        </ButtonCabecalho>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
