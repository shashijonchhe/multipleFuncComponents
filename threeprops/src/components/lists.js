import React from 'react'



const Lists=(props)=>{
    return(
    <ol>
        {props.items.map(el=><li>{el}</li>)}
    </ol>
    )
}


export default Lists;