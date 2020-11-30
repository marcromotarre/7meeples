import React from "react";
import CardsList from "../games/CardsList";
import games from "../../fixtures/games";
function Home() {
  return (
    <>
      <h1>Home</h1>
      <CardsList games={games}></CardsList>
    </>
  );
}

export default Home;
