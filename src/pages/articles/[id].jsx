/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";

// Component
import DetailComponent from "@/components/detailPage_components/DetailComponent";

import { url } from "@/environment/url";

export default function ArticleDetails({ data }) {
  return (
    <>
      <Head>
        <title>{data.title} | Visit Culture</title>
        <link rel="icon" href="/visitcultureicon.jpeg" />
        <meta name="description" content={data.shortDesc} />
      </Head>
      <div>
        <DetailComponent data={data} />
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch(
    `${url}api/articles?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const articles = await response.json();

  const paths = articles.map((article) => {
    return {
      params: { id: article.id.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const response = await fetch(
    `${url}api/articles/${context.params.id}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
