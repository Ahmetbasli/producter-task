import React from "react";

import styles from "./index.module.scss";
import ProducterLogo from "src/assets/icons/producterLogo.svg";
import SearchIcon from "src/assets/icons/search.svg";
import ControlsIcon from "src/assets/icons/controls.svg";
import FilterIcon from "src/assets/icons/filter.svg";
import AddIcon from "src/assets/icons/add.svg";
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <ProducterLogo width="100%" height="100%" />
      </div>
      <div className={styles.features}>
        <div className={styles.left}>
          <div className={styles.search}>
            <SearchIcon />
            <input placeholder="Search" />
          </div>
          <div className={styles.controls}>
            <ControlsIcon />
          </div>
          <div className={styles.filter}>
            <FilterIcon />
          </div>
        </div>
        <div className={styles.right}>
          <AddIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
