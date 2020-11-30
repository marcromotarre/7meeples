import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import EditableManager from "./EditableManager";

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
`;

const Categories = styled.div``;

const Category = styled.div``;

function BoardGameManagerDetails({ boardGameData }) {
  const {
    id,
    name: nameBGG,
    age,
    year,
    players,
    playTime,
    rating,
    categories,
    designer,
  } = boardGameData;
  debugger;
  console.log(boardGameData);
  const [name, setName] = useState(nameBGG);

  const handleSubmit = (event) => {};
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label>ID: {id}</label>
        <label>
          Name of the Game
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Rate: {rating.average} --> {rating.numVotes}votes
        </label>
        <Categories>
          <h1>Categories</h1>
          {categories.map(({ id, name }) => (
            <EditableManager key={id} id={id} name={name} />
          ))}
        </Categories>
        <input type="submit" value="Submit" />
      </Form>

      <p>
        Ranks:
        {rating.ranks
          .map(({ id, name, position }) => `${id}: ${name}(${position})`)
          .join()}
      </p>
      <p>Age: {age}+</p>
      <p>Year: {year}</p>
      <p>
        Players: {players.min} - {players.max} (Recomended:
        {players.recommended.join()}) (best:{players.best.join()})
      </p>
      <p>
        Play Time: {playTime.min}-{playTime.max} min
      </p>
    </>
  );
}

export default BoardGameManagerDetails;
