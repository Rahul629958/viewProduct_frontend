import React from "react";
import { quoteText } from "./GetTextData";

export default function WaitBox(props) {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        width: "fit-content",
        maxWidth: "85%",
      }}
    >
      <div
        className="container-fluid"
        style={{
          width: "100%",
          backgroundColor: "white",
          boxShadow: "-2px 2px 10px black",
          textAlign: "center",
          borderRadius: "1rem",
          borderWidth: "1px",
          position: "relative",
          marginTop: "10rem",
          left: "-50%",
          padding: "2rem",
          zIndex: "5",
          backgroundImage: "url(../backgroundGIF.gif)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
        hidden={!props.viewSuggestBtn && props.length < 1 ? false : true}
      >
        <div>
          {" "}
          <img
            src="https://media.giphy.com/media/KfYbeDxMELQqeOlLIj/giphy.gif"
            style={{ height: "10rem" }}
          />
        </div>
        <span style={{ fontSize: "110%", fontWeight: "500" }}>
          We kindly request your patience as we generate precise suggestions.
        </span>
        <br />
        <i>
          (This process may take anywhere from 30 seconds to one minute to
          complete, please hold on..)
        </i>
        <br />
        <p style={{ color: "green" }}>"{quoteText}"</p>
      </div>
    </div>
  );
}
