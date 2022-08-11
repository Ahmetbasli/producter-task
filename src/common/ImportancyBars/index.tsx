import React, { FC } from "react";
import styles from "./index.module.scss";

const ImportancyBarrs: FC<{ importancy: "lower" | "middle" | "higher" }> = ({
  importancy,
}) => {
  const activeBarNumber = {
    lower: 1,
    middle: 2,
    higher: 3,
  };
  const pickColor = () => {
    if (activeBarNumber[importancy] === 1) {
      return styles.green;
    } else if (activeBarNumber[importancy] === 2) {
      return styles.yellow;
    } else {
      return styles.red;
    }
  };

  return (
    <div className={styles.wrapper}>
      {["6px", "9px", " 12px"].map((height, index) => (
        <div
          key={height}
          style={{ height }}
          className={`${styles.bar} ${
            activeBarNumber[importancy] <= index ? "" : pickColor()
          }`}
        />
      ))}
    </div>
  );
};

export default ImportancyBarrs;
