import React from "react";
import Icon from "src/common/Icon";
import styles from "./index.module.scss";
import ArrowLeftIcon from "src/assets/icons/arrow-left.svg";
import SprIcon from "src/assets/icons/spr.svg";
import PeopleIcon from "src/assets/icons/people.svg";
import CalendarIcon from "src/assets/icons/calendar.svg";
import PeopleGrayIcon from "src/assets/icons/people-gray.svg";
import DashBoardGrayIcon from "src/assets/icons/dashboard-gray.svg";
import WhiteRectsIcon from "src/assets/icons/white-rects.svg";
const SubHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <button className={styles.arrow}>
          <ArrowLeftIcon />
        </button>
        <button className={styles.code}>
          <SprIcon />
          <span>SPR-06</span>
        </button>
        <button className={styles.code}>
          <PeopleIcon />
          <span>TEAM-10</span>
        </button>
        <div className={styles.last}>
          <span>New Sprint Name</span>
          <button className={styles.calendar}>
            <CalendarIcon />
          </button>
          <button className={styles.peopleGray}>
            <PeopleGrayIcon />
          </button>
        </div>
        <button className={styles.button}>Complete Sprint</button>
      </div>
      <div className={styles.right}>
        <button className={styles.dashboardGray}>
          <DashBoardGrayIcon height="16px" width="16px" />
        </button>
        <button>
          <WhiteRectsIcon height="24px" width="24px" />
        </button>
      </div>
    </div>
  );
};

export default SubHeader;
