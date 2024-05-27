import { CompleteInformation } from "../CompleteInformation";
import { ShortInformation } from "./ShortInformation";

export const MainContainers = () => {
  return (
    <div className="  flex flex-col gap-8 lg:pt-40 pt-24 pb-16 mx-auto w-full lg:flex-row px-8">
      <ShortInformation />
      <CompleteInformation />
    </div>
  );
};
