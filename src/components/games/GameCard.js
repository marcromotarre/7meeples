import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const GameCardContainer = styled.div`
  font-family: Poppins;
  p {
    padding: 0;
    margin: 0;
  }
`;

const Name = styled.p`
  color: #000;
  font-size: 17px;
  font-weight: lighter;
`;
const PriceInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Price = styled.p`
  font-size: 17px;
  color: #a0a1a3;
`;
const PVP = styled.p`
  color: #a0a1a3;
  font-size: 12px;
  text-decoration: line-through;
`;
const Discount = styled.div`
  padding: 10px;
  background: #ff4350;
  border-radius: 10px;
  p {
    font-size: 12px;
    color: white;
  }
`;

function GameCard({ name, price, pvp }) {
  console.log(name, price, pvp);

  return (
    <GameCardContainer>
      <Name>{name}</Name>
      <PriceInfo>
        <Price price>{price} €</Price>
        {price <= pvp && (
          <>
            <PVP>{pvp} €</PVP>
            <Discount>
              <p>{(pvp - price).toFixed(2)} €</p>
            </Discount>
          </>
        )}
      </PriceInfo>
    </GameCardContainer>
  );
}

export default GameCard;
