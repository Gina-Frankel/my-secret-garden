import Head from "next/head";
import { Container } from "semantic-ui-react";

export default function Layout({ children }) {
  console.log(children);
  return (
    <>
      <Head>
        <title>My Secret garden</title>
      </Head>
      <Container>{children} </Container>
    </>
  );
}
