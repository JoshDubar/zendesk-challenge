const { useQuery } = require("react-query");
const axios = require("axios");

export default function useTickets() {
  return useQuery(
    "tickets",
    async () => {
      const res = await axios.get(`http://localhost:4001/tickets`);
      return res.data;
    },
    { keepPreviousData: true }
  );
}

// const { useQuery } = require('react-query');
// const axios = require('axios');

// export default function useSchools(page, perPage) {
//   return useQuery(
//     ['schools', page, perPage],
//     async () => {
//       const res = await axios.get(`/api/schools?perPage=${perPage}&page=${page}`);
//       return res.data;
//     },
//     { keepPreviousData: true }
//   );
// }
