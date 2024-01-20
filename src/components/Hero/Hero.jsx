import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello! Nice to see you here!</h1>
        <p className={styles.description}>
         In discussions about whether games are considered art, I would say, "That depends."
          There are titles that truly are art, and those games serve as inspiration for me to
           do my best in this industry.
        </p>
        <a href="mailto:jkkorczynski@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/MordaWKole.png")}
        alt="Just face of Jakub Korczynski"
        className={styles.heroImg}
      />
      {/* <div className={styles.topBlur} /> */}
      {/* <div className={styles.bottomBlur} /> */}
    </section>
  );
};