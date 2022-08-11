import React from "react";
import Icon from "src/common/Icon";
import styles from "./index.module.scss";

const SubHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <button className={styles.arrow}>
          <Icon name="arrow-left" />
        </button>
        <button className={styles.code}>
          <Icon name="spr" />
          <span>SPR-06</span>
        </button>
        <button className={styles.code}>
          <Icon name="people" />
          <span>TEAM-10</span>
        </button>
        <div className={styles.last}>
          <span>New Sprint Name</span>
          <button className={styles.calendar}>
            <Icon name="calendar" />
          </button>
          <button className={styles.peopleGray}>
            <Icon name="people-gray" />
          </button>
        </div>
        <button className={styles.button}>Complete Sprint</button>
      </div>
      <div className={styles.right}>
        <button className={styles.dashboardGray}>
          <Icon name="dashboard-gray" />
        </button>
        <button>
          <Icon name="white-rects" />
        </button>
      </div>
    </div>
  );
};

export default SubHeader;
