import React, { FC } from "react";
import Icon from "src/common/Icon/index";
import styles from "./index.module.scss";
interface ButtonProps {
  icon: string;
  text: string;
  isActive?: boolean;
}

const Button: FC<ButtonProps> = ({ icon, text, isActive = false }) => {
  return (
    <button
      className={`${styles.wrapper} ${isActive ? styles.wrapperActive : ""} `}
    >
      <Icon name={icon} />
      <span>{text}</span>
    </button>
  );
};

export default Button;
