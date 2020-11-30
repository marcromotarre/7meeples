import { playersPoll } from "./utils/number-of-players";
export const BGGParser = (gameData) => {
  console.log(gameData.boardgames.boardgame);

  return {
    id: gameData.boardgames.boardgame["@attributes"].objectid,
    name: gameData.boardgames.boardgame.name[0]["#text"],
    year: gameData.boardgames.boardgame.yearpublished["#text"],
    age: gameData.boardgames.boardgame.age["#text"],
    players: playersPoll(gameData),
    playTime: {
      min: gameData.boardgames.boardgame.minplaytime["#text"],
      max: gameData.boardgames.boardgame.minplaytime["#text"],
    },
    rating: {
      average:
        gameData.boardgames.boardgame.statistics.ratings.average["#text"],
      numVotes:
        gameData.boardgames.boardgame.statistics.ratings.usersrated["#text"],
      ranks: gameData.boardgames.boardgame.statistics.ratings.ranks.rank.map(
        (rank) => ({
          id: rank["@attributes"].id,
          position: parseInt(rank["@attributes"].value),
          name: rank["@attributes"].name,
        })
      ),
    },
    expansions: gameData.boardgames.boardgame.boardgameexpansion.map(
      (expansion) => expansion["@attributes"].objectid
    ),
    designer:
      gameData.boardgames.boardgame.boardgamedesigner["@attributes"].objectid,
    categories: gameData.boardgames.boardgame.boardgamecategory.map(
      (category) => ({
        id: category["@attributes"].objectid,
        name: category["#text"],
      })
    ),
  };
};
