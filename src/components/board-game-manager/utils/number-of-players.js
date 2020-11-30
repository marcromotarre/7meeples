import { isBest, isRecommended } from "./bgg-utils";

export const playersPoll = (gameData) => {
  const playersInfo = gameData.boardgames.boardgame.poll
    .filter((elem) => elem["@attributes"].name === "suggested_numplayers")[0]
    .results.filter((elem) => !elem["@attributes"].numplayers.includes("+"))
    .map((players) => {
      return {
        numPlayers: parseInt(players["@attributes"].numplayers),
        votes: {
          best: parseInt(
            players.result.filter(
              (element) => element["@attributes"].value === "Best"
            )[0]["@attributes"].numvotes
          ),
          recommended: parseInt(
            players.result.filter(
              (element) => element["@attributes"].value === "Recommended"
            )[0]["@attributes"].numvotes
          ),
          no: parseInt(
            players.result.filter(
              (element) => element["@attributes"].value === "Not Recommended"
            )[0]["@attributes"].numvotes
          ),
        },
      };
    });

  const poll = {
    best: playersInfo
      .filter((elem) => isBest(elem.votes))
      .map((nP) => nP.numPlayers),
    recommended: playersInfo
      .filter((elem) => isRecommended(elem.votes))
      .map((nP) => nP.numPlayers),
    no: playersInfo
      .filter((elem) => !isRecommended(elem.votes))
      .map((nP) => nP.numPlayers),
  };
  return {
    min: gameData.boardgames.boardgame.minplayers["#text"],
    max: gameData.boardgames.boardgame.maxplayers["#text"],
    ...poll,
  };
};
