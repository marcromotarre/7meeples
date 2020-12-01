import React from "react";
import styled, { css } from "styled-components";

const CardPriceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-left: 10px;
  p {
    font-family: Poppins-Thin;
    padding: 0;
    margin: 0;
  }

  .price {
    font-size: 19px;
    margin-right: 10px;
  }
  .pvp {
    font-size: 14px;
    margin-right: 5px;
  }

  .discount {
    p {
      font-family: Poppins;
      font-size: 14px;
      color: white;
    }
    padding: 0px 5px;
    background-color: #ff4350;
    border-radius: 2px;
  }
`;
function CardPrice({ price, pvp }) {
  const discount = pvp - price;
  return (
    <CardPriceContainer>
      <p className="price">{price.toFixed(2)} €</p>
      {discount >= 0 && (
        <>
          <p className="pvp">{pvp.toFixed(2)} €</p>
          <div className="discount">
            <p>-{discount.toFixed(2)} €</p>
          </div>
        </>
      )}
    </CardPriceContainer>
  );
}

export default CardPrice;
