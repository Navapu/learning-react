import React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))
const TestButton = ({text}) =>  {
  return(
    <button>{text}</button>
  )
}
root.render(
  <React.Fragment>
   <TestButton text = "Boton 1"/>
   <TestButton text = "Boton 2"/>
  </React.Fragment>
)

