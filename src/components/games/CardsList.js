import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GameCard from "./GameCard";

const CardsListContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

function CardsList({ games = [] }) {
  return (
    <CardsListContainer>
      {games.map(({ id, name, price, pvp }) => (
        <GameCard key={id} name={name} pvp={pvp} price={price} />
      ))}
    </CardsListContainer>
  );
}

export default CardsList;
