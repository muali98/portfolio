import React from 'react'
import './App.css';


import { Header } from "./components/Header/Header"
import { Home } from './components/Home/Home'; 
import { Intro } from "./components/Intro/Intro"
import { Education } from "./components/Education/Education"
import { Experience } from "./components/Experience/Experience"
import { Projects } from "./components/Projects/Projects"
import { Research } from "./components/Research/Research"
import { Visits } from "./components/Visits/Visits"
import { Awards } from "./components/Awards/Awards"
import { Skills } from "./components/Skills/Skills"
import { Leadership } from "./components/Leadership/Leadership"
import { Courses } from "./components/Courses/Courses"
import { Language } from "./components/Language/Language"
import { Gallery } from "./components/Gallery/Gallery"
import { Contact } from "./components/Contact/Contact"



function App() {
  return (
    <div className="bg-body">
      <div className="text-white mx-auto">
        <Header />
        <section id="home"><Home /></section>
        <section id="introduction"><Intro /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="research"><Research /></section>
        <section id="visits"><Visits /></section>
        <section id="awards"><Awards /></section>
        <section id="skills"><Skills /></section>
        <section id="leadership"><Leadership /></section>
        <section id="courses"><Courses /></section>
        <section id="language"><Language /></section>
        <section id="gallery"><Gallery /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}

export default App;
