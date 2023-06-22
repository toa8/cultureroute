/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

// Styling
import styles from "../../styles/home_style/articlesComp.module.css";
// Components
import Button from "../ui_components/Button";

export default function ArticlesComp({ articles }) {
  const firstOfThree = articles.slice(0, 3);

  return (
    <>
      <section className={styles.section} id="articles">
        <div className={styles.article_boxes} data-aos="fade-up">
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
        </div>
        <div>
          <Button
            href="/articles"
            title="Daha Fazla Oku"
            styleOverride={{ backgroundColor: "#474e4ee8", color: "white" }}
          />
        </div>
      </section>
    </>
  );
}
