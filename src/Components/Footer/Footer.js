import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#home" className={styles.title}>
        Thuy Duong
      </a>
      <div className={styles.links__list}>
        <a href="#about" className={styles.links__item}>
          About
        </a>
        <a href="#skills" className={styles.links__item}>
          Skills
        </a>
        <a href="#projects" className={styles.links__item}>
          Projects
        </a>
      </div>
      <div className={styles.socical__list}>
        <a
          href="https://www.facebook.com/adriana.vankova.3367"
          className={styles.social__item}
        >
          <img
            src="img/facebook.png"
            alt="Facebook"
            className={styles.social__img}
          />
        </a>
        <a
          href="https://www.instagram.com//"
          className={styles.social__item}
        >
          <img
            src="img/instagram.png"
            alt="Instagram"
            className={styles.social__img}
          />
        </a>
      </div>
      <p className={styles.text}>© VietKhanh. All rights reserved 2023</p>
    </footer>
  );
}

export default Footer;
