const axios = require("axios");
const config = require("../config");
const getAllTickets = async (req, res, next) => {
  try {
    const { data } = await axios.get(
      `${process.env.ZENDESK_DOMAIN}/tickets.json`,
      config
    );
    console.log(data);
    res.status(200).json({ message: "success", data });
  } catch (e) {
    res.status(401).send({ message: e.message });
  }
};

const getTicketById = async (req, res) => {
  const id = req.params.id;
  try {
    const {
      data: { ticket },
    } = await axios.get(`${process.env.ZENDESK_DOMAIN}/tickets/${id}`, config);
    res.status(200).send({ message: "success", ticket });
  } catch (e) {
    res.status(401).send(e);
  }
};

module.exports = {
  getAllTickets,
  getTicketById,
};
