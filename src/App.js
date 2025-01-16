import React from 'react';
import './App.css';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Intro } from './components/Intro/Intro';
import { Education } from './components/Education/Education';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Research } from './components/Research/Research';
import { Visits } from './components/Visits/Visits';
import { Awards } from './components/Awards/Awards';
import { Skills } from './components/Skills/Skills';
import { Leadership } from './components/Leadership/Leadership';
import { Courses } from './components/Courses/Courses';
import { Language } from './components/Language/Language';
import { Gallery } from './components/Gallery/Gallery';
import { Contact } from './components/Contact/Contact';

//import { Educationjunk } from './components/Education_junk/Education_junk';

const sectionsData = {
  home: <Home />,
  introduction: <Intro />,
  education: <Education />,

  //educationjunk:<Educationjunk/>,

  experience: <Experience />,
  projects: <Projects />,
  research: <Research />,
  visits: <Visits />,
  awards: <Awards />,
  skills: <Skills />,
  leadership: <Leadership />,
  courses: <Courses />,
  language: <Language />,
  gallery: <Gallery />,
  contact: <Contact />,
};

// Define the sections with their display names
const sections = [
  { id: 'home', displayName: 'Home' },
  { id: 'introduction', displayName: 'Introduction' },
  { id: 'education', displayName: 'Education' },

  { id: 'educationjunk', displayName: 'Educationjunk' },

  { id: 'experience', displayName: 'Work Experience' },
  //{ id: 'projects', displayName: 'My Projects' },
  { id: 'research', displayName: 'Research/Projects' },
  { id: 'visits', displayName: 'Visits' },
  { id: 'awards', displayName: 'Awards & Honors' },
  //{ id: 'skills', displayName: 'Skills' },
  { id: 'leadership', displayName: 'Leadership' },
  { id: 'courses', displayName: 'Courses' },
  { id: 'language', displayName: 'Languages' },
  //{ id: 'gallery', displayName: 'Gallery' },
  { id: 'contact', displayName: 'Contact' },
];

function App() {
  return (
    <div className="bg-nav">
      <div className="text-white mx-auto">
        {/* Pass the sections array with IDs and display names to the Header */}
        <Header sections={sections} />
        
        {/* Dynamically render the sections */}
        {sections.map(({ id }) => (
          <section id={id} key={id}>
            {sectionsData[id]}
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;
