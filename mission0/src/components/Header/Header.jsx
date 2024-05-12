import { useEffect, useState } from "react";
import logo from "../../assets/images/IMG20240507125903.jpg";
import Hamburger from "./Hamburger";
import styles from "./Header.module.css";

export default function Header() {
  const [hamburgOpen, setHamburgOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleHamburger = () => setHamburgOpen(!hamburgOpen);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.flex}>
      <div className={styles.flexSmall}>
        <img
          src={logo}
          alt="logo"
          className={`${styles.logo} ${styles.flexItem}`}
        />
        <p className={`${styles.company} ${styles.flexItem}`}>My Company</p>
      </div>
      <div className={styles.flexSmall}>
        <ul
          className={styles.navbar}
          style={{
            display: `${
              width <= 767 ? (hamburgOpen ? "inline" : "none") : "flex"
            }`,
            alignItems: "center",
          }}
        >
          <li className={styles.navItem}>Market</li>
          <li className={styles.navItem}>Council</li>
          <li className={styles.navItem}>Contact</li>
          <li className={`${styles.navItem} ${styles.loginButton}`}>Login</li>
        </ul>
        <div className={styles.hamburgerMenu} onClick={toggleHamburger}>
          <Hamburger />
        </div>
      </div>
    </div>
  );
}
