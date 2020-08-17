import styles from "../styles/Home.module.css";
import { Header, Button } from "semantic-ui-react";
import Link from "next/link";

function Home() {
  const ButtonLinks = [
    {
      name: "Near North London",
      href: "/gardens?_area=north-london",
    },
    {
      name: "Near London City",
      href: "/gardens?_area=city-london",
    },
    {
      name: "Near South East London",
      href: "/gardens?_area=south-east-london",
    },
    {
      name: "Near North East London",
      href: "/gardens?_area=north-east",
    },
  ];
  const ButtonLink = ButtonLinks.map((linkItem) => (
    <Link href={linkItem.href}>
      <Button basic color="teal">
        {linkItem.name}
      </Button>
    </Link>
  ));

  return (
    <div>
      <main className={styles.main}>
        {" "}
        <Header size="large" color="teal">
          My Secret Garden
          <Header.Subheader> Discover gardens near you </Header.Subheader>
        </Header>
        <Button.Group>{ButtonLink}</Button.Group>
      </main>
    </div>
  );
}

export default Home;
