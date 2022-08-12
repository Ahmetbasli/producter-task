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
import { useAppDispatch, useAppSelector } from "src/store/app/hooks";
import {
  selectActiveButtonText,
  updateActiveButtonText,
} from "src/store/features/sidebar/slice";

const topButtons = [
  {
    icon: HomeIcon,
    text: "Dashboard",
  },
  {
    icon: ChatIcon,
    text: "Feedback",
  },
  {
    icon: DashBoardIcon,
    text: "Task",
  },
  {
    icon: ExploreIcon,
    text: "Roadmap",
  },
  {
    icon: RepeatIcon,
    text: "Changelog",
  },
];

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const activeButtonText = useAppSelector(selectActiveButtonText);

  const handleTopButtonClick = (text: string) => {
    dispatch(updateActiveButtonText({ text }));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        {topButtons.map(({ icon, text }) => (
          <div key={text} onClick={() => handleTopButtonClick(text)}>
            <Button
              Icon={icon}
              text={text}
              isActive={text === activeButtonText ? true : false}
            />
          </div>
        ))}
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
