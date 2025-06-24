'use client';

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.treeBackground}>
        <Image 
          src="/img/Bent oval.png"
          alt="Декоративное изображение дерева"
          fill
          style={{ objectFit: 'contain', pointerEvents: 'none', zIndex: 0 }}
          priority
        />
      </div>
      <main 
        id="main"
        className={styles.main}
        style={{
          backgroundImage: `url('/img/img-main.png')`
        }}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Агентство<br />
            Медвижимости
          </h1>
          <button 
            className={styles.button}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Посмотреть проекты →
          </button>
        </div>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <Image 
              src="/content/facebook.svg" 
              alt="Facebook" 
              width={20} 
              height={20}
            />
          </a>
          <a href="#" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <Image 
              src="/content/twitter.svg" 
              alt="Twitter" 
              width={20} 
              height={20}
            />
          </a>
          <a href="#" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <Image 
              src="/content/youtube.svg" 
              alt="YouTube" 
              width={20} 
              height={20}
            />
          </a>
          <a href="#" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <Image 
              src="/content/instagram.svg" 
              alt="Instagram" 
              width={20} 
              height={20}
            />
          </a>
          <a href="#" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <Image 
              src="/content/linkedin.svg" 
              alt="LinkedIn" 
              width={20} 
              height={20}
            />
          </a>
        </div>
      </main>
      <section id="about" className={styles.quoteSection}>
        <div className={styles.quoteContainer}>
          <p className={styles.quote}>
            Dont limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.
          </p>
          <p className={styles.author}>— Mary Kay Ash</p>
        </div>
      </section>
      <section id="projects" className={styles.projectsSection}>
        <h2 className={styles.projectsTitle}>Последние проекты</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <Image 
              src="/img/house-1.png"
              alt="Деревянный дом на берегу озера в окружении леса"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.projectOverlay}>
              <h3 className={styles.projectTitle}>Дома</h3>
            </div>
          </div>
          <div className={`${styles.projectCard} ${styles.wide}`}>
            <h3 className={styles.projectTitle_card}>Тула</h3>
            <p className={styles.projectDescription_card}>
              Современный коттеджный поселок из экологичных деревянных домов. Каждое здание сочетает традиционное русское зодчество с инновационными энергосберегающими технологиями. Поселок расположен в живописной лесной зоне, всего в 15 минутах от центра города. Это идеальное решение для тех, кто ценит комфорт, природу и надежность.
            </p>
            <Link 
              href="/houses" 
              className={styles.projectLink}
              aria-label="Перейти к странице домов"
            >
              Увидеть проект →
            </Link>
          </div>
          <div className={styles.projectCard}>
            <Image 
              src="/img/furniture.png"
              alt="Интерьер спальни с дизайнерской мебелью"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.projectOverlay}>
              <h3 className={styles.projectTitle}>Мебель</h3>
            </div>
          </div>
          <div className={styles.projectCard}>
            <Image 
              src="/img/cottage.jpg"
              alt="Современный коттедж в окружении соснового леса"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.projectOverlay}>
              <h3 className={styles.projectTitle}>Коттеджи</h3>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.testimonials}>
        <div className={styles.testimonialCard}>
          <div className={styles.testimonialHeader}>
            <div className={styles.testimonialAvatar}>
              <Image
                src="/avatar/avatar-1.jpg"
                alt="Фото Паши"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className={styles.testimonialName}>Паша</h3>
          </div>
          <p className={styles.testimonialText}>
            Обратился за домом под ключ – остался доволен на 100%. Ученик все показания, кроме собственных, а сам дом выглядит даже лучше, чем на эскизах. Теперь рекомендую знакомым только ваше агентство
          </p>
          <span className={styles.quoteIcon}>&rdquo;</span>
        </div>
        <div className={styles.testimonialCard}>
          <div className={styles.testimonialHeader}>
            <div className={styles.testimonialAvatar}>
              <Image
                src="/avatar/avatar-2.jpg"
                alt="Фото Маши"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className={styles.testimonialName}>Маша</h3>
          </div>
          <p className={styles.testimonialText}>
            Мечтала о деревянном доме, и агентство помогло найти идеальный вариант и участок у леса, качественные отделка и зонирование неверятно! Теперь у меня есть свой дом с профессионалами и вежливым обслуживанием!
          </p>
          <span className={styles.quoteIcon}>&rdquo;</span>
        </div>
      </section>

      <section className={styles.missionStatement}>
        <h2 className={styles.missionTitle}>
          Строим не просто дома - создаём пространство для жизни
        </h2>
        <p className={styles.missionText}>
          На протяжении более 15 лет мы воплощаем в жизнь мечты о собственном деревянном доме, сочетая многовековые традиции русского зодчества с современными технологиями строительства. Наша компания – это команда энтузиастов, влюбленных в свое дело: архитекторов, инженеров и мастеров-плотников, для которых качество – не просто стандарт, а профессиональный философия.
        </p>
      </section>

      <section className={styles.clientsSection}>
        <div className={styles.clientsContainer}>
          <div className={styles.clientsContent}>
            <h2 className={styles.clientsTitle}>КЛИЕНТЫ</h2>
            <p className={styles.clientsDescription}>
              Успешная работа компании подтверждается не только сданными проектами, но и доверием наших клиентов, среди которых крупные девелоперские компании.
            </p>
            <div className={styles.clientsGrid}>
              <Image src="/content/Layer 3-2.svg" alt="Client Logo" width={120} height={40} className={styles.clientLogo} />
              <Image src="/content/Layer 3-1.svg" alt="Client Logo" width={120} height={40} className={styles.clientLogo} />
              <Image src="/content/Group-1.svg" alt="Client Logo" width={120} height={40} className={styles.clientLogo} />
              <Image src="/content/Group 190.svg" alt="Client Logo" width={120} height={40} className={styles.clientLogo} />
              <Image src="/content/Layer 3.svg" alt="Client Logo" width={120} height={40} className={styles.clientLogo} />
              <Image src="/content/Layer 2.svg" alt="Client Logo" width={120} height={40} className={styles.clientLogo} />
              <Image src="/content/Group 55.svg" alt="Client Logo" width={120} height={40} className={styles.clientLogo} />
              <Image src="/content/Group.svg" alt="Client Logo" width={120} height={40} className={styles.clientLogo} />
            </div>
          </div>
          <div className={styles.forestImage}>
            <Image 
              src="/img/мем2 1.png" 
              alt="Forest landscape" 
              width={600} 
              height={400} 
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
