import React, { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { getImageUrl } from "../../utils";

const gamedir = "game/Build";

export const Demo = () => {
  const { unityProvider, isLoaded, loadingProgression, unload, requestFullscreen } = useUnityContext({
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

  async function handleClickBack() {
    await unload();
    setShowDemo(true);
  }

  async function handleClickEnterFullscreen() {
    requestFullscreen(true);
    }

    return (
        <section id="demo" className="text-slate-200">
            <h1 className="text-center  text-4xl font-extrabold p-6">
                DEMO
            </h1>
            <div className="flex flex-row justify-center items-center p-4">

                <div className="flex flex-col-reverse lg:flex-row place-items-center
                p-6 bg-teal-700 rounded-3xl lg:max-w-5xl">
                    <h1> Showcase </h1>
                    <div className="flex p-4 bg-teal-600 rounded-3xl">
                        not yet finished showcase in unity. I've created something more like "experience", less
                        game.
                    </div>
                </div>

            </div>
        </section>
    );
};
