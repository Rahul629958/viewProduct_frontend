import React from 'react';

function SuggestHighlights(props)
{
  return (<>
  <p><span  className='suggestHighlights' onClick={(e)=>{props.func(props.data);props.refBtn(true);}}>{props.data}</span> </p>
  </>);
}
export default SuggestHighlights;