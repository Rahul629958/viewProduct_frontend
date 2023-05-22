import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SiteIcon from "./SiteIcon"
import axios from "axios";


function Home(props) {
  const [link,setLink] = useState("");
  var handleSubmit= (e)=>
  {
    e.preventDefault();
    
  if(link.startsWith("https://www.producthunt.com/posts/")){  const data = {link : link};
fetch('https://viewproduct-site.onrender.com/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
// https://viewproduct-backend.onrender.com/

props.func(false);} else {setLink(""); alert("Enter correct product link.")}
  }


  return (
    <React.StrictMode>
    <SiteIcon/>
      <div className="container homebox">
        <h1 className="heading">SEARCH FOR THE PRODUCTS</h1>
        <form method="post" action="" onSubmit={handleSubmit} >
       <input className="form-control inputText" type="text" placeholder="Paste your producthunt link here." onChange={e=>(setLink(e.target.value))} value={link} />
        <br />
        <p >The producthunt link of products should be in given format:<br/> <span style={{color:"blue"}}>https://www.producthunt.com/posts/<span style={{color:"purple"}}>product_name</span></span></p>
        <br />
        <button className="btn btn-info" type="submit" onClick={handleSubmit}> view Details</button>
        </form>

      </div>
    </React.StrictMode>
  );
}
export default Home;
