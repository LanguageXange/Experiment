import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Main } from "./components/Main";
import Particles from "react-particles-js";
import { Scroll } from "./components/Scroll";
import { CardList } from "./components/CardList";

function App() {
  const ScrollHandler = Scroll();
  return (
    <div>
      <NavBar />

      {ScrollHandler ? (
        <Particles className="particle2" />
      ) : (
        <Particles
          className="particle"
          params={{
            particles: {
              number: {
                value: 400,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
            },
          }}
        />
      )}
      <Main />
      <CardList />
    </div>
  );
}

export default App;
