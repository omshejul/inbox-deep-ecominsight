import React from "react";
import Image from 'next/image'
import bgImg from "/public/background.jpg"
import styles from './Bg.module.css'
const Bg = () => {
  return (
    <div className={styles.bgFilter}>
      <Image className="" src={bgImg} alt="BG" />
    </div>
  );
};

export default Bg;
