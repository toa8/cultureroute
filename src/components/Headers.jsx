import React from "react";

// Styling
import styles from "../styles/header.module.css";

export default function Headers({ title, bgImgUrl }) {
  return (
    <div
      className={styles.page_header}
      style={{
        backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),url("${bgImgUrl}")`,
      }}
    >
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
