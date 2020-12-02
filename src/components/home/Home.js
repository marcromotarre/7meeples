import React from "react";
import Card from "../board-game-card/card";
import styled, { css } from "styled-components";
import CardMin from "../board-game-card/card-min";

import devices from "../../utils/devices";

const CardContainer = styled.div`
  margin: 0 auto;
  column-count: 3;
  column-gap: 1.25rem;
  margin: 1.25rem;
  .card {
    margin: 1.25rem 0;
    flex: 0 1 auto;
  }

  @media only screen and ${devices.mobileS} {
    column-count: 1;
  }

  @media only screen and ${devices.mobileM} {
    column-count: 1;
  }

  @media only screen and ${devices.mobileL} {
    column-count: 1;
  }
  @media only screen and ${devices.tablet} {
    column-count: 2;
  }
  @media only screen and ${devices.laptop} {
    column-count: 3;
  }
  @media only screen and ${devices.laptopL} {
    column-count: 3;
  }
  @media only screen and ${devices.desktop} {
    column-count: 4;
  }
  @media only screen and ${devices.desktopL} {
    column-count: 4;
  }
`;
function Home() {
  return (
    <CardContainer>
      <CardMin className="card"></CardMin>
      <Card className="card"></Card>
      <CardMin className="card"></CardMin>
      <Card className="card">></Card>
      <Card className="card">></Card>
      <Card className="card">></Card>
      <Card className="card">></Card>
      <Card className="card">></Card>
      <Card className="card">></Card>
      <Card className="card">></Card>
      <Card className="card">></Card>
      <Card className="card">></Card>
      <Card className="card">></Card>
      <Card className="card">></Card>
      <Card className="card">></Card>
      <Card className="card">></Card>
      <Card className="card">></Card>
      <Card className="card">></Card>
    </CardContainer>
  );
}

export default Home;
