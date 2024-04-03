import styles from "./App.module.css";
import { Welcome } from "./components/Welcome/Welcome";
import { Contact } from "./components/Contact/Contact";
import Game from "./components/DemoGame/Game";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NavBar } from "./components/NavBar/NavBar";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import{Demo} from "./components/Demo/Demo";


function App() {
  return (
    <div className={styles.App} >

      <NavBar />
      <SpeedInsights />
      <Welcome />
      <Skills />
      <Projects />
      {/* <Demo /> */}
      <Contact />
    </div>
  );
}
export default App;