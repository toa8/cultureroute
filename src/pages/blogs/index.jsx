/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";

// Styling
import styles from "../../styles/blogs_page/blogsPage.module.css";
// Components
import Headers from "@/components/Headers";

import { url } from "@/environment/url";

export default function Index({ data }) {
  return (
    <>
      <Head>
        <title>Blog Yazıları | Visit Culture</title>
        <link rel="icon" href="/visitcultureicon.jpeg" />
        <meta
          name="description"
          content="BLOGLAR,
          Seyahat bloglarına gözat!
          En güzel şehirler, yiyecekler, kültürler keşfedilmeyi bekliyor!"
        />
        <meta name="keywords" content="makale,gezi,rehber,seyehat"></meta>
      </Head>
      <section className={styles.section}>
        <Headers
          title={"Bloglar"}
          bgImgUrl={
            "https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          }
        />
        <div className={styles.container}>
          {data.map((d, idx) => {
            return (
              <div key={idx}>
                <Link href={`/blogs/${d.id.toString()}`}>
                  <div className={styles.card}>
                    <img
                      src={d.cover_img}
                      alt={d.city}
                      className={styles.img}
                    />
                    <div className={styles.textContainer}>
                      <div className={styles.upperText}>
                        <p className={styles.title}>{d.title}</p>
                        <p className={styles.shortDesc}>{d.shortDesc}</p>
                      </div>
                      <div className={styles.bottomText}>
                        <p>📍 {d.city}</p>
                        <p>📆 {d.date}</p>
                        <p>✍🏻 {d.author}</p>
                      </div>
                      <div className={styles.line}></div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(
    `${url}/api/blogs?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await response.json();

  return {
    props: { data },
  };
};
