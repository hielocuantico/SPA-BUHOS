import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <header className={`container ${styles["home-header"]}`}>
        <div className={styles["header-text-container"]}>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            similique corporis cum voluptatibus sequi tenetur provident dolores
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
