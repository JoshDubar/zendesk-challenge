import React, { useMemo, useState } from "react";
import TicketTable from "./TicketTable/TicketTable";
import useTickets from "../../custom-hooks/useTickets";
import "./TicketPage.css";
import TicketStatus from "./TicketTable/TicketStatus/TicketStatus";

const TicketPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useTickets();
  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "col1",
        Cell: ({ cell: { value } }) => <TicketStatus status={value} />,
      },
      {
        Header: "Subject",
        accessor: "col2",
      },
      {
        Header: "Requester",
        accessor: "col3",
      },
      {
        Header: "Type",
        accessor: "col4",
        Cell: ({ cell: { value } }) => (value ? value : "-"),
      },
    ],
    []
  );
  const ticketList = data?.data?.tickets.map((ticket) => {
    return {
      col1: ticket.status,
      col2: ticket.subject,
      col3: ticket.requester_id,
      col4: ticket.type,
    };
  });
  const tableData = useMemo(() => ticketList, [ticketList]);
  if (isLoading) return <div>Loading tickets</div>;
  return (
    <div className="ticket-page">
      <div className="ticket-page-container">
        <div className="title-section">
          <div className="tickets-title green">Your tickets</div>
          <div className="tickets-count">101 tickets</div>
        </div>
        <TicketTable
          columns={columns}
          setPage={setPage}
          data={tableData}
          currentPage={page}
          totalPage={5}
        />
      </div>
    </div>
  );
};

export default TicketPage;
