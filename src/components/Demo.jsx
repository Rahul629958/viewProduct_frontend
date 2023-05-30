import React from 'react';
import DemonstratedMedia from './DemonstratedMedia';

export default function Demo(props)
{
    return (
        <>
         <div
            style={{
              width: "100%",
              overflowX: "scroll",
              display: "flex",
              justifyContent: "",
              paddingLeft: "10px",
            }}
          >
            {props.demoURL.map((e) => (
              <img
                src={e}
                key={e}
                style={{
                  height: "15rem",
                  margin: "0.5rem 0.5rem 0.5rem 0.5rem",
                  boxShadow: "-2px 2px 15px grey",
                }}
              />
            ))}
          </div>
          <br />
          {props.demoURL.length > 0 && (
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "1rem",
                padding: "1.5rem",
                paddingBottom: "0.5rem",
                margin: "2rem auto 1rem auto",
                boxShadow: "3px 3px 15px grey",
              }}
            >
              <DemonstratedMedia text="videos" count={props.countVid} />
              <DemonstratedMedia
                text="images"
                count={props.demoURL.length - props.countVid}
              />

              <p style={{ paddingTop: "0.5rem" }}>
                {props.demoURL.length - props.countVid > 3 && props.countVid > 1
                  ? props.okDemo
                  : props.demoURL.length - props.countVid < 4
                  ? props.lessImg
                  : props.countVid < 2
                  ? props.moreImglessVid
                  : props.okDemo}
              </p>
            </div>
          )}
          <br />
        </>
    );
}