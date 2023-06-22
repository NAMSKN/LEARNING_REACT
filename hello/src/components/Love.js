import React from 'react'

// const Love = props => 
// {
//     console.log(props)
//     return <h1>I Love {props.name}. He is my {props.relation}</h1>
// }

const Love = ({name, relation}) => 
{
    return <h1>I Love {name}. He is my {relation}</h1>
}

export default Love