/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

// Styling
import styles from "../../styles/home_style/articlesComp.module.css";
// Components
import Button from "../ui_components/Button";
// Animation
import { motion } from "framer-motion";

export default function ArticlesComp({ articles, isVisible }) {
  const firstOfThree = articles.slice(0, 3);

  return (
    <>
      <section className={styles.section} id="articles">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={styles.article_boxes}
        >
          {firstOfThree.map((article) => {
            let shortDesc = article.shortDesc;
            return (
              <div key={article.id}>
                <Link
                  href={`/articles/${article.id}`}
                  className={styles.article_box}
                >
                  <img
                    src={article.cover_img}
                    alt="Article Image"
                    className={styles.image}
                    loading="lazy"
                  />
                  <div className={styles.article_content}>
                    <h2 id="text">{article.city}</h2>
                    <h5 id="text">{shortDesc.slice(0, 159) + " " + ". . ."}</h5>
                    <p id="text">{article.date}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </motion.div>
        <div>
          <Button
            href="/articles"
            title="Read More >>"
            styleOverride={{ backgroundColor: "#474e4ee8", color: "white" }}
          />
        </div>
      </section>
    </>
  );
}
