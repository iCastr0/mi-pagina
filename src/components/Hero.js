import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.logoContainer}>
        <Image src="/lgo.png" alt="Insighture Solutions Logo" width={940} height={788} style={{height: 'auto', width: 'auto', maxWidth: '420px', maxHeight: '180px'}} priority />
      </div>
      <h1 className={styles.title}>
        Mejora la gestión de <span className={styles.highlight}>tu clinica</span>
      </h1>
      <p className={styles.subtitle}>
        Análisis operativos personalizados para clínicas pequeñas y centros médicos.
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSevmEnL39ImEGqyDqNZxsFmqblc_WxJpzLh5pq9ZPiV9fQevA/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cta}
      >
        Solicita tu diagnóstico gratuito
      </a>
    </section>
  );
} 