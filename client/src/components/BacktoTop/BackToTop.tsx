import React, { useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const css = ():React.CSSProperties => {
    return {
      position: "fixed",
      bottom: 20,
      right: 20,
      zIndex: 100,
      display: isVisible ? "block" : "none",
      opacity: 0.5,
      transition: "opacity 0.5s ease-in-out",
      outline:"auto"
    };
  };

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <div style={css()}>
      <a href="#top" onClick={handleClick}>Back to top</a>
    </div>
  );
};

export default BackToTop;
