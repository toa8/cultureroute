/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
// Styling
import styles from "../styles/navbar.module.css";
// Router
import { useRouter } from "next/router";
// Icons
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineArticle } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";

export default function Navbar() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const cursor = router.pathname !== "/" ? "pointer" : "auto";

  return (
    <nav className={styles.nav} id="nav">
      {cursor === "pointer" ? (
        <Link href="/">
          <img
            src="/visitculturelogo.png"
            alt="logo"
            className={styles.logo}
            id="logo"
            style={{ cursor: cursor }}
          />
        </Link>
      ) : (
        <img
          src="/visitculturelogo.png"
          alt="logo"
          className={styles.logo}
          id="logo"
        />
      )}
      <div className={styles.links}>
        <ul>
          <li>
            <Link href="/" className={styles.link}>
              <AiOutlineHome color="white" className={styles.icon} />
              <p>AnaSayfa</p>
            </Link>
          </li>
          <li>
            <Link
              href={currentRoute === "/" ? "#articles" : "/articles"}
              className={styles.link}
              scroll={false}
            >
              <MdOutlineArticle color="white" className={styles.icon} />
              <p>Makaleler</p>
            </Link>
          </li>
          <li>
            <Link
              href={currentRoute === "/" ? "#blogs" : "/blogs"}
              className={styles.link}
              scroll={false}
            >
              <FaBloggerB color="white" className={styles.icon} />
              <p>Bloglar</p>
            </Link>
          </li>
          <li>
            <Link
              href={currentRoute === "/" ? "#news" : "/news"}
              className={styles.link}
              scroll={false}
            >
              <BsNewspaper color="white" className={styles.icon} />
              <p> Haberler</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
