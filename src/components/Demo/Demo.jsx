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

          {showDemo ? (

            <div>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className=" w-full lg:w-1/2 p-6 bg-teal-500 rounded-3xl">
                  <img src={getImageUrl("myGames/Scr.png")} alt="" />
                </div>

                <div className="flex w-full lg:w-1/2 p-4 bg-teal-500 text-slate-100 rounded-3xl">
                  In this demo, you'll see some animations created with DoTween (About) and a more
                  complex animation system created through a conditional loop on a curve calculated
                  by points in world space (contact).
                   <br /><br />
                    The first game was inspired by "Toon Blast".
                  On touch, actions are driven by a recurrent script that maps all objects with matching
                  types by their neighbors and neighbors' neighbors. The board is generated from an
                  image where each color is represented as a different type.
                  <br /><br />
                  This demo is still a work in progress. In the future,
                  I plan to add a second game that will feature procedural animations.
                </div>

              </div>

              <div className="flex flex-row justify-center pt-6">

                <div className="">
                  <a className=" bg-teal-500 hover:bg-teal-300 p-4 rounded-full " onClick={handleRunDemoClick}>
                    Run Demo
                  </a>
                </div>
              </div>
            </div>

          ) : (

            <div className="flex flex-col max-w-screen-xl mx-auto justify-center content-center p-1 bg-teal-500
             rounded-3xl">

              {isLoaded ? (null) :
                (
                  <div className="flex flex-full justify-center content-center pt-2">
                    <button type="button" className="flex flex-row bg-teal-700 rounded-full p-4" disabled>
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx={12} cy={12} r={10}
                          stroke="currentColor"
                          strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M 4 12 a 8 8 0 0 1 8 -8 V 0 C 5.373 0 0 5.373 0 12 h 4 Z m 2 5.291 A 7.962 7.962 0 0 1 4 12 H 0 c 0 3.042 1.135 5.824 3 7.938 l 3 -2.647 Z"></path>
                      </svg>
                      {loadingPercentage}% loaded
                    </button>
                  </div>
                )
              }

              <Unity
                className=" w-full lg:w-[960px] lg:h-[600px] rounded-3xl "
                style={{ visibility: isLoaded ? "visible" : "hidden" }}
                unityProvider={unityProvider} />
              <div className="flex flex-row lg:flex-full justify-center content-center p-2 gap-4">

                <div>
                  <button className="text-center text- bg-teal-700 hover:bg-teal-600 
                  rounded-full p-4"
                    onClick={handleClickBack}>
                    Go back
                  </button>
                </div>

                <div>
                  <button className="text-center text- bg-teal-700 hover:bg-teal-600 
                  rounded-full p-4"
                    onClick={handleClickEnterFullscreen}>
                    Fullscreen
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
