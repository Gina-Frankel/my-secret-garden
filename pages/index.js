import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header, Button } from "semantic-ui-react";
import Link from "next/link";
//import React from "react";
// import Map from "../components/Map";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        {" "}
        <Header size="large" color="teal">
          My Secret Garden
          <Header.Subheader> Discover gardens near you </Header.Subheader>
        </Header>
        <Link href="/gardens">
          <Button> Gardens near Edgware</Button>
        </Link>
      </main>
    </div>
  );
}

export default Home;
