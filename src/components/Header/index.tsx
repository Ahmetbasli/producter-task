import React from "react";
import styles from "./index.module.scss";
import ProducterLogo from "src/assets/icons/producterLogo.svg";
import SearchIcon from "src/assets/icons/search.svg";
import ControlsIcon from "src/assets/icons/controls.svg";
import FilterIcon from "src/assets/icons/filter.svg";
import AddIcon from "src/assets/icons/add.svg";
import TaskAddModal from "./TaskAddModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleClickOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
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
            <button className={styles.controls}>
              <ControlsIcon />
            </button>
            <button className={styles.filter}>
              <FilterIcon />
            </button>
          </div>
          <button onClick={handleClickOpen} className={styles.right}>
            <AddIcon />
          </button>
        </div>
      </div>
      <TaskAddModal open={isModalOpen} setOpen={setIsModalOpen} />
    </>
  );
};

export default Header;
