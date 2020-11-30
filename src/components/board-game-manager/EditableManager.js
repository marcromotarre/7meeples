import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import firebase from "firebase";

// Firebase App (the core Firebase SDK) is always required and must be listed first

// If you enabled Analytics in your project, add the Firebase SDK for Analytics

// Add the Firebase products that you want to use

const Editable = styled.div`
  border: border: 1px solid black;
`;

function EditableManager({ id, name }) {
  let db = firebase.firestore();

  const [value, setValue] = useState("");
  const onHandleSave = () => {
    console.log("click save");
    db.collection("castegories")
      .doc("LA")
      .set({
        name: "Los Angeles",
        state: "CA",
        country: "USA",
      })
      .then(function () {
        console.log("Document successfully written!");
        debugger;
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
        debugger;
      });
  };

  return (
    <Editable>
      <input type="text" value={value} onChange={onHandleSave} />
      <label>({name})</label>
      <button onClick={onHandleSave}>Save</button>
    </Editable>
  );
}

export default EditableManager;
