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
        <Link href="/gardens?_area=north-london">
          <Button> Near North London</Button>
        </Link>
        <Link href="/gardens?_area=city">
          <Button> Near the City</Button>
        </Link>
      </main>
    </div>
  );
}

export default Home;
