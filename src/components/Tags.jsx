import React from "react";
import Refresh from "./Refresh";
import SuggestTag from "./SuggestTag";

export default function Tags(props)
{
    return (
        <>
         <span className="productTag">Launched in : </span>
          {props.tags.map((e) => (
            <span className="productTagItem" key={e}>
              {e}
            </span>
          ))}{" "}
          {props.refreshBtn_tag ? (
            <Refresh val={props.originalTag} func={props.setTags} refBtn={props.setRefTagBtn} />
          ) : (
            <></>
          )}
          {/* suggestion tags */}
          {props.suggTag.length > 0 && (
            <span className="tagSuggestWhole">
              Suggestions:
              {props.suggTag.map((e) => (
                <SuggestTag
                  data={e}
                  key={e}
                  arrayVal={props.tags}
                  func={props.setTags}
                  refBtn={props.setRefTagBtn}
                />
              ))}
            </span>
          )}
          <br />
          <br />
          <br />
        </>
    );
}