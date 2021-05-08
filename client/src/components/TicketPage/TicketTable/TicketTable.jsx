import React from "react";
import { useTable, usePagination } from "react-table";
import "./TicketTable.css";

const TicketTable = ({ setPage, columns, data, currentPage, totalPage }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    previousPage,
    nextPage,
    page,
    canNextPage,
    canPreviousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,

      initialState: {
        pageIndex: 0,
        pageSize: 25,
      },
    },
    usePagination
  );
  console.log(canNextPage);
  console.log(canPreviousPage);
  const headerDetails = headerGroups[0];
  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          <tr className="table-header" {...headerDetails.getHeaderGroupProps()}>
            {headerDetails.headers.slice(0, 1).map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
            {headerDetails.headers.slice(1).map((column) => (
              <th {...column.getHeaderProps}>{column.render("Header")}</th>
            ))}
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            console.log(row);
            return (
              <tr
                key={row.id}
                {...row.getRowProps()}
                className="rows-container"
              >
                {row.cells.map((cell) => (
                  <td className="green" {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-container">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <div>{pageIndex + 1}</div>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default TicketTable;
