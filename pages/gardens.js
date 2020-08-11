import axios from "axios";
import GardenList from "../components/garden/GardenList";

function Gardens(props) {
  // console.log(props.gardens);
  return (
    <div>
      <GardenList gardens={props}></GardenList>
    </div>
  );
}

// make a request to mongo from here
Gardens.getInitialProps = async ({ query: { _area } }) => {
  const url = "http://localhost:3000/api/gardens";
  const payload = { params: { _area } };
  console.log("payload");
  console.log(payload);
  const response = await axios.get(url, payload);
  // console.log(response);
  return { gardens: response.data };

  //fetch data on server to google
  //return response data as an object
};

export default Gardens;
