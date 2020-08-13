import axios from "axios";
import GardenList from "../components/garden/GardenList";
import baseUrl from "../utils/baseUrl";

function Gardens(props) {
  console.log(props.gardens[0].area);
  return (
    <div>
      <h1> Gardens in {props.gardens[0].area}</h1>
      <GardenList gardens={props}></GardenList>
    </div>
  );
}

// make a request to mongo from here
Gardens.getInitialProps = async ({ query: { _area } }) => {
  const url = `${baseUrl}/api/gardens`;
  const payload = { params: { _area } };

  const response = await axios.get(url, payload);
  // console.log(response);
  return { gardens: response.data };

  //fetch data on server to google
  //return response data as an object
};

export default Gardens;
