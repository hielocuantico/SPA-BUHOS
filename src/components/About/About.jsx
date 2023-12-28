import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles["about-container"]}>
      <div className={`container container-margin ${styles["about-content"]}`}>
        <div className={styles['about-text']}>
          <h1> ABOUT </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            deleniti accusamus amet sapiente provident corrupti minima veniam
            eius atque voluptates totam molestias ipsum, illo possimus ratione
            autem reiciendis architecto fugit. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Fugit voluptates consequatur
            similique! Exercitationem placeat debitis earum? Cum rerum explicabo
            vero quos hic dolorem. Aut laborum beatae hic nam in! Quod?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            deleniti accusamus amet sapiente provident corrupti minima veniam
            eius atque voluptates totam molestias ipsum, illo possimus ratione
            autem reiciendis architecto fugit. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Fugit voluptates consequatur
            similique! Exercitationem placeat debitis earum? Cum rerum explicabo
            vero quos hic dolorem. Aut laborum beatae hic nam in! Quod?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            deleniti accusamus amet sapiente provident corrupti minima veniam
            eius atque voluptates totam molestias ipsum, illo possimus ratione
            autem reiciendis architecto fugit. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Fugit voluptates consequatur
            similique! Exercitationem placeat debitis earum? Cum rerum explicabo
            vero quos hic dolorem. Aut laborum beatae hic nam in! Quod?
          </p>
        </div>
        <div className={styles['about-img']}>
        </div>
      </div>
    </div>
  );
};

export default About;
