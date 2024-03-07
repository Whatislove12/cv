import { IconClip } from "./icons/IconClip";
import { useTranslation } from 'react-i18next';


export const ButtonDescargar = () => {
    const  {t} = useTranslation();

    const descargar = () => {
        const link = document.createElement("a");
        link.href = "/files/CV-VladislavPodymskiy.pdf";
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