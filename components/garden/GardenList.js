import { Card } from "semantic-ui-react";

function GardenList(props) {
  console.log(props.gardens.gardens);
  const items = props.gardens.gardens.map((item) => ({
    header: item.name,
    description: item.address,
    color: "teal",
    childKey: item._id,
  }));

  return (
    <>
      <Card.Group itemsPerRow="3" items={items} />
    </>
  );
}

export default GardenList;
