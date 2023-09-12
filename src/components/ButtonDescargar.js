import { IconClip } from "./icons/IconClip";

export const ButtonDescargar = () => {

    const descargar = () => {
        const link = document.createElement("a");
        link.href = "/files/CV-VladislavPodymskiy.pdf";
        link.download = "CV-VladislavPodymskiy";
    
        link.click();
    }
    return (
        <div>
            <button onClick={descargar} className=" flex gap-3 items-center text-2xl hover:text-hover-yellow">
                Descargar CV
                <IconClip iconStyle="w-5 h-5" />
            </button>
        </div> 
    )
}