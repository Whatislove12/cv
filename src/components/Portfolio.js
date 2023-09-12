export const Portfolio = () => {
  return (
    <div className="flex justify-around pt-8 pb-10 gap-6">
      <a
        href="https://minesweeper-beryl.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-[300px] h-[250px]"
      >
        <img
          alt="Minesweeper"
          className=" w-full h-full mx-auto rounded-2xl  object-cover object-top"
          src="./images/minesweeper.png"
        />
        <p className="pl-4 mt-3 text-lg ">Minesweeper</p>
      </a>
      <a
        href="https://api-slider-adnl1r91u-whatislove12.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-[300px] h-[250px]"
      >
        <img
          alt="Api-slider"
          className=" w-full h-full mx-auto rounded-2xl  object-cover object-top"
          src="./images/slider.png"
        />
        <p className="pl-4 mt-3 text-lg">Api slider</p>
      </a>
    </div>
  );
};
