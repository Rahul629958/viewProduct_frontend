import React from "react";

export default function PaymentPlan(props)
{
    return (
        <>
         {props.highlightLength > 1 && (
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "1rem",
                padding: "10px",
                paddingBottom: "5px",
                margin: "1rem auto 1rem auto",
              }}
            >
              <span style={{ fontSize: "115%" }}>
                Plan:{" "}
                {props.plan ? (
                  <span
                    style={{
                      color: "red",
                      fontWeight: "500",
                      fontSize: "110%",
                    }}
                  >
                    Payment Required!
                  </span>
                ) : (
                  <span
                    style={{
                      color: "green",
                      fontWeight: "500",
                      fontSize: "110%",
                    }}
                  >
                    Free!
                  </span>
                )}
              </span>
              <p>{props.plan ? props.statementPayment : props.statementFree}</p>
            </div>
          )}
        </>
    );
}