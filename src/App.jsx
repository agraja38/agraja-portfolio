import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Qualifications from './components/Qualifications'
import Volunteering from './components/Volunteering'
import Contact from './components/Contact'
import Footer from './components/Footer'
import InteractiveBackground from './components/InteractiveBackground'

function App() {
  return (
    <div className="relative min-h-screen">
      <InteractiveBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Qualifications />
          <Volunteering />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
