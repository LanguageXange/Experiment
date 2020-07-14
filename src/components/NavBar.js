import React from "react";
import { Scroll } from "./Scroll";

export const NavBar = () => {
  const ScrollHandler = Scroll();
  // call the function
  return (
    <div>
      {ScrollHandler ? (
        <div
          style={{
            width: "100%",
            position: "fixed",
            top: "58%",
            left: "0%",
            height: "210px",
            backgroundColor: "rgba(120,150,150,0.8)",
            transition: "all 0.4s",
          }}
        ></div>
      ) : (
        <nav>
          <ul
            style={{
              backgroundColor: "rgb(45,45, 45)",
            }}
          >
            <li>
              {" "}
              <a href="#">Home</a>
            </li>
            <li>
              {" "}
              <a href="#">About</a>
            </li>
            <li>
              {" "}
              <a href="#">Products</a>
            </li>
            <li>
              {" "}
              <a href="#">Contact</a>
            </li>
          </ul>
          <div
            style={{
              width: "100%",
              position: "fixed",
              top: "50%",
              left: "0%",
              height: "200px",
              backgroundColor: "rgba(20,150,150,0)",
            }}
          ></div>
        </nav>
      )}
    </div>
  );
};
