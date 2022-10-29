import React from 'react'
import './App.css';
import { Header } from "./MyComponents/Header"
import { Main } from "./MyComponents/Main"
import { Footer } from "./MyComponents/Footer"

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;