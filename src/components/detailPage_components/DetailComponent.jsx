/* eslint-disable @next/next/no-img-element */
import React from "react";
// Styling
import styles from "../../styles/detail_component.module.css";
// Component
import Headers from "../Headers";

const DetailComponent = ({ data }) => {
  return (
    <>
      <Headers bgImgUrl={data.cover_img} />
      <div style={{ backgroundColor: "#f8f6f5", width: "100%" }}>
        <div className={styles.content}>
          <p className={styles.title}>{data.title}</p>
          <p className={styles.desc}>{data.longDescFirst}</p>
          <div className={styles.imgDiv}>
            <img
              src={data.imgUrlFirst}
              alt={data.city}
              className={styles.content_img}
              loading="lazy"
            />
            {data.imgDescFirst ? (
              <div className={styles.imgDesc}>{data.imgDescFirst}</div>
            ) : null}
          </div>
          <p className={styles.desc}>{data.longDescSecond}</p>
          <div className={styles.imgDiv}>
            <img
              src={data.imgUrlSecond}
              alt={data.city}
              className={styles.content_img}
              loading="lazy"
            />
            {data.imgDescFirst ? (
              <div className={styles.imgDesc}>{data.imgDescSecond}</div>
            ) : null}
          </div>

          <p className={styles.desc}>{data.longDescThird}</p>
          <div className={styles.imgDiv}>
            <img
              src={data.imgUrlThird}
              alt={data.city}
              className={styles.content_img}
              loading="lazy"
            />
            {data.imgDescFirst ? (
              <div className={styles.imgDesc}>{data.imgDescThird}</div>
            ) : null}
          </div>

          <p className={styles.desc}>{data.longDescFourth}</p>
          <p className={styles.date}>{data.date}</p>
        </div>
      </div>
    </>
  );
};

export default DetailComponent;
