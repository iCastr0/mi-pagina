import styles from './Proceso.module.css';

export default function Proceso() {
  return (
    <section className={styles.proceso}>
      <h2 className={styles.titulo}>¿Cómo trabajamos?</h2>
      <div className={styles.pasos}>
        <div className={styles.paso}>
          <div className={styles.icono}>
            {/* Icono SVG: Lupa sobre documento */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="8" width="18" height="24" rx="3" fill="#fff" stroke="#b22234" strokeWidth="2"/>
              <circle cx="27" cy="29" r="6" fill="#fff" stroke="#b22234" strokeWidth="2"/>
              <path d="M30.5 32.5L34 36" stroke="#1b263b" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3>Diagnóstico inicial gratuito</h3>
          <p>Recopilamos datos y analizamos los cuellos de botella.</p>
        </div>
        <div className={styles.paso}>
          <div className={styles.icono}>
            {/* Icono SVG: Pantalla con gráfico */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="10" width="28" height="18" rx="3" fill="#fff" stroke="#b22234" strokeWidth="2"/>
              <rect x="10" y="22" width="3" height="4" fill="#b22234"/>
              <rect x="17" y="18" width="3" height="8" fill="#b22234"/>
              <rect x="24" y="14" width="3" height="12" fill="#b22234"/>
              <rect x="31" y="20" width="3" height="6" fill="#b22234"/>
            </svg>
          </div>
          <h3>Diseño de dashboard y recomendaciones</h3>
          <p>Visualizamos tus KPIs clave para una mejor toma de decisiones.</p>
        </div>
        <div className={styles.paso}>
          <div className={styles.icono}>
            {/* Icono SVG: Mano con engranaje */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 30c0-2 2-4 4-4h7c2 0 4 2 4 4v2a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2v-2z" fill="#fff" stroke="#b22234" strokeWidth="2"/>
              <circle cx="28" cy="16" r="4" fill="#fff" stroke="#b22234" strokeWidth="2"/>
              <path d="M28 12v2M28 20v2M24 16h2M32 16h2M25.6 13.6l1.4 1.4M30 18.6l1.4 1.4M25.6 18.4l1.4-1.4M30 13.4l1.4-1.4" stroke="#1b263b" strokeWidth="1.2"/>
            </svg>
          </div>
          <h3>Acompañamiento opcional</h3>
          <p>Reuniones mensuales, mejoras continuas y nuevos indicadores.</p>
        </div>
      </div>
    </section>
  );
} 