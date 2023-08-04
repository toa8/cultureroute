/* eslint-disable @next/next/no-img-element */
import React from "react";
// Styling
import styles from "../../styles/ui_style/cardComp.module.css";
// Route
import Link from "next/link";

export default function Card({ data, pageName }) {
  return (
    <>
      {data.map((d, idx) => {
        return (
          <div key={idx}>
            <div className={styles.card}>
              <Link
                href={`/${pageName}/${d.id.toString()}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  src={d.cover_img}
                  alt={d.title}
                  className={styles.img}
                  loading="lazy"
                />
                <h3 className={styles.title}>{d.title}</h3>
              </Link>
              <p className={styles.date}>{d.date}</p>
              <div className={styles.line}></div>
              <p className={styles.desc}>{d.shortDesc}</p>
              <Link
                className={styles.btn}
                href={`/${pageName}/${d.id.toString()}`}
              >
                {"Daha Fazla >>"}
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
