import React, { FC } from "react";
import styles from "./index.module.scss";
interface ButtonProps {
  text: string;
  Icon?: string;
  iconMarginLeft?: string;
  isActive?: boolean;
}

const Button: FC<ButtonProps> = ({
  Icon,
  text,
  isActive = false,
  iconMarginLeft,
}) => {
  return (
    <button
      className={`${styles.wrapper} ${isActive ? styles.wrapperActive : ""} `}
    >
      {Icon && <Icon />}
      <span style={{ marginLeft: `${iconMarginLeft}` }}>{text}</span>
    </button>
  );
};

export default Button;
