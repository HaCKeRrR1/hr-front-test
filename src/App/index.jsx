import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Profile from "../components/Profile";
import Home from '../pages/Home'
import Message from '../pages/Message'
import './style.css'


// function App() {
//   return (
//     <div className="dashboard">
//       <Sidebar />
//       <div className="dashboard--content">
//         <Content />
//         <Profile />
//       </div>
//     </div>
//   );
// }

function App (){
  return (
    <BrowserRouter>
      {/* <div className="dashboard"> */}
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/message" element={<Message />} />
        {/* <Route path="/dashboard" element={<Home />} /> */}

      </Routes>

      {/* </div> */}
    </BrowserRouter>
  )
}

export default App;
