import axios from "axios";
import GardenList from "../components/garden/GardenList";
import baseUrl from "../utils/baseUrl";

function Gardens(props) {
  return (
    <div>
      <GardenList gardens={props}></GardenList>
    </div>
  );
}

// make a request to mongo from here
Gardens.getInitialProps = async ({ query: { _area } }) => {
  const url = `${baseUrl}/api/gardens`;
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
