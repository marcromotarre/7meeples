import React from "react";
import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";

const CardImageContainer = styled.div`
  width: 100%;
  display: flex;
  
  justify-content: center;
  align: items: center;
  img {
    width: 80%;
  }
`;

function CardImage({ src }) {
  return (
    <CardImageContainer>
      <img
        src="https://m.media-amazon.com/images/I/51iYSRyQF2L._AC_SY355_.jpg"
        alt="new"
      />
    </CardImageContainer>
  );
}

export default CardImage;
