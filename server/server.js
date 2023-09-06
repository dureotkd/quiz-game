const express = require("express");
const app = express();

const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send({
    title: "Hello World",
  });
});
