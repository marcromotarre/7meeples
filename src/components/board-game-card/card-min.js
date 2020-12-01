import React from "react";
import styled, { css } from "styled-components";
import CardSection from "./card-section";
import CardImage from "./card-image";
import CardSectionMore from "./card-section-more";
import CardName from "./card-name";
import CardPrice from "./card-price";
import CardMainAction from "./card-main-action";
const CardContainer = styled.div`
  width: 100%;
  border: 0.5px solid #b5b4b4;
  border-radius: 10px;
`;

const Separator = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: #b5b4b4;
`;

const numberOfPlayers = {
  name: "number-of-players",
  width: 23,
  height: 20
};

function CardMin({ name, icon }) {
  return (
    <CardContainer>
      <CardImage
        img={"https://m.media-amazon.com/images/I/51iYSRyQF2L._AC_SY355_.jpg"}
      ></CardImage>
      <CardName name={"Catan"} />
      <CardPrice price={29} pvp={32} />
      <CardMainAction />
      <Separator />
      <CardSectionMore />
    </CardContainer>
  );
}

export default CardMin;
