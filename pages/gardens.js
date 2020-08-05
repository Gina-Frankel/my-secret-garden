// where the gardens from mongo go
// make a request to mongo from here

function Gardens(props) {
  console.log(props);
  return <div>gardens</div>;
}

Gardens.getInitialProps = () => {
  return { Hello: "world" };
  //fetch data on server to google
  //return response data as an object
};

export default Gardens;
