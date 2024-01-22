import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>

        <img src={getImageUrl("hero/MordaWKole.png")} alt="Just my face"/>
        <h1 className={styles.title}>Nice to have you here!</h1>

        <p className={styles.description}>
        Gpt named me Full Stack Developer and Artist, but I'm not absolutely sure about that xD<br/>
          Maybe will be better to just show you what i've crafted :D
        </p>

        <div className={styles.contactBtnContainer}>
          <div className={styles.contactBtn}>
            <a href="#demo" >Demo</a>
          </div>
          <div className={styles.contactBtn}>
            <a href="#experience" >Achievements</a>
          </div>
          <div className={styles.contactBtn}>
            <a href="#contact" >Contact</a>
          </div>
        </div>


      </div>

    </section>
  );
};