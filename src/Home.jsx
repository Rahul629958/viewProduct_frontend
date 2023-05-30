import React, {useState } from "react";
import SiteIcon from "./components/SiteIcon";

function Home(props) {
  const [link, setLink] = useState("");

  var handleSubmit = (e) => {
    e.preventDefault();

    if (link.startsWith("https://www.producthunt.com/posts/")) {
      props.setLink(link);

      props.func(false);
    } else {
      setLink("");
      alert("Enter correct product link.");
    }
  };

  return (
    <React.StrictMode>
      <div
        style={{
          padding: "2rem",
          backgroundImage: "url(./backgroundGIF.gif)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <SiteIcon />
        <div className="container homebox">
          <h1 className="heading">SEARCH FOR THE PRODUCTS</h1>
          <form method="post" action="" onSubmit={handleSubmit}>
            <input
              className="form-control inputText"
              type="text"
              placeholder="Paste your product link here."
              onChange={(e) => setLink(e.target.value)}
              value={link}
            />
            <br />
            <p>
              The producthunt link of products should be in given format:
              <br />{" "}
              <span style={{ color: "blue" }}>
                https://www.producthunt.com/posts/
                <span style={{ color: "purple" }}>product_name</span>
              </span>
            </p>
            <br />
            <button
              className="btn btn-info"
              type="submit"
              onClick={handleSubmit}
            >
              {" "}
              view Details
            </button>
          </form>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Home;
