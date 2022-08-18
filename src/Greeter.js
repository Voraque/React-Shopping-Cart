import React, { Component } from 'react'

function Greeter({name ='Natalie', age, excitement=1}){
    return (
    <div>
        <h1>Hi there, your name is {name} and you are {age} years old{"!".repeat(excitement)}</h1>
        <button onClick={()=> alert('Hello')}>Click me</button>
    </div>
    )
}

export default Greeter;