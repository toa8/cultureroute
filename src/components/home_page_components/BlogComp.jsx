/* eslint-disable @next/next/no-img-element */
import React from "react";

// Styling
import styles from "../../styles/home_style/blogComp.module.css";

//components
import Button from "../ui_components/Button";

export default function BlogComp() {
  return (
    <section className={styles.section} id="blogs">
      <div className={styles.container}>
        <div className={styles.text_area} data-aos="fade-right">
          <p className={styles.title}>BLOGLAR</p>
          <p className={styles.subtitle}>Seyahat bloglarına gözat!</p>
          <p className={styles.desc}>
            En güzel şehirler, yiyecekler, kültürler keşfedilmeyi bekliyor!
          </p>
        </div>
        <div className={styles.item} data-aos="fade-left">
          <div className={styles.shape}>
            <Button
              title={">"}
              href={"/blogs"}
              styleOverride={{
                width: "70px",
                heigth: "70px",
                backgroundColor: "#00373e",
                position: "absolute",
                top: "38px",
                left: "50px",
                color: "#f8f6f5",
                fontSize: "24px",
              }}
            />
          </div>
          <p className={styles.item_title}>
            {
              "'Seyahat etmek, sınırları zihinlerimizdeki duvarları yıkmak için en etkili araçtır.' - Ralph Waldo Emerson"
            }
          </p>
          <p className={styles.item_title}>
            {
              "'Seyahat, ruhun gıdasıdır; beslenmek için sürekli yeni yerler keşfetmelisiniz.' - Pat Conroy"
            }
          </p>
        </div>
      </div>
    </section>
  );
}
