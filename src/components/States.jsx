import { Buttons } from "./Buttons";

export const States = ({ setFilter }) => {
  return (
    <div className="mb-6 md:flex md:items-center md:justify-between">
      <h2 className="dark:text-Neutral-0 text-center text-[2.125rem] font-bold mb-6 md:mb-0">
        Extensions List
      </h2>
      <div className="flex justify-between md:gap-3">
        <Buttons onClick={() => setFilter("All")}>All</Buttons>
        <Buttons onClick={() => setFilter("Active")}>Active</Buttons>
        <Buttons onClick={() => setFilter("Inactive")}>Inactive</Buttons>
      </div>
    </div>
  );
};
