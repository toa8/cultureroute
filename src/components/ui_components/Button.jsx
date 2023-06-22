import React from "react";
// Route
import Link from "next/link";
// Styling
import styles from "../../styles/ui_style/button.module.css";

export default function Button({ href, title, styleOverride }) {
  return (
    <div>
      <Link href={href} className={styles.btn} style={styleOverride}>
        {title}
      </Link>
    </div>
  );
}
