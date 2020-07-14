import React from "react";
import { Parallax, Background } from "react-scroll-parallax";
export const Card = () => {
  return (
    <div className="card">
      <Parallax>
        <div>
          <h2>FOCUS</h2>
          <p style={{ fontSize: "70px", color: "rgba(0,0,0,0.0)" }}>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </Parallax>
      {/* <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={`${data2}`}
        bgImageAlt="the dog"
        strength={-200}
      >
        Blur transition from min to max
        <div style={{ height: "200px" }} />
      </Parallax> */}
    </div>
  );
};
