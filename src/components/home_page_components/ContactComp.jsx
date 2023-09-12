/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
// Styles
import styles from "../../styles/home_style/contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section}>
      <img
        src="/contactCompBg.png"
        alt="contactCompBg"
        loading="lazy"
        className={styles.img}
      />
      <div className={styles.main}>
        <div className={styles.content}>
          <p className={styles.title}>Contact Us</p>
          <p className={styles.subtitle}>
            Your thoughts and suggestions about the website are very important
            to us.{" "}
            <Link className={styles.link} href={"/contact"}>
              Let us know what you think.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
