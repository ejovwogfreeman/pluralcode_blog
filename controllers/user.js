const registerUser = (req, res) => {
  res.send({ message: "user registered successfully" });
};

const getUser = (req, res) => {
  res.send({ message: "hello user" });
};

module.exports = { registerUser, getUser };
