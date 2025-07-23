import styles from './Testimonio.module.css';

export default function Testimonio() {
  return (
    <section className={styles.testimonio}>
      <div className={styles.citaBox}>
        <span className={styles.comillas}>&ldquo;</span>
        <p className={styles.cita}>
          Gracias al análisis entregado, entendimos qué agenda médica estaba generando más cancelaciones.
        </p>
        <span className={styles.comillas}>&rdquo;</span>
        <div className={styles.autor}>– Centro Médico Aequilibrium</div>
      </div>
    </section>
  );
} 