import './App.css'
import Navbar from './components/NavBar';
import Hero from "./components/Hero"
import About, { Skills, Projects, Contact, Footer } from "./components/Sections";

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
