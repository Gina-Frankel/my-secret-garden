import { Menu, Container } from "semantic-ui-react";
import Link from "next/link";

function NavBar() {
  return (
    <Menu stackable fluid={true} id="menu" inverted={true}>
      <Container>
        <Link href="/">
          <Menu.Item header>My secret garden</Menu.Item>
        </Link>
      </Container>
    </Menu>
  );
}

export default NavBar;
