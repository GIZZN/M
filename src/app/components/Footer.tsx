import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.decorativeBracket}></div>
      <div className={styles.logo}>
        <div className={styles.logoBracket}>
          <span className={styles.logoText}>M</span>
          <span className={styles.logoSubtext}>едвижимость</span>
        </div>
      </div>

      <div className={styles.footerContent}>
        <div className={styles.addressInfo}>
          <p>5123 Market St. #22B</p>
          <p className={`${styles.address} ${styles.addressSpacing}`}>Charlottesville, California 44635</p>
          <p>(434) 546-4356</p>
          <a href="mailto:contact@medviz.com">contact@medviz.com</a>
        </div>

        <nav className={styles.navigation}>
          <div className={styles.navColumn}>
            <Link href="/">Дом</Link>
            <Link href="/about">Проекты</Link>
            <Link href="/contacts">Контакты</Link>
          </div>
          <div className={styles.navColumn}>
            <Link href="/facebook">Facebook</Link>
            <Link href="/twitter">Twitter</Link>
            <Link href="/instagram">Instagram</Link>
          </div>
        </nav>
      </div>
      <div className={styles.copyright}>
        <p>© 2024 All rights reserved</p>
      </div>
    </footer>
  );
} 