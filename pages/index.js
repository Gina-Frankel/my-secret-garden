import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "semantic-ui-react";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        {" "}
        <Header size="large" color="teal">
          Discover a garden near you
        </Header>{" "}
      </main>
    </div>
  );
}
