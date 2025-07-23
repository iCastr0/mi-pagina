import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSevmEnL39ImEGqyDqNZxsFmqblc_WxJpzLh5pq9ZPiV9fQevA/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cta}
      >
        Solicitar diagnóstico gratuito
      </a>
    </section>
  );
} 