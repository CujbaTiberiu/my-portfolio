import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Demos from './components/Demos';
import Form from './components/Form';
import Certificate from './components/Certificate';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Demos />
      <Certificate />
      <Form />
    </>
  );
}

export default App;
