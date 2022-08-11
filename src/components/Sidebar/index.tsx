import React from "react";
import Button from "src/common/button";
import Icon from "src/common/Icon";
import styles from "./index.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Button icon="home" text="Dashboard" />
        <Button icon="chat" text="Feedback" />
        <Button icon="dashboard" text="Task" isActive={true} />
        <Button icon="explore" text="Roadmap" />
        <Button icon="repeat" text="Changelog" />
      </div>
      <div className={styles.bottom}>
        <Button icon="plus" text="Invite people" />
        <Button icon="chat-alt" text="Help & Community" />
        <Button icon="bell" text="Notifications" />

        <button className={styles.button}>
          <Icon name="profile1" />
          <span>Neil Larkins</span>
        </button>
        <button className={styles.button}>
          <Icon name="eLogo" />
          <span>Epodpay Inc.</span>
        </button>

        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
