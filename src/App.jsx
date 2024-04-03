import styles from "./App.module.css";
import { Welcome } from "./components/Welcome/Welcome";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
// import { Hero } from "./components/Hero/Hero";
import Game from "./components/DemoGame/Game";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NavBar } from "./components/NavBar/NavBar";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";


function App() {
  const gameLocal = <Game />;
  return (
    <div className={styles.App} >

      <NavBar />
      <SpeedInsights />
      <Welcome />
      <Skills />
      <Projects />
      {/* <Hero /> */}
      {/* {gameLocal} */}
      {/* <Experience /> */}
      <Contact />
    </div>
  );
}
export default App;