const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes/routeboards");
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/routeboards", routes);


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));