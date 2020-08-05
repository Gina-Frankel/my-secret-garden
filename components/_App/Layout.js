import Head from "next/head";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  console.log(children);
  return (
    <>
      <Head>
        <title>My Secret garden</title>
      </Head>
      <NavBar></NavBar>
      <Container>{children} </Container>
      <footer>footer</footer>
    </>
  );
}
