// import { Children } from "react";

function customRender(reactElement,Container) {
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    Container.appendChild(domElement)
    */

   const domElement =  document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for (const prop in  reactElement.props) {
        if(prop==='Children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    Container.appendChild(domElement)

    
}
// import { Children } from "react";

const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target: '_blank'
    },
    Children : "Click me to visit Google"

}

const mainContainer = document.querySelector('#root');

customRender(reactElement , mainContainer);

