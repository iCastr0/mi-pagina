import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctaSection}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSevmEnL39ImEGqyDqNZxsFmqblc_WxJpzLh5pq9ZPiV9fQevA/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          Solicitar diagnóstico gratuito
        </a>
      </div>
      <div className={styles.contacto}>
        <div>✉️ contacto@insighturesolutions.com</div>
        <div>📞 +56 9 1234 5678</div>
      </div>
      <div className={styles.legal}>
        All rights reserved.
      </div>
    </footer>
  );
} 