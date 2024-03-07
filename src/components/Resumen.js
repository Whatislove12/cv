/* import styles from "../styles/Resumen.module.scss";
 */import { IconEducation } from "./icons/IconEducation";
import { IconExperience } from "./icons/IconExperience";
import { useTranslation } from 'react-i18next';


export const Resumen = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row">
      <div className=" md:w-1/2 px-4 w-full">
        <h3 className="text-2xl font-Merriweather my-5 flex gap-3 items-center">
          <IconEducation iconStyle="w-9 h-9  fill-[#0D86FF]" />{t("educacion")}
        </h3>
        <div className="w-full flex gap-3 items-center relative">
          <div className="absolute -left-3  w-6 h-6 bg-gradient-to-t from-[#0d86ff1b] to-[#0d86ff5f] inline-block  rounded-[50%]"></div>
          <h4 className="text-lg font-Merriweather my-5 first-letter:text-[#d9dfda] z-10">{t("cursos")}</h4>
        </div>
        <div>
          <ul className=" list-disc ml-6 gap-4 mb-6">
            <li className="mb-4">
              {t("fecha_fp")}
              <p className="pt-2">{t("texto_fp")}</p>
            </li>
            <li>
              {t("fecha_rs")}
              <p className="pt-2">{t("texto_rs")}</p>
            </li>
          </ul>
        </div>
        <div className="w-full flex gap-3 items-center relative mb-5">
          <div className="absolute -left-3  w-6 h-6 bg-gradient-to-t from-[#0d86ff1b] to-[#0d86ff5f] inline-block  rounded-[50%]"></div>
          <h4 className="text-lg font-Merriweather first-letter:text-[#d9dfda] z-10">{t("form_super")}</h4>
        </div>
        <div>
          <ul className=" list-disc ml-6">
            <li>
              {t("fecha_aues")}
              <p className="pt-2">{t("texto_aues")}</p>
            </li>
          </ul>
        </div>
      </div>

      <div className=" md:w-1/2 px-4 w-full">
        <h3 className=" text-2xl font-Merriweather my-8 flex gap-3 items-center">
          <IconExperience iconStyle="w-8 h-8  fill-[#0D86FF]" /> {t("experiencia")}
        </h3>
        <div className="w-full flex-col gap-3 items-center relative">
          <div className="absolute -left-3  w-6 h-6 bg-gradient-to-t from-[#0d86ff1b] to-[#0d86ff5f] inline-block  rounded-[50%]"></div>
          <h4 className="text-lg font-Merriweather my-5 first-letter:text-[#d9dfda] z-10">Grifenix</h4>
          <p>{t("fecha_grif")}</p>
        </div>
        <div>
          <p className="pt-2">{t("texto_grif")}</p>
        </div>

        <div className="w-full flex-col gap-3 items-center relative">
          <div className="absolute -left-3  w-6 h-6 bg-gradient-to-t from-[#0d86ff1b] to-[#0d86ff5f] inline-block  rounded-[50%]"></div>
          <h4 className="text-lg font-Merriweather my-5 first-letter:text-[#d9dfda] z-10">Sagajean</h4>
          <p>{t("fecha_sag")}</p>
        </div>
        <div>
          <p className="pt-2">{t("texto_sag")}</p>
        </div>

      </div>
    </div>
  );
};
