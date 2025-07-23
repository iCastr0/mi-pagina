import styles from './Beneficios.module.css';

export default function Beneficios() {
  return (
    <section className={styles.beneficios}>
      <h2 className={styles.titulo}>¿Qué solucionamos?</h2>
      <div className={styles.tarjetas}>
        <div className={styles.tarjeta}>
          <div className={styles.icono}>
            {/* Icono SVG: Calendario con check */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="10" width="30" height="25" rx="4" fill="#fff" stroke="#b22234" strokeWidth="2"/>
              <rect x="5" y="10" width="30" height="7" fill="#b22234"/>
              <path d="M15 25l4 4 6-6" stroke="#1b263b" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Reducción de inasistencias</h3>
          <p>Disminuye la cantidad de pacientes que no asisten a sus citas.</p>
        </div>
        <div className={styles.tarjeta}>
          <div className={styles.icono}>
            {/* Icono SVG: Reloj */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="16" fill="#fff" stroke="#b22234" strokeWidth="2"/>
              <path d="M20 12v8l6 4" stroke="#1b263b" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3>Optimización de agendas</h3>
          <p>Mejora la ocupación y reduce los tiempos muertos en la clínica.</p>
        </div>
        <div className={styles.tarjeta}>
          <div className={styles.icono}>
            {/* Icono SVG: Gráfica de barras */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="25" width="4" height="7" fill="#b22234"/>
              <rect x="18" y="18" width="4" height="14" fill="#b22234"/>
              <rect x="28" y="12" width="4" height="20" fill="#b22234"/>
              <rect x="5" y="5" width="30" height="30" rx="4" stroke="#b22234" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <h3>Informes claros</h3>
          <p>Reportes visuales para decisiones clínicas y administrativas.</p>
        </div>
      </div>
    </section>
  );
} 