// where the gardens from mongo go
// make a request to mongo from here

import Axios from "axios";

function Gardens(props) {
  console.log(props.gardens);
  return <div>gardens</div>;
}

Gardens.getInitialProps = async () => {
  const url = "http://localhost:3000/api/gardens";
  const response = await Axios.get(url);
  return { gardens: response.data };
  //fetch data on server to google
  //return response data as an object
};

export default Gardens;
