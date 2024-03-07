import styles from "../styles/About.module.scss";
import { useTranslation } from 'react-i18next';


export const AboutMe = () => {
  const {t} = useTranslation();
  return (
    <div>
      <div className="text-lg font-mono">
        {t("text_about")}
      </div>
      <div className=" font-mono">
        <h3 className="text-2xl font-Merriweather my-5">{t("aptitudes")}</h3>
        <div className="flex flex-col md:flex-row">
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
        <h3 className="text-2xl font-Merriweather my-5">{t("idiomas")}</h3>
        <div className={styles.lenguages}>
          <div className="flex justify-between">
            <p>{t("espanol")}</p>
            <p>C2</p>
          </div>
          <div className="bg-main-containers rounded-lg w-full h-3 flex items-center mb-6">
            <div className="bg-[#0080ff] rounded-lg w-[83%] h-2"></div>
            <p className=" -ml-6 -mt-8">C1</p>
          </div>

          <div className="flex justify-between">
            <p>{t("ingles")}</p>
            <p>C2</p>
          </div>
          <div className="bg-main-containers rounded-lg w-full h-3 flex items-center mb-6">
            <div className="bg-[#0080ff] rounded-lg w-[50%] h-2"></div>
            <p className=" -ml-6 -mt-8">B1</p>
          </div>

          <div className="flex justify-between">
            <p>{t("ruso")}</p>
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
