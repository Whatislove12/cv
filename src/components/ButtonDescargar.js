import { IconClip } from "./icons/IconClip";
import { useTranslation } from 'react-i18next';


export const ButtonDescargar = () => {
    const { t, i18n } = useTranslation();

    const descargar = () => {
        const link = document.createElement("a");

        // Получение текущего языка
        const currentLanguage = i18n.language;

        // Определение ссылки в зависимости от языка
        if (currentLanguage === "es") {
            link.href = "/files/cv-vladislav-podymskiy-es.pdf";
        } else if (currentLanguage === "en") {
            link.href = "/files/cv-vladislav-podymskiy-en.pdf";
        } else {
            // Значение по умолчанию (например, для других языков)
            link.href = "/files/CV-VladislavPodymskiy.pdf";
        }

        link.download = "CV-VladislavPodymskiy";
        link.click();
    }
    return (
        <div>
            <button onClick={descargar} className=" flex gap-3 items-center text-2xl hover:text-hover-yellow">
                {t("download")}
                <IconClip iconStyle="w-5 h-5" />
            </button>
        </div> 
    )
}