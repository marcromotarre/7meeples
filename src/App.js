import "./App.css";
import React from "react";
import { useRoutes } from "hookrouter";
import BoardGameManager from "./components/board-game-manager/BoardGameManager";
import Home from "./components/home/Home";
import NotFound from "./components/not-found/NotFound";
import CommingSoon from "./components/coming-soon/CommingSoon";

const routes = {
  "/": () => <CommingSoon />,
  "/home": () => <Home />,
  "/board-game-manager": () => <BoardGameManager />,
  "/not-found": () => <NotFound />,
  //'/products/:id': ({id}) => <ProductDetails id={id} />
};

const App = () => {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFound />;
};

export default App;
