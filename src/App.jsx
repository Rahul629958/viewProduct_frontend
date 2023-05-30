import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Result from "./Result";
import Home from "./Home";


 function App()
{
    const [home,setHome]=useState(true);
    const [link,setLink] = useState("");

    function setValues(value)
    {
        setHome(value);
        // window.location.reload();
    }
    return (
        <React.StrictMode>

            {home?<Home func={setValues} setLink={setLink}/>:<Result func={setValues} link={link}/>}
          
        </React.StrictMode>
    );
}

export default App;

//openAI API
// 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