import React from "react";
import Card from "../board-game-card/card";
import styled, { css } from "styled-components";
import CardMin from "../board-game-card/card-min";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const CardContainer = styled.div`
  width: 85%;
  padding: 5px; /* this */
  > div {
    margin: 5px;
  }
`;
function Home() {
  return (
    <HomeContainer>
      <CardContainer>
        <CardMin></CardMin>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardContainer>
    </HomeContainer>
  );
}

export default Home;
