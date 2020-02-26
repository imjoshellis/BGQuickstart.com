import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";

function App() {
  const [spr, set] = useSpring(() => ({ opacity: 1 }));

  return (
    <>
      <animated.div style={spr}>I will fade in</animated.div>
      <button onClick={() => set({ opacity: 0 })}>fade</button>
    </>
  );
}

const FadeInOut = () => {
  const props = useSpring({
    to: [
      { opacity: 1, color: "#ffaaee" },
      {
        to: [
          { opacity: 0, color: "rgb(14,26,19)" },
          { opacity: 1, color: "rgb(14,26,19)" }
        ]
      }
    ],
    from: { opacity: 0, color: "red" }
  });
  // ...
  return <animated.div style={props}>I will fade in and out</animated.div>;
};

const SpringTesting = () => {
  return (
    <>
      <App />
      <FadeInOut />
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<SpringTesting />, rootElement);
