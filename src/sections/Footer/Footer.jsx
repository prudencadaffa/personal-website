import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 All rights reserved. <br />
        make with <span className={styles.heart}>❤</span> by {'Prudenca Ahmad Daffa Kurnia '}
      </p>
    </section>
  );
}

export default Footer;
