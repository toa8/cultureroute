/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";

// Component
import DetailComponent from "@/components/detailPage_components/DetailComponent";

import { url } from "@/environment/url";

export default function BlogDetails({ data }) {
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
    `${url}/api/blogs?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const blogs = await response.json();

  const paths = blogs.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const response = await fetch(
    `${url}/api/blogs/${context.params.id}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
