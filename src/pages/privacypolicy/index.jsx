/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Head from "next/head";
// Styling
import styles from "../../styles/privacypolicy/privacypolicy.module.css";
// Animation
import { motion } from "framer-motion";

const index = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Visit Culture</title>
        <link rel="icon" href="/visitcultureicon.jpeg" />
        <meta name="description" content="Privacy Policy" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={styles.container}
      >
        <h2>Privacy Policy</h2>
        <p>Last updated: September 12, 2023</p>
        <p>
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </p>
        <p>
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy.
        </p>
        <h2>About User Information Usage Areas</h2>
        <p>
          At visitculture.com, we only collect information from our users in the
          contact tab to provide feedback about the site. This information we
          receive:
        </p>
        <p>- E-mail</p>
        <p>- Name, Surname</p>
        <p>
          This information we receive is not shared with any organization or
          individual. It is only information taken for the purpose of
          establishing healthy communication with users.
        </p>
        <p>
          However, in the following sections, informational e-mails may be sent
          to the e-mails of our users, but this is not the case at the moment.
        </p>
        <p>
          When our users log in to the site, there is no technology to store or
          receive users' information such as cookies or geolocation.
        </p>
        <h2>Purchasing</h2>
        <p>
          There is no place on our site where payment is or should be made. You
          can use our site completely free of charge.{" "}
        </p>
        <h2>About Images</h2>
        <p>Most of the images are free ones from unsplash.com.</p>
        <p>
          The rest of the images and visual phrases were found on google.com.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, You can contact
          us:
        </p>
        <p> - By email: visitculture8@gmail.com</p>
      </motion.div>
    </>
  );
};

export default index;
