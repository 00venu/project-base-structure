import React from "react";
import { useTable, usePagination, useExpanded } from "react-table";
import makeData from "./makeData";
import { classNames } from "./classess";

const { tableWrap, pagination, collapse } = classNames;

function Table({ columns, data }: any) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, expanded },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    useExpanded,
    usePagination
  );

  return (
    <>
      <div className={tableWrap}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <th
                    {...column.getHeaderProps({
                      className: column.collapse ? collapse : "",
                    })}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell: any) => {
                    return (
                      <td
                        {...cell.getCellProps({
                          className: cell.column.collapse ? collapse : "",
                        })}
                        style={{
                          backgroundColor:
                            cell.column.Header === "Age" ||
                            cell.column.Header === "Visits"
                              ? cell.value > 20
                                ? "#9b4202"
                                : "#4f3424"
                              : "",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={pagination}>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

const ReportTable = () => {
  const columns = React.useMemo(
    () => [
      {
        id: "expander",
        collapse: true,
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }: any) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? "👇" : "👉"}
          </span>
        ),
        Cell: ({ row }: any) =>
          row.canExpand ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  paddingLeft: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? "👇" : "👉"}
            </span>
          ) : null,
      },
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
            collapse: true,
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
            collapse: true,
          },
          {
            Header: "Visits",
            accessor: "visits",
            collapse: true,
          },
          {
            Header: "Status",
            accessor: "status",
            collapse: true,
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
            collapse: true,
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(5, 5, 5, 2), []);

  return <Table columns={columns} data={data} />;
};

export default ReportTable;
