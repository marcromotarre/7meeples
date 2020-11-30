import React, { useEffect, useState } from "react";
import axios from "axios";
import BoardGameManagerDetails from "./BoardGameManagerDetails";
import xml2json from "../../utils/xml2json";
import { BGGParser } from "./BGGParser";

function BoardGameManger() {
  const [value, setValue] = useState("39856");
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.boardgamegeek.com/xmlapi/boardgame/${search}?stats=1`
      );
      var domParser = new DOMParser();
      var xmlDocument = domParser.parseFromString(result.data, "text/xml");
      setData(BGGParser(xml2json(xmlDocument)));
    };
    if (search !== "") {
      fetchData();
    }
  }, [search]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    setSearch(value);
    event.preventDefault();
  };
  return (
    <>
      {!data && (
        <form onSubmit={handleSubmit}>
          <label>
            Please type id of the game You can find in in BGG:
            <input type="text" value={value} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )}
      {data && (
        <BoardGameManagerDetails boardGameData={data}></BoardGameManagerDetails>
      )}
    </>
  );
}

export default BoardGameManger;
