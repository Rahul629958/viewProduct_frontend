import React from "react";

export default function ProductIcon(props)
{
    return (
        <>
         <div>
            {props.vidURL ? (
              <video
                className="productIcon"
                loop
                autoPlay
                disableRemotePlayback
                disablePictureInPicture
                playsInline
                preload="none"
              >
                <source src={props.vidURL} />
              </video>
            ) : (
              <img className="productIcon" src={props.imgURL} />
            )}
          </div>
        </>
    );
}