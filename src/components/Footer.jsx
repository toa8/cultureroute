import React from "react";
import Link from "next/link";

// Styling
import styles from "../styles/footer.module.css";

// Icons
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          <div className={styles.links}>
            <a href="https://www.instagram.com/visitculture8/" target="_blank">
              <BsInstagram size={18} />
              Instagram
            </a>
            <a href="https://www.tiktok.com/@visitculture" target="_blank">
              <FaTiktok size={18} />
              Tiktok
            </a>
            <a href="mailto:visitculture8@gmail.com" target="_blank">
              <AiOutlineMail size={18} />
              Mail
            </a>
          </div>
          <div className={styles.links}>
            <Link href="/articles">Makaleler</Link>
            <Link href="/blogs">Bloglar</Link>
            <Link href="/news">Haberler</Link>
            <Link href="/contact">İletişime Geç</Link>
          </div>
        </div>
        <div className={styles.sign}>
          <p>© Culture Route 2023</p>
        </div>
        <div className={styles.img}></div>
      </div>
    </footer>
  );
}
