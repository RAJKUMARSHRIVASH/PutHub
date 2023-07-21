import { useState, useEffect } from "react";
import backtotop from "../../assets/top.png";
import styles from "./BackToTop.module.css";

const BackToTop = () => {
  const [active, setActive] = useState<boolean>(true);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    console.log(window.scrollY);

    if (window.scrollY >= 400) {
      setActive(true)
    }
    else {
      setActive(false)
    }
  };

  document.addEventListener("scroll", () => {
    handleScroll()
  })

  return (
    <div
      className={active ? styles.topIcon : `${styles.topIcon} ${styles.inactive}`}
      onClick={handleClick}
    >
      <img src={backtotop} alt="back to top button" />
    </div>
  );
};

export default BackToTop;
