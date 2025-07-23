import styles from './SobreNosotros.module.css';
import Image from 'next/image';

export default function SobreNosotros() {
  return (
    <section className={styles.sobre}>
      <h2 className={styles.titulo}>Sobre nosotros</h2>
      <div className={styles.contenido}>
        <div className={styles.texto}>
          <h3>Nicolás — Analista y Consultor</h3>
          <p>
            Especialista en eficiencia operativa para clínicas y centros médicos privados. Mi enfoque combina experiencia en salud y gestión, ayudando a equipos a tomar mejores decisiones con datos claros y accionables.
          </p>
          <ul className={styles.lista}>
            <li>Enfoque en salud + eficiencia operativa</li>
            <li>Herramientas: R, Power BI, Excel</li>
          </ul>
        </div>
        <div className={styles.foto}>
          {/* Si tienes una foto profesional, reemplaza 'foto.jpg' por el nombre de tu archivo en /public */}
          {/* <Image src="/foto.jpg" alt="Foto profesional de Nicolás" width={140} height={140} className={styles.img} /> */}
        </div>
      </div>
    </section>
  );
} 