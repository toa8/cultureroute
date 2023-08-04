/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
// Styles
import styles from "../../styles/home_style/contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section}>
      <img
        data-aos="fade-left"
        src="/contactCompBg.png"
        alt="contactCompBg"
        loading="lazy"
        className={styles.img}
      />
      <div className={styles.main} data-aos="fade-right">
        <div className={styles.content}>
          <p className={styles.title}>Bizimle İletişime Geç</p>
          <p className={styles.subtitle}>
            Websitesi hakkında düşünceleriniz ve önerileriniz bizler için çok
            önemli. Düşüncelerinizi{" "}
            <Link className={styles.link} href={"/contact"}>
              iletin.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
