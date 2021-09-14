import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'


/*
 -Install the React Router package 
 -Import the BrowserRouter component into index.js and wrapped <App /> with it.
*/

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
    )