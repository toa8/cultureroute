/* eslint-disable @next/next/no-img-element */
import React from "react";

// Styling
import styles from "../../styles/detail_component.module.css";

const DetailComponent = ({ data }) => {
  return (
    <div>
      <div
        className={styles.img}
        style={{
          backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.4), rgba(4, 9, 30, 0.4)),
            url(${data.cover_img})`,
        }}
      ></div>
      <div style={{ backgroundColor: "#f8f6f5", width: "100%" }}>
        <div className={styles.content}>
          <p className={styles.title}>{data.title}</p>
          <p className={styles.desc}>{data.longDescFirst}</p>
          <img
            src={data.imgUrlFirst}
            alt={data.city}
            className={styles.content_img}
            loading="lazy"
          />
          <p className={styles.desc}>{data.longDescSecond}</p>
          <img
            src={data.imgUrlSecond}
            alt={data.city}
            className={styles.content_img}
            loading="lazy"
          />
          <p className={styles.desc}>{data.longDescThird}</p>
          <img
            src={data.imgUrlThird}
            alt={data.city}
            className={styles.content_img}
            loading="lazy"
          />
          <p className={styles.desc}>{data.longDescFourth}</p>
          <p className={styles.date}>{data.date}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailComponent;
