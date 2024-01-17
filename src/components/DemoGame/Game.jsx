import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const Game = () => {
  var { unityProvider } = useUnityContext({
    loaderUrl: "demo/Web.loader.js",
    dataUrl: "demo/Web.data",
    frameworkUrl: "demo/Web.framework.js",
    codeUrl: "demo/Web.wasm",
  });

  return <Unity unityProvider = { unityProvider }  />;
};