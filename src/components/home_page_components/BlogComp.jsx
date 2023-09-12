/* eslint-disable @next/next/no-img-element */
import React from "react";
// Styling
import styles from "../../styles/home_style/blogComp.module.css";
//components
import Button from "../ui_components/Button";
// Animation
import { motion } from "framer-motion";

export default function BlogComp() {
  return (
    <section className={styles.section} id="blogs">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={styles.container}
      >
        <div className={styles.text_area}>
          <p className={styles.title}>BLOGS</p>
          <p className={styles.subtitle}>Check out travel blogs!</p>
          <p className={styles.desc}>
            The most beautiful cities, foods and cultures are waiting to be
            discovered!
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.shape}>
            <Button
              title={">"}
              href={"/blogs"}
              styleOverride={{
                width: "70px",
                heigth: "70px",
                backgroundColor: "#00373e",
                position: "absolute",
                top: "38px",
                left: "50px",
                color: "#f8f6f5",
                fontSize: "24px",
              }}
            />
          </div>
          <p className={styles.item_title}>
            {
              "'Traveling is the most effective means of breaking down the walls of our minds, the boundaries.' - Ralph Waldo Emerson"
            }
          </p>
          <p className={styles.item_title}>
            {
              "'Travel is food for the soul; you must constantly explore new places to be nourished.' - Pat Conroy"
            }
          </p>
        </div>
      </motion.div>
    </section>
  );
}
