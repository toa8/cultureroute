/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
// Styles
import styles from "../../styles/home_style/contact.module.css";
// Animation
import { motion } from "framer-motion";
// Icons
import { AiOutlineSend } from "react-icons/ai";

export default function Contact() {
  const [email, setEmail] = React.useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "",
          mail: email,
          body: "",
        }),
      });

      if (response.ok) {
        alert("We have successfully saved your email information.");
      } else {
        alert("We have not successfully saved your email information.");
      }
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.main}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p className={styles.title}>Contact Us</p>
          <p className={styles.subtitle}>
            Your thoughts and suggestions about the website are very important
            to us.{" "}
          </p>
          <form
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="email"
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your email address to receive updates on new articles."
            />
            <button type="submit" className={styles.btn} onClick={handleSubmit}>
              <AiOutlineSend color="white" fontSize={26} />
            </button>
          </form>
          <Link className={styles.link} href={"/contact"}>
            Let us know what you think about website.
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
