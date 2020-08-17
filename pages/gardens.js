import axios from "axios";
import baseUrl from "../utils/baseUrl";
import GardenList from "../components/garden/GardenList";
import GardenHeader from "../components/garden/GardenHeader";

function Gardens(props) {
  return (
    <>
      <GardenHeader area={props.gardens[0].area}></GardenHeader>

      <GardenList gardens={props}></GardenList>
    </>
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
