import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Game } from "./components/DemoGame/Game";
import { SpeedInsights } from '@vercel/speed-insights/next';

function App() {
  return (
    <div className={styles.App}>
      <Game />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <SpeedInsights />
    </div>
  );
}

export default App;