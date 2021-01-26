const app = require("./server");
require("dotenv").config();

const port = process.env.PORT;
app.listen(port, () => {
  console.log("listening on port", port);
});
