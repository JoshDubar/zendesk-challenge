const { useQuery } = require("react-query");
const axios = require("axios");

export default function useTickets(id) {
  return useQuery(
    ["ticket", id],
    async () => {
      const res = await axios.get(`http://localhost:4001/tickets/${id}`);
      return res;
    },
    { enabled: !!id }
  );
}
