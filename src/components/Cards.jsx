import { Buttons } from "./Buttons";
import { Toggle } from "rsuite";
import "rsuite/Toggle/styles/index.css";

export const Cards = ({
  logo,
  name,
  description,
  isActive,
  onToggle,
  onRemove,
}) => {
  return (
    <div className="flex flex-col justify-between h-full bg-Neutral-0 rounded-lg p-4 shadow-sm dark:bg-neutral-800">
      <div className="flex gap-4 items-start mb-9">
        <img src={logo} alt="logo" />
        <div>
          <h2 className="text-[1.25rem] font-bold text-Neutral-900 mb-2 dark:text-Neutral-0">
            {name}
          </h2>
          <p className="text-neutral-600 text-[.9375rem] dark:text-Neutral-300">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <Buttons variant="small" onClick={() => onRemove(name)}>
          Remove
        </Buttons>
        <Toggle
          checked={isActive}
          color="red"
          onChange={() => onToggle(name)}
        />
      </div>
    </div>
  );
};
