import React from 'react';

function SuggestTag(props)
{
  function handleClick()
  {
    var arrayVal= props.arrayVal;
    arrayVal = [...arrayVal,props.data];
    props.func(arrayVal);
    props.refBtn(true);
  }
  return (<>
  <span className='suggestTag' onClick={handleClick}>{props.data}</span>
  </>);
}
export default SuggestTag;