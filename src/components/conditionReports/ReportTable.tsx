import React from "react";
import { useTable, usePagination, useExpanded } from "react-table";
import makeData from "./makeData";
import { classNames } from "./classess";

const { tableWrap, pagination, collapse } = classNames;

const between = (x: any, min: any, max: any) => {
  return x >= min && x <= max;
};

const getColor = (x: any) => {
  if (between(x, 0, 50)) {
    return "#2a2121";
  } else if (between(x, 51, 100)) {
    return "#4f3424";
  } else if (between(x, 101, 150)) {
    return "#5c2f13";
  } else if (between(x, 151, 200)) {
    return "#6f350e";
  } else if (between(x, 201, 250)) {
    return "#9b4202";
  }
};

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
                {headerGroup.headers.map((column: any) => {
                  //console.log(column);
                  return (
                    <th
                      {...column.getHeaderProps({
                        className: column.collapse ? collapse : "",
                      })}
                      style={{
                        backgroundColor: column.background ? "#333d3d" : "",
                        fontSize: column.background ? "13px" : "inherit",
                        textAlign: column.background ? "center" : "",
                      }}
                    >
                      {column.render("Header")}
                    </th>
                  );
                })}
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
                          backgroundColor: cell.column.background
                            ? getColor(cell.value)
                            : "",
                          fontSize: cell.column.background ? "13px" : "inherit",
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
            Header: "Unit",
            accessor: "unit",
            collapse: true,
          },
          {
            Header: "Subsystem",
            accessor: "subsystem",
            collapse: true,
          },
          {
            Header: "Component",
            accessor: "component",
          },
        ],
      },
      {
        Header: "2020",
        columns: [
          {
            Header: "JUL",
            accessor: "jul",
            collapse: true,
            background: true,
          },
          {
            Header: "AUG",
            accessor: "aug",
            collapse: true,
            background: true,
          },
          {
            Header: "SEP",
            accessor: "sep",
            collapse: true,
            background: true,
          },
          {
            Header: "OCT",
            accessor: "oct",
            collapse: true,
            background: true,
          },
          {
            Header: "NOV",
            accessor: "nov",
            collapse: true,
            background: true,
          },
          {
            Header: "DEC",
            accessor: "dec",
            collapse: true,
            background: true,
          },
        ],
      },
      {
        Header: "2021",
        columns: [
          {
            Header: "JAN",
            id: "1",
            accessor: "jan",
            collapse: true,
            background: true,
          },
          {
            Header: "FEB",
            accessor: "feb",
            collapse: true,
            background: true,
          },
          {
            Header: "MAR",
            accessor: "mar",
            collapse: true,
            background: true,
          },
          {
            Header: "APR",
            accessor: "apr",
            collapse: true,
            background: true,
          },
          {
            Header: "MAY",
            accessor: "may",
            collapse: true,
            background: true,
          },
          {
            Header: "JUN",
            accessor: "jun",
            collapse: true,
            background: true,
          },
        ],
      },
    ],
    []
  );

  let data = React.useMemo(() => makeData(5, 5, 2), []);
  let dataRevised = [...data];
  dataRevised = dataRevised.map((v: any) => {
    return {
      ...v,
      subsystem: "",
      component: "",
      subRows: v.subRows.map((j: any) => {
        return {
          ...j,
          unit: "",
          component: "",
          subRows: j.subRows.map((k: any) => {
            return {
              ...k,
              unit: "",
              subsystem: "",
            };
          }),
        };
      }),
    };
  });
  console.log(dataRevised);

  return <Table columns={columns} data={dataRevised} />;
};

export default ReportTable;
