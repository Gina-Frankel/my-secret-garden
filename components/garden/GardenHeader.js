import { Header } from "semantic-ui-react";

function GardenHeader(props) {
  console.log(props);
  const area = props.area;
  const title = area.replace("-", " ");
  const titleUpperCase = title.toUpperCase();
  return (
    <Header as="h1" block>
      GARDENS IN {titleUpperCase}
    </Header>
  );
}

export default GardenHeader;
