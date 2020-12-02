import React from "react";
import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";

const CardSectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 80%;
  p {
    font-family: Poppins-Thin;
    padding: 0;
    margin: 0;
    font-size: 20px;
  }
`;

function CardSection({ name, icon }) {
  return (
    <CardSectionContainer>
      <CardTitle>
        <p>{name}</p>
        <ReactSVG
          src={`${icon.name}.svg`}
          aria-label="7 meeples"
          role="img"
          beforeInjection={svg => {
            svg.setAttribute("style", `height: 30`);
            svg.setAttribute("style", `width: 30`);
          }}
        />
      </CardTitle>
    </CardSectionContainer>
  );
}

export default CardSection;
