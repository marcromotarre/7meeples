import React from "react";
import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";

const CardSectionMoreContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50px;
`;

function CardSectionMore({ name, icon }) {
  return (
    <CardSectionMoreContainer>
      <ReactSVG
        src={`more-points.svg`}
        aria-label="more"
        role="img"
        beforeInjection={svg => {
          svg.setAttribute("style", `height: 4`);
          svg.setAttribute("style", `width: 28`);
        }}
      />
    </CardSectionMoreContainer>
  );
}

export default CardSectionMore;
