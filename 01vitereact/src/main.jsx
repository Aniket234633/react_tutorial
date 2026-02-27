import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function Myapp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

const reactElement = {
    type: 'a',
    props: {
        href : 'https://react.dev/learn/creating-a-react-app',
        target: '_blank'
    },
    children : 'click me'
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Myapp />
  </StrictMode>,
)
