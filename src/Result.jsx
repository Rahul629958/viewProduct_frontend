import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import DescribeList from "./components/DescribeList";
import PaymentPlan from "./components/PaymentPlan";
import ProductIcon from "./components/ProductIcon";
import Title from "./components/Title";
import TitleSuggestSection from "./components/TitleSuggestSection";
import Tags from "./components/Tags";
import Demo from "./components/Demo";
import {
  freePlan,
  paymentPlan,
  lessImg,
  moreImglessVid,
  okDemo,
} from "./components/GetTextData";
import WaitBox from "./components/WaitBox";
import ViewSuggestionButton from "./components/ViewSuggestionButton";

//result function started
function Result(props) {
  const [scrapedData, setScrapedData] = useState({});
  const [title, setTitle] = useState("Please wait...");
  const [imgURL, setImg] = useState("https://i.gifer.com/ZZ5H.gif");
  const [highlight, setHighlight] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([". . . ."]);
  const [link, setLink] = useState(props.link);
  const [response, setResponse] = useState({});
  const [plan, setPlan] = useState(false); //free=>false
  const [vidURL, setVid] = useState("");
  const [demoURL, setDemoURL] = useState([]);
  const [countVid, setCountVid] = useState(0);

  //suggestion variables
  const [suggTitle, setSuggTitle] = useState([]);
  const [suggH, setSuggHighlights] = useState([]);
  const [suggDescription, setSuggDescription] = useState([]);
  const [suggTag, setSuggTag] = useState([]);

  //condition check for visibility of "more" buttons
  const [more, setMore] = useState(true);
  const [moreHigh, setMoreHigh] = useState(true);
  const [moreDesc, setMoreDesc] = useState(true);

  //view suggestion button
  const [viewSuggBtn, setViewSuggBtn] = useState(true);

  //variables for refresh button
  const [originalTitle, setOriginal] = useState("please wait...");
  const [originalHighlight, setHighlightRefresh] = useState("");
  const [originalDescription, setDescriptionRefresh] = useState("");
  const [originalTag, setTagRefresh] = useState([]);

  const [refreshBtn_title, setRefTitleBtn] = useState(false);
  const [refreshBtn_highlight, setRefHighlightBtn] = useState(false);
  const [refreshBtn_description, setRefDescriptionBtn] = useState(false);
  const [refreshBtn_tag, setRefTagBtn] = useState(false);

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
    const linkURL = { link: link };
    fetch("https://viewproduct-site.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(linkURL),
    })
      .then((response) => response.json())

    
      .then((data) => {
        setScrapedData(data);
        setTitle(data.Title);
        setImg(data.ImgURL);
        setHighlight(data.Highlights);
        setDescription(data.Description);
        data.Taglist && setTags(data.Taglist);
        setLink(data.link);
        setResponse(data.Response);
        setVid(data.VideoURL);
        setDemoURL(data.DemoList);
        setCountVid(data.CountVid);

        var planVar = data.Plan;

        setOriginal(data.Title);
        setHighlightRefresh(data.Highlights);
        setDescriptionRefresh(data.Description);
        setTagRefresh(data.Taglist);

        if (planVar.toLowerCase().includes("free")) {
          setPlan(false);
        } else {
          setPlan(true);
        }
      });
  };

  const fetchSuggestion = async () => {
    if (viewSuggBtn) {
      console.log("Fetching has started");
      setSuggTitle([]);
      setSuggTag([]);
      setViewSuggBtn(false);
      fetch("https://viewproduct-site.onrender.com/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(scrapedData),
      })
        .then((response) => response.json())

        .then((data) => {
          setSuggTitle(data.suggTitle);
          setSuggHighlights(data.SuggHighlights);
          setSuggDescription(data.SuggDescription);
          setSuggTag(data.SuggTags);
          setViewSuggBtn(true);
        });
    }
  };

  useEffect(() => {
    setTimeout(fetchData, 0);
  }, []);

  return (
    <React.StrictMode>
      <NavBar func={props.func} />

      <WaitBox length={suggTitle.length} viewSuggestBtn={viewSuggBtn} />

      <div className="resultBox">
        <ViewSuggestionButton
          fetchSuggestion={fetchSuggestion}
          highlight={highlight}
          suggTitle={suggTitle}
          viewSuggBtn={viewSuggBtn}
        />

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
          <ProductIcon vidURL={vidURL} imgURL={imgURL} />
          {/* Product Title starts here */}

          <Title
            link={link}
            title={title}
            highlightLength={highlight.length}
            refreshTitle={refreshBtn_title}
            ratingVal={response.Title}
            originalTitle={originalTitle}
            setTitle={setTitle}
            setRefTitleBtn={setRefTitleBtn}
          />
          {/* Payment (paid or free) section */}

          <PaymentPlan
            highlightLength={highlight.length}
            plan={plan}
            statementPayment={paymentPlan}
            statementFree={freePlan}
          />
          {/* Suggestion for title */}

          <TitleSuggestSection
            suggTitle={suggTitle}
            more={more}
            setTitle={setTitle}
            setRefTitleBtn={setRefTitleBtn}
            handleMore={handleMore}
          />
          {/* Product highlight */}

          <DescribeList
            isDescription={false}
            title={highlight}
            checkArrSize={highlight.length}
            refreshBtn={refreshBtn_highlight}
            rating={response.Highlights}
            refreshVal={originalHighlight}
            refreshFunc={setHighlight}
            refreshRefBtn={setRefHighlightBtn}
            suggArr={suggH}
            moreBtn={moreHigh}
            handleMore={handleMoreHigh}
          />
          {/* product description */}
          <br/>
          <br/>
          <DescribeList
            isDescription={true}
            title={description}
            checkArrSize={highlight.length}
            refreshBtn={refreshBtn_description}
            rating={response.Description}
            refreshVal={originalDescription}
            refreshFunc={setDescription}
            refreshRefBtn={setRefDescriptionBtn}
            suggArr={suggDescription}
            moreBtn={moreDesc}
            handleMore={handleMoreDesc}
          />
          <br />
          <br/>
          {/* product tags */}

          <Tags
            tags={tags}
            refreshBtn_tag={refreshBtn_tag}
            originalTag={originalTag}
            setTags={setTags}
            setRefTagBtn={setRefTagBtn}
            suggTag={suggTag}
          />
          {/* Demo images / videos */}
          <br/>
          <Demo
            demoURL={demoURL}
            countVid={countVid}
            okDemo={okDemo}
            lessImg={lessImg}
            moreImglessVid={moreImglessVid}
          />
          <a href={link} target="_blank" className="knowMoreLink">
            Know more about this product...
          </a>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Result;
