import React from "react";

//Component used in autoslider image is passed through props from autoslider where the images are stored in state
const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`
  };
  return <div className="slide" style={styles}></div>;
};

export default Slide;