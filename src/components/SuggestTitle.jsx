import React, { useState } from "react";

function SuggestTitle(props) {
  // if(vis)
  // {
  //   setTimeout(() => {
  //     setVis(false);
  //   }, 1500);
  // }

  return (
    <>
      <span className="suggestTitle" onClick={(e)=>{props.func(props.data);props.refBtn(true);}}>
        {props.data}
        
        <span className="ratingSpan">
          <span><span className="ratingValueForSuggestion">{props.rating}</span>/10</span>
        </span>
      </span>
    </>
  );
}
export default SuggestTitle;
