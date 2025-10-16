interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  onBlur?: () => void;
  size: "sm" | "md" | "lg" | "xl" | "2xl";
  type?: "button" | "reset" | "submit";
  variant: "primary" | "secondary";
}
export const Button = ({
  children,
  type,
  onClick,
  className = "",
  onBlur,
}: ButtonProps) => {
  //Default style

  //Conditionally apply default styling if className is not provided
  const buttonClassName = className
    ? `${className} ${"defaultStyle"}`
    : "defaultStyle";

  const variantClasses: Record<ButtonProps["variant"], string> = {
    primary: "text-white shadow-md hover:opacity-90 transition-all",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClassName}
      onBlur={onBlur}
    >
      {children}
    </button>
  );
};
