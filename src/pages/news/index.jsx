import React from "react";
import Head from "next/head";
// Styling
import styles from "../../styles/articles_detail_page.module.css";
// Components
import Card from "@/components/ui_components/Card";
import Headers from "@/components/Headers";

import { url } from "@/environment/url";

export default function Index({ data }) {
  return (
    <>
      <Head>
        <title>Haberler | Visit Culture</title>
        <link rel="icon" href="/visitcultureicon.jpeg" />
        <meta
          name="description"
          content="Yolculuğunuzun merkezi: İlham veren haberlerle Visit Culture!"
        />
        <meta name="keywords" content="makale,gezi,rehber,seyehat"></meta>
      </Head>
      <section className={styles.section}>
        <Headers
          title={"Ülkeler ve Şehirler Hakkındaki En Güncel Haberlere Gözat!"}
          bgImgUrl={
            "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          }
        />
        <div className={styles.container}>
          <div className={styles.cards}>
            <Card data={data} pageName={"news"} />
          </div>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(
    `${url}/api/news?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await response.json();

  return {
    props: { data },
  };
};
