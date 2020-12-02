import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import { navigate, useRedirect } from "hookrouter";
import Home from "../home/Home";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

const Proximamente = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  p {
    font-family: Poppins-Thin;
    padding: 0;
    margin: 0;
    font-size: 40px;
  }
  .grey {
    color: #b5b5b5;
  }
  .grey-shadow {
    color: #c4c4c4;
  }

  .red {
    color: #ea4335;
  }
  .red-shadow {
    color: #ec564a;
  }

  .yellow {
    color: #fbf205;
  }
  .yellow-shadow {
    color: #fcf31e;
  }

  .blue {
    color: #4285f4;
  }
  .blue-shadow {
    color: #5591f5;
  }

  .green {
    color: #ea4335;
  }
  .green-shadow {
    color: #49b165;
  }

  .black {
    color: #000000;
  }
  .black-shadow {
    color: #1a1a1a;
  }
`;

const routes = {
  "/": () => <CommingSoon />,
  "/home": () => <Home />
};

function CommingSoon() {
  const colors = [
    { name: "red" },
    { name: "blue" },
    { name: "green" },
    { name: "yellow" },
    { name: "black" }
  ];
  var randomNumber = Math.floor(Math.random() * colors.length);
  const svgName = `sevenmeeples${colors[randomNumber].name}.svg`;

  const size = useWindowSize();

  const meepleHeight = size.height * 0.6;
  const meepleWidth = size.width * 0.6;
  const aspect_ratio = 1.14;
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }
  return (
    <Container>
      <ReactSVG
        src={svgName}
        aria-label="7 meeples"
        role="img"
        beforeInjection={svg => {
          svg.setAttribute("style", `height: ${meepleHeight}`);
          svg.setAttribute("style", `width: ${meepleHeight / aspect_ratio}`);
        }}
      />
      <Proximamente>
        <p onClick={handleClick} className={"grey-shadow"}>
          PROX
        </p>
        <p className={"grey"}>IM</p>
        <p className={`${colors[randomNumber].name}-shadow`}>AME</p>
        <p className={`${colors[randomNumber].name}`}>NTE</p>
      </Proximamente>
    </Container>
  );
}

export default CommingSoon;

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
