import React from 'react'
import './App.css';
import { Header } from "./MyComponents/Header"
import { Main } from "./MyComponents/Main"
import { Footer } from "./MyComponents/Footer"

function App() {
  return (
    <div className="bg-body text-white">
      <Header />
      {/* <div className="max-w-[1150px] mx-auto"> */}
        <Main />
        <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;