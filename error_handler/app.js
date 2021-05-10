const express = require("express");
const app = express();

app.get("/", (req, res, next) => res.send("<h1>Welcome</h1>"));
app.use("/user", (req, res, next) =>
  res.status(400).json({
    success: false,
    message: "Failed to get user",
  })
);
app.use("/error", async (req, res, next) => {
  //   throw new Error("Tes Error");
  try {
    throw new Error("Error Handler Catch");
  } catch (err) {
    // console.log(err, "catch err");
    next(err);
  }
});

// error handler
const { errorHandler } = require("./utils/errorHandler");
app.use(errorHandler);

app.listen(3000, () => console.log("Server listening to port 3000"));
