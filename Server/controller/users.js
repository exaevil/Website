const { Users } = require("../models");

const getUsers = async (req, res) => {
  const userList = await Users.findAll();
  res.json(userList);
};

module.exports = { getUsers };
