import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import NavBar from "./Navbar";
import axios from "axios";
import Rating from "./Rating";
import SuggestTitle from "./SuggestTitle";
import SuggestTag from "./SuggestTag";
import SuggestHighlights from "./SuggestHighlights";
import SuggestDescription from "./SuggestDescription";

//result function started
function Result(props) {
  // const [response,setResponse]= useState({});
  const [title, setTitle] = useState("Please wait...");
  const [imgURL, setImg] = useState("https://i.gifer.com/ZZ5H.gif");
  const [highlight, setHighlight] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([". . . ."]);
  const [link, setLink] = useState("");
  const [response, setResponse] = useState({});
  const [plan, setPlan] = useState(false); //free=>false

  const [suggTitle, setSuggTitle] = useState([]);
  const [suggH, setSuggHighlights] = useState([]);
  const [suggDescription, setSuggDescription] = useState([]);
  const [suggTag, setSuggTag] = useState([]);

  const [more, setMore] = useState(true);
  const [moreHigh, setMoreHigh] = useState(true);
  const [moreDesc, setMoreDesc] = useState(true);

  const [viewSuggBtn, setViewSuggBtn] = useState(true);

  const freePlan =
    "It's fantastic to see this product offering a free plan, a testament to their dedication towards customer accessibility and satisfaction.";
  const paymentPlan =
    "Currently, there are no free plans available. We strongly recommend incorporating a free plan trial to amplify customer accessibility and satisfaction, along with offering them the opportunity for a valuable free trial experience.";

  const waitQuote = [
    "Waiting is a gentle reminder that life's treasures are worth the wait.",
    "Patience turns waiting into a serene dance of anticipation.",
    "The magic of waiting lies in the whispers of possibility it carries.",
    "In the silence of waiting, we discover the symphony of our own thoughts.",
    "Waiting is a canvas where hope paints its most vibrant colors.",
    "In the tapestry of time, waiting weaves threads of resilience and strength.",
    "Within the embrace of waiting, we learn to appreciate the sweetness of delayed gratification.",
    "Patience is the key that unlocks the door to the treasures that await us in the realm of waiting.",
    "Waiting teaches us that the best things in life are worth the moments of anticipation.",
    "Amidst the longing of waiting, we find the beauty of growth and transformation.",
  ];
  const quoteText = waitQuote[Math.floor(Math.random() * 10)];

  const handleMore = function () {
    more ? setMore(false) : setMore(true);
  };
  const handleMoreHigh = function () {
    moreHigh ? setMoreHigh(false) : setMoreHigh(true);
  };
  const handleMoreDesc = function () {
    moreDesc ? setMoreDesc(false) : setMoreDesc(true);
  };

  const fetchData = async () => {
    const { data } = await axios.get("https://viewproduct-site.onrender.com/");
    setTitle(data.Title);
    setImg(data.ImgURL);
    setHighlight(data.Highlights);
    setDescription(data.Description);
    data.Taglist && setTags(data.Taglist);
    setLink(data.link);
    setResponse(data.Response);
    var planVar = data.Plan;
    console.log(planVar);
    
    if (planVar.toLowerCase().includes("free"))
    {
      setPlan(false);
    } else {
      setPlan(true);
    }
    // console.log(data.Response);

    // setSuggTitle(data.suggTitle);
    // setSuggHighlights(data.SuggHighlights);
    // setSuggDescription(data.SuggDescription);
    // setSuggTag(data.SuggTags);
    // console.log(suggH);
  };
  // console.log(suggH);

  const fetchSuggestion = async () => {
    if (viewSuggBtn) {
      console.log("Fetching has started");
      setViewSuggBtn(false);
      const { data } = await axios.get("https://viewproduct-site.onrender.com/data/");
      setSuggTitle(data.suggTitle);
      setSuggHighlights(data.SuggHighlights);
      setSuggDescription(data.SuggDescription);
      setSuggTag(data.SuggTags);
    }

    // console.log(suggH);
  };

  useEffect(() => {
    setTimeout(fetchData, 2000);
  }, []);

  return (
    <React.StrictMode>
      <NavBar func={props.func} />
      <div
        style={{
          position: "absolute",
          left: "50%",
          width: "fit-content",
          maxWidth: "85%",
        }}
      >
        <div
          className="container-fluid"
          style={{
            width: "100%",
            backgroundColor: "white",
            boxShadow: "-2px 2px 10px black",
            textAlign: "center",
            borderRadius: "1rem",
            borderWidth: "1px",
            position: "relative",
            marginTop: "10rem",
            left: "-50%",
            padding: "2rem",
            zIndex: "5",
          }}
          hidden={!viewSuggBtn && suggTitle.length < 1 ? false : true}
        >
          <div>
            {" "}
            <img
              src="https://media.giphy.com/media/KfYbeDxMELQqeOlLIj/giphy.gif"
              style={{ height: "10rem" }}
            />
          </div>
          <span style={{ fontSize: "110%", fontWeight: "500" }}>
            We kindly request your patience as we generate precise suggestions.
          </span>
          <br />
          <i>(This process may take anywhere from 30 seconds to one minute to complete, please hold on..)</i>
          <br />
          <p style={{ color: "green" }}>"{quoteText}"</p>
        </div>
      </div>
      <div className="resultBox">
        <span className="viewSuggestion" onClick={fetchSuggestion} hidden={highlight.length>1?false:true}>
          {viewSuggBtn ? (
            "View Suggestion"
          ) : suggTitle.length > 0 ? (
            "Suggestions generated!"
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

        <div
          className="container productBox"
          style={
            !viewSuggBtn
              ? suggTitle.length < 1
                ? { filter: "blur(5px)" }
                : {}
              : {}
          }
        >
          <img className="productIcon" src={imgURL} />
          <span
            className="productTitle"
            onClick={(e) => {
              window.open(link, "_blank", "width=800,height=600");
            }}
          >
            {title}{" "}
          </span>
          {highlight.length > 1 && <Rating val={response.Title} />}
          {highlight.length > 1 && (
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
                {plan ? (
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
              <p>{plan ? paymentPlan : freePlan}</p>
            </div>
          )}
          {suggTitle.length > 0 && (
            <>
              <div
                style={{
                  marginTop: "1rem",
                  marginLeft: "1rem",
                  fontSize: "115%",
                  backgroundColor: "white",
                  borderRadius: "1rem",
                  padding: "5px",
                }}
              >
                <span style={{ marginLeft: "5px" }}>Suggested Titles:</span>
                <span style={{ marginRight: "2rem" }}></span>
                <div>
                  {more ? (
                    <span>
                      <SuggestTitle
                        data={suggTitle[0].data}
                        rating={suggTitle[0].rating}
                      />
                      <SuggestTitle
                        data={suggTitle[1].data}
                        rating={suggTitle[1].rating}
                      />
                      <SuggestTitle
                        data={suggTitle[2].data}
                        rating={suggTitle[2].rating}
                      />
                    </span>
                  ) : (
                    <span></span>
                  )}
                  {!more ? (
                    <span>
                      {suggTitle.map((e) => (
                        <SuggestTitle data={e.data} rating={e.rating} key={e} />
                      ))}
                    </span>
                  ) : (
                    <span></span>
                  )}

                  <span onClick={handleMore} className="moreBtn">
                    {more ? "More..." : "..less"}
                  </span>
                </div>
              </div>
              <hr />
              <br />
              <br />
            </>
          )}
          <div>
            <span className="productHighlight">{highlight}</span>
            {highlight.length > 1 && <Rating val={response.Highlights} />}
            <p></p>

            {suggH.length > 0 && (
              <>
                <div className="hSuggDiv">
                  <p
                    style={{
                      marginLeft: "1rem",
                      marginBottom: "1rem",
                      fontSize: "115%",
                    }}
                  >
                    Suggested Highlights:
                  </p>

                  {moreHigh && (
                    <div>
                      <SuggestHighlights data={suggH[0]} />
                      <SuggestHighlights data={suggH[1]} />
                    </div>
                  )}

                  {!moreHigh && (
                    <div>
                      {suggH.map((e) => (
                        <SuggestHighlights data={e} key={e} />
                      ))}{" "}
                    </div>
                  )}

                  <span onClick={handleMoreHigh} className="moreBtnHigh">
                    {moreHigh ? "More..." : "..less"}
                  </span>
                </div>
                <hr />
                <br />
                <br />
              </>
            )}
          </div>
          <p className="productDescription">
            {description}
            {highlight.length > 1 && <Rating val={response.Description} />}
          </p>
          {suggDescription.length > 0 && (
            <div className="dSuggDiv">
              <div
                style={{
                  marginLeft: "1rem",
                  marginBottom: "1rem",
                  fontSize: "115%",
                }}
              >
                Suggested Descriptions:
              </div>

              {moreDesc && (
                <div>
                  <SuggestDescription data={suggDescription[0]} />
                  {/* <SuggestDescription data={suggDescription[1]} /> */}
                </div>
              )}

              {!moreDesc && (
                <div>
                  {suggDescription.map((e) => (
                    <SuggestDescription data={e} key={e} />
                  ))}
                </div>
              )}

              <span onClick={handleMoreDesc} className="moreBtnHigh">
                {moreDesc ? "More..." : "..less"}
              </span>
            </div>
          )}
          <br />
          <span className="productTag">Tags : </span>
          {tags.map((e) => (
            <span className="productTagItem" key={e}>
              {e}
            </span>
          ))}{" "}
          {suggTag.length > 0 && (
            <span className="tagSuggestWhole">
              Suggestions:
              {suggTag.map((e) => (
                <SuggestTag data={e} key={e} />
              ))}
            </span>
          )}
          <br />
          <br />
          <br />
          <a href={link} target="_blank" className="knowMoreLink">
            Know more about this product...
          </a>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Result;
