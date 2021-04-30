const User = require("../models/user");

exports.Register = async (req, res, next) => {
  try {
    const data = await User.create(req.body);

    res.status(200).json({
      message: "Successfully register!",
      data,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong",
    });
  }
};
