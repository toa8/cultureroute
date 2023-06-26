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
        <title>Makaleler | Visit Culture</title>
        <link rel="icon" href="/visitcultureicon.jpeg" />
        <meta
          name="description"
          content="Yolculuğunuzun merkezi: İlham veren makalelerle Visit Culture!"
        />
        <meta name="keywords" content="makale,gezi,rehber,seyehat"></meta>
      </Head>
      <section className={styles.section}>
        <Headers
          title={"Ülkeler ve Şehirler Hakkındaki Makalelere Gözat!"}
          bgImgUrl={"/articlesPagebg.png"}
        />
        <div className={styles.container}>
          <div className={styles.cards}>
            <Card data={data} pageName={"articles"} />
          </div>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(
    `${url}/api/articles?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await response.json();

  return {
    props: { data },
  };
};
