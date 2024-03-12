import { CompleteInformation } from "../CompleteInformation";
import { ShortInformation } from "./ShortInformation";

export const MainContainers = () => {
  return (
    <div className="  bg-main-blue flex flex-col gap-8 pt-40 pb-16 mx-auto w-full lg:flex-row px-8">
      <ShortInformation />
      <CompleteInformation />
    </div>
  );
};
