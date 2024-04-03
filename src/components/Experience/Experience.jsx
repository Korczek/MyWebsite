import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

const gpTT = 'https://play.google.com/store/apps/details?id=com.FidgetyGames.TapTwo&pcampaignid=web_share&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1';
const gpAlt = "Get it on Google Play";
const gpImgSounce = "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";


export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      {/* <h2 className={styles.title}>achievements</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div> */}


      <h2 className={styles.title}>published game</h2>

      <ul>

        {/* now list of my SO MANY published games. one by one. In release order! */}

        <li className={styles.myGamesItem}>

          <div className={styles.myGameL}>

            <div className={styles.logoImgContainer}>
              <img src={getImageUrl("myGames/TapTwo.png")} alt="TapTwo logo" />
            </div>

            <div className={styles.googleContainer}>
              <a href={gpTT} target="_blank">
                <img alt={gpAlt} src={gpImgSounce} />
              </a>
            </div>

          </div>

          <div className={styles.myGamesDetails}>
            <h3 >Tap Two</h3>
            <p>May, 2023</p>
            <p>
              Challenge yourself in this simple and addictive arcade game.<br/>
              Show off your perfect timing and quick reactions to set the highest possible records.<br/>
              Develop your skills and avoid getting easily distracted with exciting and engaging gameplay.
              Catch tiles, defuse bombs and let the bombocoins flow freely. Sounds easy, right?
              But not when it’s all moving in various directions!<br/>
            </p>
          </div>

          {/* maybe place some screenshots in here */}

        </li>

        {/* another game :  */}


        {/* just copy paste stuff from above and replace values   */}



        {/* done. */}

      </ul>

    </section>
  );
};