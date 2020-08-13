import axios from "axios";
import baseUrl from "../utils/baseUrl";
import GardenList from "../components/garden/GardenList";
import GardenHeader from "../components/garden/GardenHeader";
import { Header } from "semantic-ui-react";

function Gardens(props) {
  console.log(props.gardens[0].area);
  const area = props.gardens[0].area;

  return (
    <div>
      <GardenHeader area={props.gardens[0].area}></GardenHeader>
      {/* <Header as="h1" block>
        GARDENS IN {titleUpperCase}
      </Header> */}
      <div>
        <GardenList gardens={props}></GardenList>
      </div>
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
