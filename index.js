const express = require("express");
const app = express();
const port = 3500;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("*/", async (req, resp) => {
  resp.sendFile(
    path.join(__dirname, "C:/Users/dkade/Desktop/moneyControll/public/index.html"),
    function (err) {
      if (err) {
        resp.status(500).send(err);
      }
    }
  );
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
