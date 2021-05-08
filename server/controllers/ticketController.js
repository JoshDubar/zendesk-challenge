const axios = require("axios");

const getAllTickets = async (req, res, next) => {
  try {
    const { data } = await axios.get(
      `${process.env.ZENDESK_DOMAIN}/tickets.json`,
      {
        auth: {
          username: `${process.env.EMAIL}/token`,
          password: process.env.TOKEN,
        },
      }
    );
    console.log(data);
    res.status(200).json({ message: "success", data: data });
  } catch (e) {
    res.status(401).send({ message: e.message });
  }
};

module.exports = {
  getAllTickets,
};
