import React from 'react';

function SuggestDescription(props)
{
  return (<>
  <p className='suggestDescription' onClick={(e)=>{props.func(props.data);props.refBtn(true);}}>{props.data}</p>
  </>);
}
export default SuggestDescription;