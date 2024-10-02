import styles from "../styles/copyright.module.scss";

export default function Copyright() {
  return (
    <div className={styles.copyright_section}>
      <span>
        &copy; Copyright 2024.{" "}
        <a href="https://danidevstudio.com/">Dani's Products.</a>
      </span>
      <span>All rights reserved.</span>
    </div>
  );
}
