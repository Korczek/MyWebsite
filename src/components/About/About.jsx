import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container2} id="about">
    <h2 className={styles.title}>About</h2>

    <div className={styles.content}>
      <img
        src={getImageUrl("About/aboutImage.png")}
        alt="Me sitting with a laptop"
        className={styles.aboutImage}
      />
      <ul className={styles.aboutItems}>
        
        <li className={styles.aboutItem}>
          <img 
          src={getImageUrl("About/U_ProfileIcon_Alpha_Negative_500x500.png")} width={100}
          alt="Unity Logo" />
          <div className={styles.aboutItemText}>
            <h3>Unity developer</h3>
            <p>
              I have experience in the entire game creation process. I've made about seven mobile games that have reached the market.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img 
          src={getImageUrl("About/Csharp_Logo.png")} width={100}
          alt="Server icon" />
          <div className={styles.aboutItemText}>
            <h3>C# programmer</h3>
            <p>
              I started with C# in Unity, and now I've expanded my skills to include creating .NET Core APIs and integrating multiple SDKs.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("About/blender_icon_128x128.png")}  alt="Blender logo" />
          <div className={styles.aboutItemText}>
            <h3>3D artist</h3>
            <p>
              I've crafted numerous models and seamlessly integrated them into games.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  );
};