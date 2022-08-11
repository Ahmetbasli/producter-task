import React from "react";
import Icon from "src/common/Icon";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Icon name="producterLogo" />
      </div>
      <div className={styles.features}>
        <div className={styles.left}>
          <div className={styles.search}>
            <Icon name="search" />
            <input placeholder="Search" />
          </div>
          <div className={styles.controls}>
            <Icon name="controls" />
          </div>
          <div className={styles.filter}>
            <Icon name="filter" />
          </div>
        </div>
        <div className={styles.right}>
          <Icon name="add" />
        </div>
      </div>
    </div>
  );
};

export default Header;
