export const Portfolio = () => {
  return (
    <div className="flex md:flex-row flex-col md:justify-around items-center pt-8 pb-10 gap-6 ">
      <div>
        <a
          href="https://minesweeper-beryl.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className=" w-[300px] h-[250px]"
        >
          <img
            alt="Minesweeper"
            className=" w-full h-full mx-auto rounded-2xl  object-cover object-top"
            src="./images/minesweeper.jpg"
          />
        </a>
        <p className="pl-4 mt-3 text-lg ">Minesweeper</p>
      </div>
      <div>
        <a
          href="https://api-slider-adnl1r91u-whatislove12.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className=" w-[300px] h-[250px]"
        >
          <img
            alt="Api-slider"
            className=" w-full h-full mx-auto rounded-2xl  object-cover object-top"
            src="./images/api-slider.jpg"
          />
        </a>
        <p className="pl-4 mt-3 text-lg">Api slider</p>
      </div>
    </div>
  );
};
