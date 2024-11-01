import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginCredtionals from './Components/Login';


function Garage(params) {
  return(
     <h2>Better one thing is true</h2>
  )
  
}
function Car(props) {
  const hello = props.login
return(<>
  <Garage/>
  <h2>I will be a {hello} one day </h2>

</>
)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginCredtionals/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default Car
