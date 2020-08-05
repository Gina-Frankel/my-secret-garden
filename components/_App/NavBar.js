import { Menu, Container, Icon } from "semantic-ui-react";
import Link from "next/link";

function NavBar() {
  return (
    <Menu>
      <Container text>
        <Link href="/">
          <Menu.Item header>
            <Icon name="tree" size="large" />
            My secret garden
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  );
}

export default NavBar;
