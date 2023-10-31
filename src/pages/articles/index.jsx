import React from "react";
import Head from "next/head";
// Styling
import styles from "../../styles/pageCards.module.css";
// Components
import Card from "@/components/ui_components/Card";
import Headers from "@/components/Headers";

import { url } from "@/environment/url";

export default function Index({ data }) {
  return (
    <>
      <Head>
        <title>Articles | Visit Culture</title>
        <link rel="icon" href="/visitcultureicon.jpeg" />
        <meta
          name="description"
          content="The center of your journey: Visit Culture! with inspiring articles!"
        />
        <meta name="keywords" content="article, trip, guide, travel"></meta>
      </Head>
      <section className={styles.section}>
        <Headers
          title={"Browse Articles about Countries and Cities!"}
          bgImgUrl={
            "https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          }
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
