import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
//import { SimpleForms } from './SimpleForms'
//import { HooksApp } from './HooksApp'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHook /> 
  </React.StrictMode>,
)
