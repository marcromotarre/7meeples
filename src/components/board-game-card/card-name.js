import React from "react";
import styled, { css } from "styled-components";

const CardNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-left: 30px;
  p {
    font-family: Poppins;
    font-size: 24px;
    padding: 0;
    margin: 0;
  }
`;
function CardName({ name }) {
  return (
    <CardNameContainer>
      <p>{name}</p>
    </CardNameContainer>
  );
}

export default CardName;
