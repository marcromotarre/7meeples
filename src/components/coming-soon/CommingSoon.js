import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CommingSoon() {
  const colors = ["red", "green", "blue", "yellow", "black", "grey"];
  var randomNumber = Math.floor(Math.random() * colors.length);
  const svgName = `sevenmeeples${colors[randomNumber]}.svg`;
  return (
    <Container>
      <ReactSVG
        src={svgName}
        aria-label="7 meeples"
        role="img"
        beforeInjection={(svg) => {
          svg.setAttribute("style", "width: 300px");
        }}
      />
    </Container>
  );
}

export default CommingSoon;
