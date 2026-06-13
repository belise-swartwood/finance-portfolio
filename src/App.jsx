import AnimatedBackground from './components/AnimatedBackground';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <AnimatedBackground />
    <ScrollProgress />
    <Navbar />

    <main>
      <Hero />
      <Ticker />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Philosophy />
      <Education />
      <Interests />
      <Contact />
    </main>

    <Footer />
    <BackToTop />
  </div>
);

export default App;
