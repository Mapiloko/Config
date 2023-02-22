import React, { FC } from "react";

interface ButtonProps {
  handleClick: any; // Not adding nullable cause click event is required
  title: string;
  disabled?: boolean; // Only add nullable to non required props
  className? : string;
}

const Button: FC<ButtonProps> = ({ handleClick, title, disabled, className }) => {
  return (
    <button onClick={handleClick} disabled={disabled}  className={`btn ${className}`} >
      {title}
    </button>
  );
};

Button.defaultProps = {
  handleClick: () => { console.log("empty") },
  title: "Save",
  disabled: false,
};

export default Button;
