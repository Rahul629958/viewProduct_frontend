import React from "react";

export default function DemonstratedMedia(props) {
  const text = props.text;
  const count = props.count;

  return (
    <>
      <span style={{ margin: "0.5rem 1.5rem 1rem 0rem", color: "white",display:"inline-block" }}>
        <span
          style={
            text.includes("videos")
              ? count < 2
                ? { backgroundColor: "red" ,padding:"0.5rem 1rem 0.5rem 1rem",borderRadius:"1rem",marginBottom:"1rem"}
                : { backgroundColor: "green" ,padding:"0.5rem 1rem 0.5rem 1rem",borderRadius:"1rem",marginBottom:"1rem"}
              : count < 4
              ? { backgroundColor: "red" ,padding:"0.5rem 1rem 0.5rem 1rem",borderRadius:"1rem",marginBottom:"1rem"}
              : { backgroundColor: "green" ,padding:"0.5rem 1rem 0.5rem 1rem",borderRadius:"1rem",marginBottom:"1rem"}
          }
        >
          {" "}
          Demonstrated {text.includes("videos") ? " Videos: " : " Images: "}
          {count}
        </span>
      </span>
    </>
  );
}
