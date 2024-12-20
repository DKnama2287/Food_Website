const express = require('express');
const app = express();
const port = 5000;

require("./db");

const cors = require('cors');
app.use(cors());


app.get("/", (req, res) => {
    res.send("hello");
});



app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(express.json());
app.use("/", require("./routes/auth"));
app.use("/", require("./routes/Displaydata"));
app.use("/", require("./routes/Orderdata"));

app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});
