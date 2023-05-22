import React from "react";

function Rating(props)
{
    var value= props.val;
    var num=parseInt(value);
    var color= num<=6?"red":num<=7?"orange":num<=8?"yellow":num<=9?"chartreuse":"green";
    return (
       <span className="Rating">
    
       Rating: {
       num<=6?
       <span style={{fontSize:"2rem",color:"#FF0000"}}>{props.val}</span>:
       num<=7?
       <span style={{fontSize:"2rem",color:"#A52A2A"}}>{props.val}</span>:
       num<=8?
       <span style={{fontSize:"2rem",color:"#FFA500"}}>{props.val}</span>:
       num<=9?
       <span style={{fontSize:"2rem",color:"#00FF00"}}>{props.val}</span>:
       <span style={{fontSize:"2rem",color:"#00FF00"}}>{props.val}</span>
       }/10
       </span>
    );
}
export default Rating;