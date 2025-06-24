'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        M
      </Link>
      <button 
        className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
        onClick={toggleMenu}
        aria-label="Меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
          главная
        </Link>
        <a href="#about" className={styles.navLink} onClick={(e) => scrollToSection(e, 'about')}>
          о нас
        </a>
        <a href="#projects" className={styles.navLink} onClick={(e) => scrollToSection(e, 'projects')}>
          проекты
        </a>
        <Link href="/houses" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
          производство
        </Link>
        <Link href="/contacts" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
          контакты
        </Link>
      </nav>
    </header>
  );
} 