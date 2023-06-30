/* eslint-disable @next/next/no-img-element */
import React from "react";
// Styling
import styles from "../styles/navbar.module.css";
// Route
import Link from "next/link";
// Router
import { useRouter } from "next/router";
// Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [visible, setVisible] = React.useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;
  console.log(currentRoute);
  const cursor = router.pathname !== "/" ? "pointer" : "auto";

  const showMenu = () => {
    setVisible(!visible);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY < 120) {
        document.getElementById("nav").style.backgroundColor = "transparent";
        document.getElementById("nav").style.height = "130px";
      } else if (window.scrollY > 120) {
        document.getElementById("nav").style.backgroundColor =
          "rgba(30,30,30,0.7)";
        document.getElementById("nav").style.height = "80px";
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
      <div className={styles.toggle} onClick={showMenu}>
        <RxHamburgerMenu size={24} color="white" />
      </div>
      <div className={`${styles.links} ${visible ? styles.active : ""}`}>
        <div className={styles.exit} onClick={closeMenu}>
          <AiOutlineClose size={40} color="white" />
        </div>
        <ul>
          <li>
            <Link href="/" className={styles.link} onClick={closeMenu}>
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link
              href={currentRoute === "/" ? "#articles" : "/articles"}
              className={styles.link}
              scroll={false}
              onClick={closeMenu}
            >
              Makaleler
            </Link>
          </li>
          <li>
            <Link
              href={currentRoute === "/" ? "#blogs" : "/blogs"}
              className={styles.link}
              scroll={false}
              onClick={closeMenu}
            >
              Bloglar
            </Link>
          </li>
          <li>
            <Link
              href={currentRoute === "/" ? "#news" : "/news"}
              className={styles.link}
              scroll={false}
              onClick={closeMenu}
            >
              Haberler
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
