import React from 'react'
import './App.css';
import { Header } from "./MyComponents/Header"
import { Main } from "./MyComponents/Main"
import { Footer } from "./MyComponents/Footer"

function App() {
  return (
    <div className="bg-[#0E0E0E] text-white">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;