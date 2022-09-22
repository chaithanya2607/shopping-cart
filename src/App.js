import { useState } from "react";
import React from "react";
import './App.css';
import Navbar from "./Navbar";
import Header from "./Header";
import Info from "./Info";
import Footer from "./Footer";
export default function App(){
    const [state,setState]=useState(0);
    
    
  return(
   <div className="App">
    <Navbar state={state} setState={setState} />
    <Header />
    <Info state={state} setState={setState} />
    <Footer />
   </div>
  );
};