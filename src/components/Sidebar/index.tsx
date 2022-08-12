import React from "react";
import Button from "src/common/Button";
import styles from "./index.module.scss";
import HomeIcon from "src/assets/icons/home.svg";
import ChatIcon from "src/assets/icons/chat.svg";
import DashBoardIcon from "src/assets/icons/dashboard.svg";
import ExploreIcon from "src/assets/icons/explore.svg";
import RepeatIcon from "src/assets/icons/repeat.svg";
import PlusIcon from "src/assets/icons/plus.svg";
import ChatAltIcon from "src/assets/icons/chat-alt.svg";
import BellIcon from "src/assets/icons/bell.svg";
import Profile1Icon from "src/assets/icons/profile1.svg";
import ELogoIcon from "src/assets/icons/eLogo.svg";

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Button Icon={HomeIcon} text="Dashboard" />
        <Button Icon={ChatIcon} text="Feedback" />
        <Button Icon={DashBoardIcon} text="Task" isActive={true} />
        <Button Icon={ExploreIcon} text="Roadmap" />
        <Button Icon={RepeatIcon} text="Changelog" />
      </div>
      <div className={styles.bottom}>
        <Button Icon={PlusIcon} text="Invite people" />
        <Button Icon={ChatAltIcon} text="Help & Community" />
        <Button Icon={BellIcon} text="Notifications" />
        <button className={styles.button}>
          <Profile1Icon />
          <span>Neil Larkins</span>
        </button>
        <button className={styles.button}>
          <ELogoIcon />
          <span>Epodpay Inc.</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
