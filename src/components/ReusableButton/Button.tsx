import { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "primary" | "secondary" | "tertiary";
}
const Button = ({ children, variant, ...rest }: Props) => {
  return (
    <button {...rest} className={variant}>
      {children}
    </button>
  );
};

export default Button;
