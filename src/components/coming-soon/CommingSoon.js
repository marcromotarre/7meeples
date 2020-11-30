import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";

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
    font-weight: 300;
    padding: 0;
    margin: 0;
    font-size: 40px;
    color: ${props => props.lettercolor};
  }
`;

function CommingSoon() {
  const colors = [
    { name: "red", shadow_color: "#EC564A", color: "#EA4335" },
    { name: "blue", shadow_color: "#5591F5", color: "#4285F4" },
    { name: "green", shadow_color: "#49B165", color: "#EA4335" },
    { name: "yellow", shadow_color: "#FCC31E", color: "#34A853" },
    { name: "black", shadow_color: "#1A1A1A", color: "#000000" }
  ];
  var randomNumber = Math.floor(Math.random() * colors.length);
  const svgName = `sevenmeeples${colors[randomNumber].name}.svg`;

  const size = useWindowSize();
  const shadow_grey = "#C4C4C4";
  const grey = "#B5B5B5";

  const meepleWidth = size.width * 0.6;
  const aspect_ratio = 1.14;

  return (
    <Container>
      <ReactSVG
        src={svgName}
        aria-label="7 meeples"
        role="img"
        beforeInjection={svg => {
          svg.setAttribute("style", `width: ${meepleWidth}`);
          svg.setAttribute("style", `height: ${meepleWidth * aspect_ratio}`);
        }}
      />
      <Proximamente>
        <p lettercolor={shadow_grey}>PROX</p>
        <p lettercolor={grey}>IM</p>
        <p
          colorname={colors[randomNumber].name}
          lettercolor={`rgb(52, 168, 83)`}
        >
          AME
        </p>
        <p
          colorname={colors[randomNumber].name}
          lettercolor={colors[randomNumber].color}
        >
          NTE
        </p>
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
