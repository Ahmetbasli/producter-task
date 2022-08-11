import React, { FC } from "react";
import Icon from "src/common/Icon/index";
import styles from "./index.module.scss";
interface ButtonProps {
  text: string;
  icon?: string;
  iconMarginLeft?: string;
  isActive?: boolean;
}

const Button: FC<ButtonProps> = ({
  icon,
  text,
  isActive = false,
  iconMarginLeft,
}) => {
  return (
    <button
      className={`${styles.wrapper} ${isActive ? styles.wrapperActive : ""} `}
    >
      {icon && <Icon name={icon} />}
      <span style={{ marginLeft: `${iconMarginLeft}` }}>{text}</span>
    </button>
  );
};

export default Button;
