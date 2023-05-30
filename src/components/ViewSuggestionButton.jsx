import React, { useState } from "react";

export default function ViewSuggestionButton(props) {
  const [oncePressed,setOncePressed] = useState(false);

  function handleClick()
  {
    setOncePressed(true);
    props.fetchSuggestion();
  }


  var suggestionBtnText=oncePressed?"Regenerate suggestions":"View suggestions";

  return (
    <>
      <span
        className="viewSuggestion"
        onClick={handleClick}
        hidden={props.highlight.length > 1 ? false : true}
      >
        {props.viewSuggBtn ? (
          suggestionBtnText
        ) : props.suggTitle.length > 0 ? (
          "Regenerate Suggestions!"
        ) : (
          <div>
            <img
              src="https://media.giphy.com/media/j6XZlxTBLE1taAzsGV/giphy.gif"
              style={{ height: "2rem" }}
            />{" "}
            Please wait...{" "}
          </div>
        )}
      </span>
    </>
  );
}
