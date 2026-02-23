const mainContainer = document.querySelector("#root");

const reactElement = {
    type: 'a',
    props: {
        href : 'https://react.dev/learn/creating-a-react-app',
        target: '_blank'
    },
    children : 'click me'
}

customRendor(reactElement, mainContainer);

function customRendor(reactElement, mainContainer){
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)
    
//     mainContainer.appendChild(domElement);

const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop == 'children') continue; //  this is used for if suppose props have any childern which has keys this should be used in loop 
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement); 
    
}





