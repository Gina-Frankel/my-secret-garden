// route
// routes are simple functions
// next makes it very easy to make routes - just need a function - you do not need configuration
// do not have to import node it is already available

export default (req, res) => {
  console.log(req);
  res.status(200).send("test");
};
