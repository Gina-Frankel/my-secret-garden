import { Card } from "semantic-ui-react";

function GardenList(props) {
  const decodeData = (data) => window.atob(data);

  const items = props.gardens.gardens.map((item) => {
    const data_URI = "data:image/jpeg;base64,";
    return {
      header: item.name,
      description: item.address,
      color: "teal",
      childKey: item._id,
      image: data_URI + decodeData(item.data),
    };
  });

  return (
    <>
      <Card.Group itemsPerRow="3" items={items} />
    </>
  );
}

export default GardenList;
