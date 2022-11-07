import React from "react";
import Styles from "../styles/index.module.scss";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className={Styles.body}>
      <div>
        <Carousel />
      </div>
    </div>
  );
}
