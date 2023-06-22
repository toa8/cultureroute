/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Head from "next/head";
import styles from "../../styles/contact_page/contactPage.module.css";
import Headers from "@/components/Headers";

export default function Index() {
  const [nameValue, setNameValue] = useState("");
  const [mailValue, setMailValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameValue,
          mail: mailValue,
          body: bodyValue,
        }),
      });

      if (response.ok) {
        alert("Mail başarıyla gönderildi!");
      } else {
        alert("Mail gönderilemedi!");
      }
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setNameValue(value);
    } else if (name === "mail") {
      setMailValue(value);
    } else if (name === "body") {
      setBodyValue(value);
    }
  };

  const isButtonDisabled =
    nameValue.trim() === "" ||
    mailValue.trim() === "" ||
    bodyValue.trim() === "";

  return (
    <>
      <Head>
        <title>Contact Us | Visit Culture</title>
        <link rel="icon" href="/visitcultureicon.jpeg" />
        <meta
          name="description"
          content="Websitesi hakkında düşünceleriniz ve önerileriniz bizler için çok önemli. Düşüncelerinizi iletin."
        />
        <meta name="keywords" content="makale,gezi,rehber,seyehat"></meta>
      </Head>
      <section className={styles.section}>
        <Headers
          title={"Contact Us ☎"}
          bgImgUrl={
            "https://images.unsplash.com/photo-1485770958101-9dd7e4ea6d93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
          }
        />
        <img
          src="/contactPageImg.png"
          className={styles.img}
          alt="contactPageImg"
        ></img>
        <div className={styles.formArea}>
          <form className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Adınız ve Soyadınız"
              className={styles.input}
              maxLength={50}
              required
              value={nameValue}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="mail"
              placeholder="E-mail"
              className={styles.input}
              maxLength={50}
              required
              value={mailValue}
              onChange={handleInputChange}
            />
            <textarea
              name="body"
              placeholder="İçerik"
              className={`${styles.textarea} ${styles.input}`}
              maxLength={400}
              required
              value={bodyValue}
              onChange={handleInputChange}
            />
            <button
              className={styles.btn}
              type="submit"
              onClick={handleSubmit}
              disabled={isButtonDisabled}
            >
              GÖNDER
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
