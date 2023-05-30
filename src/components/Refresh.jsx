import React from "react"

export default function Refresh(props)
{
    function runFunc()
    {
      props.func(props.val);
      props.refBtn(false);
    }
      return (
        <>
        <span ><img src="../blueRefresh.png" className="RefreshBtn"  onClick={runFunc} /> </span>
        
        </>
      );
}