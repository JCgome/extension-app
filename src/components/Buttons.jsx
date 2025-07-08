export const Buttons = ({
  children,
  type = "button",
  onClick,
  className = "",
  variant = "default",
}) => {
  const variants = {
    default: "text-[1.25rem] px-5 py-2",
    small: "text-base px-4 py-1",
    large: "text-xl px-6 py-3",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`border border-Neutral-300 rounded-full hover:bg-Neutral-600 cursor-pointer hover:text-Neutral-0 dark:text-Neutral-0 dark:bg-Neutral-800 dark:hover:bg-Red-500 ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
