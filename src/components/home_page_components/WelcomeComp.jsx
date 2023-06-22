import React from "react";
// Styling
import styles from "../../styles/home_style/welcomeComp.module.css";
// Components
import Button from "../ui_components/Button";

export default function WelcomeComp() {
  return (
    <section className={styles.section}>
      <div className={styles.sentences} data-aos="fade-up">
        <h2>Visit Culture</h2>
        <h4>
          Seyehat Noktalarını Ve Kültür Duraklarını Keşfetmek İçin Adımlarınızı
          Bizimle Atın! Adım Adım Kültür Rotanızı Oluşturun.
        </h4>
        <div className={styles.btnContainer}>
          <Button title="Keşfetmeye Başla" href="/articles" />
        </div>
      </div>
    </section>
  );
}
