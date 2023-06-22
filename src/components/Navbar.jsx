/* eslint-disable @next/next/no-img-element */
import React from "react";
// Styling
import styles from "../styles/navbar.module.css";
// Route
import Link from "next/link";

// Router
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const cursor = router.pathname !== "/" ? "pointer" : "auto";

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY < 120) {
        document.getElementById("nav").style.backgroundColor = "transparent";
        document.getElementById("nav").style.height = "130px";
        document.getElementById("logo").style.width = "300px";
      } else if (window.scrollY > 120) {
        document.getElementById("nav").style.backgroundColor =
          "rgba(20,20,20,0.7)";
        document.getElementById("nav").style.height = "80px";
        document.getElementById("logo").style.width = "250px";
      }
    });
  }, []);

  return (
    <nav className={styles.nav} id="nav">
      {cursor === "pointer" ? (
        <Link href="/" style={{ height: "100%" }}>
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
          loading="lazy"
        />
      )}

      <div className={styles.links}>
        <ul>
          <li>
            <Link href="/" className={styles.link}>
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link href="/#articles" className={styles.link} scroll={false}>
              Makaleler
            </Link>
          </li>
          <li>
            <Link href="/#blogs" className={styles.link} scroll={false}>
              Bloglar
            </Link>
          </li>
          <li>
            <Link href="/#news" className={styles.link} scroll={false}>
              Haberler
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
