const express = require("express");
const app = express();

const port = 5000;

app.use(express.static("public"));
app.use(express.json());
app.get("/info/:dynamic", (req, res) => {
  const { dynamic } = req.params;
  const { key } = req.query;
  console.log(dynamic, key);
  res.status(200).json({ info: "preset text 🍔" });
});
app.post("/", (req, res) => {
  const { parcel } = req.body;
  if (!parcel) {
    return res.status(400).send({ status: "failed" });
  }
  console.log(parcel);
  res.status(201).send({ status: "recieved" });
});
app.listen(port, () => console.log(`server is started at port ${port}`));
