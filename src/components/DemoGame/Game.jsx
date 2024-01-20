import React, { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./Game.module.css";
import { getImageUrl } from "../../utils";

const gamedir = "game/Build";

const Game = () => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: `${gamedir}/game.loader.js`,
    dataUrl: `${gamedir}/game.data`,
    frameworkUrl: `${gamedir}/game.framework.js`,
    codeUrl: `${gamedir}/game.wasm`,
  });
  const [showDemo, setShowDemo] = useState(true);

  const loadingPercentage = Math.round(loadingProgression * 100);

  const handleRunDemoClick = () => {
    setShowDemo(false);
  };

  return (
    <section className={styles.container} id="demo">
      {showDemo ? (
        <div className={styles.content}>
          <img
            src="game/images/DemoIcon.png"
            alt="DemoLogo"
            className={styles.aboutImage}
          />
          <ul className={styles.unityContent}>
            <li className={styles.aboutItem}>
              <div className={styles.title}>
                Demo
              </div>
            </li>
            
            <li className={styles.aboutItem}>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, 
                 consectetur adipiscing elit. Proin non tincidunt quam. Duis nec 
                 lacinia lectus, in porttitor erat. Vivamus aliquam metus sit amet
                 orci elementum, in blandit urna vehicula. Donec ultrices auctor 
                 mauris, vel vehicula felis feugiat vel. Donec.
              </div>
            </li>

            <li className={ styles.imageList }>
              <img src="/game/images/scr1.png" alt="demo screenshot 1" className={styles.imageListItem}/>
              <img src="/game/images/scr1.png" alt="demo screenshot 2" className={styles.imageListItem}/>
              <img src="/game/images/scr1.png" alt="demo screenshot 3" className={styles.imageListItem}/>
            </li>

            <li className={ styles.button } >
              <div >             
               <button className={styles.buttonText} onClick={handleRunDemoClick}>Run Demo</button>
              </div>
            </li>

          </ul>
        </div>
      ) : (
        <Unity className={styles.unityContent} unityProvider={unityProvider} />
      )}
    </section>
  );
};

export default Game;
