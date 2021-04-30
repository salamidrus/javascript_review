const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors()); // cors handler
app.use(express.json()); // body parser - json/raw
app.use(express.urlencoded({ extended: false })); // body parser - url-encoded

// DB CONFIG
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://idrus:idrus123@kuak.91mcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// routes
const userRoutes = require("./routes/user");

app.use("/user", userRoutes);

app.use("/", (req, res) => {
  res.send("<h1>Halo I am Express</h1>");
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
