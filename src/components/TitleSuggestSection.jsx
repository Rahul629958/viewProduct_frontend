import React from 'react';
import SuggestTitle from './SuggestTitle';

export default function TitleSuggestSection(props)
{
    return (
        <>
         {props.suggTitle.length > 0 && (
            <>
              <div
                style={{
                  marginTop: "1rem",
                  fontSize: "115%",
                  backgroundColor: "white",
                  borderRadius: "1rem",
                  padding: "5px 5px 10px 5px",
                  // borderWidth:"1px",
                  // borderStyle:"solid"
                  boxShadow: "3px 3px 10px grey",
                }}
              >
                <span style={{ marginLeft: "5px" }}>Suggested Titles:</span>
                <span style={{ marginRight: "2rem" }}></span>
                <div>
                  {props.more ? (
                    <span>
                      <SuggestTitle
                        data={props.suggTitle[0].data}
                        rating={props.suggTitle[0].rating}
                        func={props.setTitle}
                        refBtn={props.setRefTitleBtn}
                      />
                      <SuggestTitle
                        data={props.suggTitle[1].data}
                        rating={props.suggTitle[1].rating}
                        func={props.setTitle}
                        refBtn={props.setRefTitleBtn}
                      />
                      <SuggestTitle
                        data={props.suggTitle[2].data}
                        rating={props.suggTitle[2].rating}
                        func={props.setTitle}
                        refBtn={props.setRefTitleBtn}
                      />
                    </span>
                  ) : (
                    <span></span>
                  )}
                  {!props.more ? (
                    <span>
                      {props.suggTitle.map((e) => (
                        <SuggestTitle
                          data={e.data}
                          rating={e.rating}
                          func={props.setTitle}
                          key={e}
                          refBtn={props.setRefTitleBtn}
                        />
                      ))}
                    </span>
                  ) : (
                    <span></span>
                  )}

                  <span onClick={props.handleMore} className="moreBtn">
                    {props.more ? "More..." : "..less"}
                  </span>
                </div>
              </div>
              <hr />
              <br />
              <br />
            </>
          )}
        </>
    );
}