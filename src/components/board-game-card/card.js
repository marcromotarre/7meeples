import React from "react";
import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";
import CardSection from "./card-section";
import CardImage from "./card-image";
import CardSectionMore from "./card-section-more";
import CardName from "./card-name";
import CardPrice from "./card-price";
import CardMainAction from "./card-main-action";
const CardContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;

const Separator = styled.div`
  width: 100%;
  height: 0.05em;
  background-color: rgba(181, 181, 181, 0.5);
`;

const numberOfPlayers = {
  name: "number-of-players",
  width: 23,
  height: 20
};

const recommendedAge = {
  name: "recommended-age",
  width: 23,
  height: 20
};

const weight = {
  name: "weight",
  width: 23,
  height: 20
};
const playTime = { name: "play-time", width: 23, height: 20 };

function Card({ className, name, icon }) {
  return (
    <CardContainer className={className}>
      <CardImage
        img={"https://m.media-amazon.com/images/I/51iYSRyQF2L._AC_SY355_.jpg"}
      ></CardImage>
      <CardName name={"Catan"} />
      <CardPrice price={29} pvp={32} />
      <CardMainAction />
      <Separator />
      <CardSection name={"60 - 120 min"} icon={playTime}></CardSection>
      <Separator />
      <CardSection name={"10+ años"} icon={recommendedAge}></CardSection>
      <Separator />
      <CardSection
        name={"3 a 4 jugadores"}
        icon={numberOfPlayers}
      ></CardSection>
      <Separator />
      <CardSection name={"2.35 / 5"} icon={weight}></CardSection>
      <Separator />
      <CardSectionMore />
    </CardContainer>
  );
}

export default Card;
