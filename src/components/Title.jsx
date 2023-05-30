import React from 'react';
import Rating from './Rating';
import Refresh from './Refresh';

export default function Title(props)
{
    return (
        <>
          <span
            className="productTitle"
            onClick={(e) => {
              window.open(props.link, "_blank", "width=800,height=600");
            }}
          >
            {props.title}{" "}
          </span>
          {/* Refresh button for title */}
          {props.highlightLength > 1 && !props.refreshTitle && (
            <Rating val={props.ratingVal} />
          )}
          {props.refreshTitle ? (
            <Refresh
              val={props.originalTitle}
              func={props.setTitle}
              refBtn={props.setRefTitleBtn}
            />
          ) : (
            <></>
          )}
        </>
    );
}