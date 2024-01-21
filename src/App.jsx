import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import Game from "./components/DemoGame/Game";
import { SpeedInsights } from '@vercel/speed-insights/next';


function App() {
  const gameLocal = <Game />;
  return (
    <div className={styles.App}>
      <SpeedInsights />
      {/* <Navbar /> */}
      <Hero />
      {gameLocal}
      {/* <About /> */}
      <Experience />
      <Contact />
    </div>
  );
}
export default App;