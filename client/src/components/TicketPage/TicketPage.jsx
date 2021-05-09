import React, { useEffect, useMemo, useState } from "react";
import TicketTable from "./TicketTable/TicketTable";
import { useTickets, useTicket } from "../../custom-hooks";
import "./TicketPage.css";
import TicketStatus from "./TicketTable/TicketStatus/TicketStatus";
import { useHistory } from "react-router";

const TicketPage = () => {
  const [page, setPage] = useState(1);
  const history = useHistory();
  const [ticketId, setTicketId] = useState(undefined);
  const { data: allData, isLoading: allIsLoading } = useTickets();
  const { data: ticket, isLoading: ticketIsLoading } = useTicket(ticketId);

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
        Header: "Requested",
        accessor: "col4",
        Cell: ({ cell: { value } }) =>
          new Intl.DateTimeFormat("en-GB").format(new Date(value)),
      },
      {
        Header: "Type",
        accessor: "col5",
        Cell: ({ cell: { value } }) => (value ? value : "-"),
      },
    ],
    []
  );
  const ticketList = allData?.data?.tickets.map((ticket) => {
    return {
      col1: ticket.status,
      col2: ticket.subject,
      col3: ticket.requester_id,
      col4: ticket.created_at,
      col5: ticket.type,
    };
  });
  const tableData = useMemo(() => ticketList, [ticketList]);

  const handleRowClick = (id) => {
    setTicketId(parseInt(id) + 1);
  };

  useEffect(() => {
    if (ticket) {
      const {
        description,
        created_at,
        status,
        subject,
        requester_id,
        id,
      } = ticket.data.ticket;
      history.push(`/${id}`, {
        description,
        created_at,
        status,
        subject,
        requester_id,
      });
    }
  }, [ticket, history]);

  return (
    <div className="ticket-page">
      <div className="ticket-page-container">
        <div className="title-section">
          <div className="tickets-title green">Your tickets</div>
        </div>
        {allIsLoading ? (
          <div className="loading" />
        ) : (
          <TicketTable
            columns={columns}
            data={tableData}
            handleRowClick={handleRowClick}
          />
        )}
      </div>
    </div>
  );
};

export default TicketPage;
