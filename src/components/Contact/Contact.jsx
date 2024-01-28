import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:jkkorczynski@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/jakub-korczy%C5%84ski-917a95151/" target="_blank" >LinkedIn</a>
        </li>
        <li className={styles.link}  >
          <a href="https://www.github.com/korczek" target="_blank">Github</a>
        </li>
      </ul>
    </footer>
  );
};