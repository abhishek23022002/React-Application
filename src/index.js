import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginCredtionals from './Components/Login';
import ForCSS from './Components/NewCss';
import Hellow from './Components/Buttons';




function Garage(params) {
  return(
     <h2>Better one thing is true</h2>
  )
  
}
function Car(props) {
  const hello = props.login
  console.log("Incoming",hello)
return(<>
  <Garage/>
  <h2>I will be a {hello} one day </h2>

</>
)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hellow/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default Car
