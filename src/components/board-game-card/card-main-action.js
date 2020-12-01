import React from "react";
import styled, { css } from "styled-components";

const CardMainActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0px;

  button {
    background-color: #33bafb;
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 17px;
    cursor: pointer;
    border-radius: 5px;
    font-family: Poppins;
  }
`;
function CardMainAction({ name }) {
  return (
    <CardMainActionContainer>
      <button>COMPRAR</button>
    </CardMainActionContainer>
  );
}

export default CardMainAction;
