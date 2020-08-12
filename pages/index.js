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
        <Button.Group>
          <Link href="/gardens?_area=north-london">
            <Button basic color="teal">
              Near North London
            </Button>
          </Link>
          <Link href="/gardens?_area=south-east-london">
            <Button color="teal">Near South East London</Button>
          </Link>
          <Link href="/gardens?_area=city-london">
            <Button basic color="teal">
              Near city of London
            </Button>
          </Link>
        </Button.Group>
      </main>
    </div>
  );
}

export default Home;
