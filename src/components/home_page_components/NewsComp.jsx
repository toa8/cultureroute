/* eslint-disable @next/next/no-img-element */
import React from "react";
// Route
import Link from "next/link";
// Styling
import styles from "../../styles/home_style/newsComp.module.css";
// Components
import Button from "../ui_components/Button";
// Animation
import { motion } from "framer-motion";

export default function NewsComp({ news }) {
  const firstOfThree = news.slice(0, 3);

  return (
    <section id="news" className={styles.section}>
      <motion.div className={styles.container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={styles.textArea}
        >
          <p>Trustworthy</p>
          <p>Brand New</p>
          <p>News</p>
          <Button href={"/news"} title={"Daha Fazla Oku"} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={styles.cards}
        >
          {firstOfThree.map((news, idx) => {
            let shortDesc = news.shortDesc;
            return (
              <div key={idx}>
                <Link
                  href={`/news/${news.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.card}>
                    <div className={styles.content}>
                      <h3 className={styles.title}>{news.title}</h3>
                      <p className={styles.shortDesc}>
                        {shortDesc.slice(0, 250) + " " + ". . ."}
                      </p>
                    </div>
                    <div className={styles.imgDiv}>
                      <img
                        src={news.cover_img}
                        alt="News IMG"
                        className={styles.img}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
