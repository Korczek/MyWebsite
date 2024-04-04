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

      <h1 className="text-center text-4xl font-extrabold p-6">
        DEMO
      </h1>

      <div className="flex flex-col justify-center items-center p-4">

        <div className="p-6 bg-teal-700 rounded-3xl lg:max-w-5xl">

          {/* <h1 className="text-center pb-4 text-3xl">
            Showcase
          </h1> */}



          {showDemo ? (

            <div>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className=" w-full lg:w-1/2 p-6 bg-teal-500 rounded-3xl">
                  <img src={getImageUrl("myGames/Scr.png")} alt="" />
                </div>

                <div className="flex w-full lg:w-1/2 p-4 bg-teal-500 text-slate-100 rounded-3xl">
                  not yet finished showcase in unity. I've created something more like "experience", less
                  game.
                </div>

              </div>

              <div className="flex flex-row justify-center pt-6">

                <div className="">
                  <a className=" bg-teal-500 hover:bg-teal-300 p-4 rounded-full " onClick={handleRunDemoClick}>
                    Start Showcase
                  </a>
                </div>
              </div>
            </div>

          ) : (

            <div className="flex flex-col max-w-screen-xl mx-auto rounded-3xl justify-center content-center">





              {isLoaded ? (null) :
                (
                  <div>
                    <button type="button" className="flex flex-row bg-teal-400 rounded-full p-4" disabled>
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M 4 12 a 8 8 0 0 1 8 -8 V 0 C 5.373 0 0 5.373 0 12 h 4 Z m 2 5.291 A 7.962 7.962 0 0 1 4 12 H 0 c 0 3.042 1.135 5.824 3 7.938 l 3 -2.647 Z"></path>
                      </svg>
                      {loadingPercentage}% loaded
                    </button>
                  </div>
                )
              }

<div className="flex flex-1">
              <Unity
                className="w-full h-full rounded-3xl "
                style={{ visibility: isLoaded ? "visible" : "hidden" }}
                unityProvider={unityProvider} />
 </div>
              <div>
                place for back and fullscreen button
              </div>


            </div>
          )}

        </div>

      </div>
    </section>
  );
};
