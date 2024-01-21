import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>

        <img src={getImageUrl("hero/MordaWKole.png")} alt="Just my face"/>
        <h1 className={styles.title}>Nice to have you here!<br/>I'm Unity Developer</h1>

        <p className={styles.description}>
          And I dreaming to make most artistic and enjoyable games i can 
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

      {/* <div className={styles.topBlur} /> */}
      {/* <div className={styles.bottomBlur} /> */}
    </section>
  );
};