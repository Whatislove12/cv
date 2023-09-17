import { ButtonDescargar } from "./ButtonDescargar";
import { IconGithub } from "./icons/IconGithub";
import { IconInstagram } from "./icons/IconInstagram";
import { IconLinkedin } from "./icons/IconLinkedin";
import { IconMail } from "./icons/IconMail";

export const ShortInformation = () => {
  return (
    <div className=" lg:w-[29%] flex flex-col  gap-6 justify-around lg:flex-col md:flex-row w-full h-full bg-main-containers rounded-3xl p-8">
      <div>
        <img
          src="/images/me2.jpeg"
          alt="My avatar"
          className=" object-cover h-52  w-52  m-auto rounded-3xl shadow-2xl"
        />
      </div>
      <div className="flex flex-col gap-3 items-center pt-5 text-center">
        <h3 className="text-xl font-serif ">
          Vladislav
          <span className=" font-semibold"> Podymskiy</span>
        </h3>
        <div className="text-lg text-gray-300 bg-[#272333] p-1 pr-4 pl-4 rounded-lg">Frontend Developer</div>
        <div className="flex gap-3 mt-4 mb-6">
          <IconMail iconStyle="w-6 h-5 stroke-2 hover:text-hover-yellow" />
          <IconLinkedin iconStyle="w-4 h-4 fill-white stroke-1  hover:fill-hover-yellow" />
          <IconGithub iconStyle="w-6 h-5 stroke-2  hover:fill-hover-yellow" />
          <IconInstagram iconStyle="w-5 h-5 stroke-1 fill-white hover:fill-hover-yellow" />
        </div>
          <ButtonDescargar />
      </div>
    </div>
  );
};
