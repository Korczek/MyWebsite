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
          <img 
          className={styles.email}
          src={getImageUrl("contact/mailIcon.png")} 
          alt="Email icon" />
          <a href="mailto:jkkorczynski@gmail.com">My email</a>
        </li>
        <li className={styles.link}>
          <img className={styles.linkedIn}
            src={getImageUrl("contact/LI-In-Bug.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/jakub-korczy%C5%84ski-917a95151/">My Linked in profile</a>
        </li>
        <li className={styles.link}>
          <img 
            className={styles.github}
            src={getImageUrl("contact/github-mark-white.png")} 
            alt="Github icon" />
          <a href="https://www.github.com/korczek">My Github profile</a>
        </li>
      </ul>
    </footer>
  );
};