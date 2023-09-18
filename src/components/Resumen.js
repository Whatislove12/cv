/* import styles from "../styles/Resumen.module.scss";
 */import { IconEducation } from "./icons/IconEducation";
import { IconExperience } from "./icons/IconExperience";

export const Resumen = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className=" md:w-1/2 px-4 w-full">
        <h3 className="text-2xl font-Merriweather my-5 flex gap-3 items-center">
          <IconEducation iconStyle="w-9 h-9  fill-[#0D86FF]" />
          Educación
        </h3>
        <div className="w-full flex gap-3 items-center relative">
          <div className="absolute -left-3  w-6 h-6 bg-gradient-to-t from-[#0d86ff1b] to-[#0d86ff5f] inline-block  rounded-[50%]"></div>
          <h4 className="text-lg font-Merriweather my-5 first-letter:text-[#d9dfda] z-10">Cursos</h4>
        </div>
          <div>
            <ul className=" list-disc ml-6 gap-4 mb-6">
              <li className="mb-4">
                2022 oct - 2023 may. CIP FP Mislata (Valencia)
                <p>FPGM Desarrollo de aplicaciones con tecnología web</p>
              </li>
              <li>
                2022 abr - 2022 jun. The Rolling Scopes (a distancia)
                <p>FRONT-END STAGE, RS School</p>
              </li>
            </ul>
          </div>
          <div className="w-full flex gap-3 items-center relative">
          <div className="absolute -left-3  w-6 h-6 bg-gradient-to-t from-[#0d86ff1b] to-[#0d86ff5f] inline-block  rounded-[50%]"></div>
          <h4 className="text-lg font-Merriweather my-5 first-letter:text-[#d9dfda] z-10">Formación superior</h4>
        </div>
        <div>
          <ul className=" list-disc ml-6">
            <li>
              2015 ago - 2019 jun. University of Power Engineering and
              Telecommunications Almaty, Kazajistán
              <p>Grado en Ingeniería de energía térmica</p>
            </li>
          </ul>
        </div>
      </div>

      <div className=" md:w-1/2 px-4 w-full">
        <h3 className=" text-2xl font-Merriweather my-5 flex gap-3 items-center">
          <IconExperience iconStyle="w-8 h-8  fill-[#0D86FF]" /> Experiencia
        </h3>
        <div className="w-full flex gap-3 items-center relative">
          <div className="absolute -left-3  w-6 h-6 bg-gradient-to-t from-[#0d86ff1b] to-[#0d86ff5f] inline-block  rounded-[50%]"></div>
          <h4 className="text-lg font-Merriweather my-5 first-letter:text-[#d9dfda] z-10">Grifenix</h4>
          <p>(2022 nov - 2022 dic)</p>
        </div>
        <div>
        <p>He estado desarrollando interfaces de entrada de páginas web utilizando
Vue.js. Estuve enfocado en el desarrollo de los componentes de formularios
con registro de usuarios con validación de datos por Vue.js y Vue Validate.</p>
        </div>

        <div className="w-full flex gap-3 items-center relative">
          <div className="absolute -left-3  w-6 h-6 bg-gradient-to-t from-[#0d86ff1b] to-[#0d86ff5f] inline-block  rounded-[50%]"></div>
          <h4 className="text-lg font-Merriweather my-5 first-letter:text-[#d9dfda] z-10">Sagajean</h4>
          <p>(2023 abr - 2023 may)</p>
        </div>
        <div>
        <p>Durante mis prácticas, he estado trabajando con el diseño web atractivo, la
optimización SEO, accesibilidad, desarrollo de funcionalidades, integración
de complementos y optimización de velocidades.</p>
        </div>

      </div>
    </div>
  );
};
