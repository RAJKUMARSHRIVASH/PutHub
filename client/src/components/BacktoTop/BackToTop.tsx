import React, { useState } from "react";
import backtotop from '../../assets/top.png'
import styles from './BackToTop.module.css'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  if (window.scrollY >= 200) {
    setIsVisible(true)
  }
  else {
    setIsVisible(false);
  }
  if (!isVisible) {
    document.querySelector(".topIcon")?.classList.remove("active");
  }
  else {
    document.querySelector(".topIcon")?.classList.add("active");
  }
  
  const handleClick = () => {
    window.scrollY = 0;
    setIsVisible(false);
   
  };

  return (
    <div className={styles.topIcon} onClick={handleClick}>
      <img src={backtotop} alt="back to top button" />
    </div>
  );
};

export default BackToTop;
