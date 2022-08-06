import type { NextPage } from "next";
import Head from "next/head";
import Header from "src/components/Header";
import KanbanBoard from "src/components/KanbanBoard";
import Sidebar from "src/components/Sidebar";
import SubHeader from "src/components/SubHeader";
import styles from "src/pages/index.module.scss";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Producter</title>
        <meta name="description" content="producter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.rightSide}>
          <SubHeader />
          <KanbanBoard />
        </div>
      </div>
    </>
  );
};

export default Home;
