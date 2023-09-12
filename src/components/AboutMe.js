import styles from "../styles/About.module.scss";

export const AboutMe = () => {
  return (
    <div>
      <div className="text-lg font-mono">
        A la hora de trabajar soy una persona responsable, perseverante y con
        altos estándares. Me enfoco en la lógica para resolver problemas de
        forma eficaz. Soy flexible y adaptable, capaz de enfrentar desafíos y
        aprender rápidamente. Me intereso por las nuevas tecnologías y el
        crecimiento profesional me motiva a ampliar mis conocimientos y
        habilidades. Me gusta contribuir al éxito de los proyectos en los que
        participo.
      </div>
      <div className=" font-mono">
        <h3 className="text-2xl font-Merriweather my-5">Aptitudes</h3>
        <div className="flex">
          <ul className={styles.column}>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Vue.js</li>
            <li>Tailwind</li>
            <li>BootStrap</li>
            <li>GitHub</li>
          </ul>
          <ul className={styles.column}>
            <li>HTML5, CSS3</li>
            <li>Responsive</li>
            <li>MariaDB</li>
            <li>MySQL</li>
            <li>Figma</li>
            <li>Linux/Windows</li>
          </ul>
        </div>
        <h3 className="text-2xl font-Merriweather my-5">Idiomas</h3>
        <div className={styles.lenguages}>
        <div className="flex justify-between">
          <p>Español</p>
          <p>C2</p>
        </div>
          <div className="bg-main-containers rounded-lg w-full h-3 flex items-center mb-6">
            <div className="bg-[#0080ff] rounded-lg w-[83%] h-2"></div>
            <p className=" -ml-6 -mt-8">C1</p>
          </div>

          <div className="flex justify-between">
          <p>Inglés</p>
          <p>C2</p>
        </div>
          <div className="bg-main-containers rounded-lg w-full h-3 flex items-center mb-6">
            <div className="bg-[#0080ff] rounded-lg w-[50%] h-2"></div>
            <p className=" -ml-6 -mt-8">B1</p>
          </div>

          <div className="flex justify-between">
          <p>Ruso</p>
          <p>C2</p>
        </div>
          <div className="bg-main-containers rounded-lg w-full h-3 flex items-center ">
            <div className="bg-[#0080ff] rounded-lg w-[100%] h-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
