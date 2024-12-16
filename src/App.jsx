import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import { BubbleChat } from 'flowise-embed-react';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <BubbleChat
        chatflowid="45eea791-ea87-4706-bd32-20f3e1570e0c"
        apiHost="https://christanjay123-christ.hf.space"
      />
    </>
  );
}

export default App;
