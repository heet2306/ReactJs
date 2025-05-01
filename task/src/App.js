// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import img from './Images/img.webp'
import { add } from './math'
import UseState from './components/UseState';
import UseEffectTask from './components/UseEffectTask';
import Event from './components/Event';
import Conditional from './components/Conditional';
import ControlledForm from './components/ControlledForm';
import UnctrolledForm from './components/UnctrolledForm';
import MyComponent from './components/MyComponent';
import withLoading from './components/withLoading';
import LocalStorage from './components/LocalStorage';
import Crud from './components/Crud';

const MyComponentWithLoading = withLoading(MyComponent)
const App = () => {
  return (
    // <Router>
    //   <div>
    //     {/* Navigation Links */}
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* Routes */}
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //     </Routes>
    //   </div>
    //   <img src={img} />

    //   <h1>Sum :{add(5, 3)} </h1>
    //   <UseState />
    //   <UseEffectTask />
    //   <Event />
    //   <Conditional />
    //   <ControlledForm />
    //   <UnctrolledForm />

    // </Router>
    <>
      <MyComponentWithLoading />
      <LocalStorage />
      <Crud />
    </>
  );
};

export default App;
