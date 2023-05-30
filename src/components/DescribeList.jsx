import React from "react";
import SuggestDescription from "./SuggestDescription";
import SuggestHighlights from "./SuggestHighlights";
import Rating from "./Rating";
import Refresh from "./Refresh";

function DescribeList(props) {
  var name;
  var className;
  var suggClassName;
  if (props.isDescription) {
    name = "Descriptions";
    className = "productDescription";
    suggClassName = "dSuggDiv";
  } else {
    name = "Highlights";
    className = "productHighlight";
    suggClassName = "hSuggDiv";
  }
  return (
    <>
      <p className={className}>
        {props.title}
        {props.checkArrSize > 1 && !props.refreshBtn && (
          <Rating val={props.rating} />
        )}
        {props.refreshBtn ? (
          <Refresh
            val={props.refreshVal}
            func={props.refreshFunc}
            refBtn={props.refreshRefBtn}
          />
        ) : (
          <></>
        )}
      </p>
      {/* product description suggestion */}
      {props.suggArr.length > 0 && (
        <div className={suggClassName}>
          <div
            style={{
              marginLeft: "1rem",
              marginBottom: "1rem",
              fontSize: "115%",
            }}
          >
            Suggested {name}:
          </div>

          {props.moreBtn && (
            <div>
              {props.isDescription ? (
                <SuggestDescription
                  data={props.suggArr[0]}
                  func={props.refreshFunc}
                  refBtn={props.refreshRefBtn}
                />
              ) : (
                <>
                  <SuggestHighlights
                    data={props.suggArr[0]}
                    func={props.refreshFunc}
                    refBtn={props.refreshRefBtn}
                  />
                  <SuggestHighlights
                    data={props.suggArr[1]}
                    func={props.refreshFunc}
                    refBtn={props.refreshRefBtn}
                  />
                </>
              )}
            </div>
          )}

          {props.isDescription ? (
            <div>
              {!props.moreBtn && (
                <div style={{ overflowY: "scroll", height: "200px" }}>
                  {props.suggArr.map((e) => (
                    <SuggestDescription
                      data={e}
                      key={e}
                      func={props.refreshFunc}
                      refBtn={props.refreshRefBtn}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div>
              {!props.moreBtn && (
                <div style={{ overflowY: "scroll", height: "200px" }}>
                  {props.suggArr.map((e) => (
                    <SuggestHighlights
                      data={e}
                      key={e}
                      func={props.refreshFunc}
                      refBtn={props.refreshRefBtn}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          <span onClick={props.handleMore} className="moreBtnHigh">
            {props.moreBtn ? "More..." : "..less"}
          </span>
        </div>
      )}
    </>
  );
}

export default DescribeList;
