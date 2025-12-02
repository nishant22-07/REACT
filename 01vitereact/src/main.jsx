import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
    return (
        <div>
            <h1>Custom react! </h1>
        </div>
    )
}

// const ReactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target: '_blank'
//     },
//     Children : "Click me to visit Google"

// }

const anotherUser = " Chai "

const reactElement  = React.createElement(
    'a',
    {href: 'https://google.com' ,target:'_blank'},
    'Click me to visit google',
    anotherUser
)


const anotherElement = (
    <a href="https.//google.com" target='_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')).
render(
    
    reactElement
    
  
)
