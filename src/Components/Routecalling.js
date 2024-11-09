import { BrowserRouter , Routes, Route, Link } from 'react-router-dom' 
import About from "./Routes/about";
import Home from "./Routes/home";
import DashBoard from './Routes/DashBoard';
import Navigate from './Navigating';

 function RouteCalling(params) {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/dashboard">DashBoard</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about/1">About1</Link>
          </li>
          <li>
            <Link to="/about/2">About2</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/login" element={<Navigate/>} />

          <Route path="/about">
            <Route path="" element={<About />} />
            <Route path=":id" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default RouteCalling;
