const axios = require("axios");

const getAllTickets = async (_, res, next) => {
  try {
    const {
      data: { tickets },
    } = await axios.get(`${process.env.ZENDESK_DOMAIN}/tickets.json`, {
      auth: {
        username: `${process.env.EMAIL}/token`,
        password: process.env.TOKEN,
      },
    });
    res.status(200).json({ message: "success", tickets });
  } catch (e) {
    res.status(401).send({ message: e.message });
  }
};

module.exports = {
  getAllTickets,
};
