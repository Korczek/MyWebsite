import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./Game.module.css";

const gamedir = "game/Build";

export const Game = () => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: `${gamedir}/game.loader.js`,
    dataUrl: `${gamedir}/game.data`,
    frameworkUrl: `${gamedir}/game.framework.js`,
    codeUrl: `${gamedir}/game.wasm`,
  });


  /* trzeba tu zrobic jakis guzik ktory bedzie uruchamial gre jak tkos chce, 
  jak, ktos nie chce to tego po prostu nie robic. mozna by jeszcze dac jakis guzik 
  ktory wlacza tryb pelnoekranowy. */
  const loadingPercentage = Math.round(loadingProgression * 100);
  return (
    <section className={styles.container} id="demo">
      <h2 className={styles.title}>Demo</h2>
      <div  >
        {isLoaded === false && (
          <div >
            <p>Loading... ({loadingPercentage}%)</p>
          </div>
        )}
        <Unity className={styles.content} unityProvider={unityProvider} />
      </div>
    </section>
  );
}