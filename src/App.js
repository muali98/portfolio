import React from 'react'
import './App.css';
import { Header } from "./MyComponents/Header"
import { Main } from "./MyComponents/Main"
import { Footer } from "./MyComponents/Footer"

function App() {
  return (
    <div className="bg-body">
      <div className="text-white max-w-[1380px] mx-auto">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;