import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import {
  AiOutlineRight,
  AiOutlineLeft,
  AiOutlineDoubleRight,
  AiOutlineDoubleLeft,
} from "react-icons/ai";
import {
  BiChevronRight,
  BiChevronLeft,
  BiChevronsRight,
  BiChevronsLeft,
} from "react-icons/bi";
import { Button } from "../components";
import { COLUMNS } from "./table-util/columns";
import GlobalFilter from "./table-util/GlobalFilter";
import MOCK_DATA from "../data/MOCK_DATA.json";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";

const ReactTable = () => {
  // get the data using getMemo hook
  const data = useMemo(() => MOCK_DATA, []);
  const columns = useMemo(() => COLUMNS, []);

  // define useTable hook and assign to a variable
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // destructure the tableInstance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
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
    prepareRow,
    state,
    setGlobalFilter,
    preGlobalFilteredRows,
    filter,
    setFilter,
  } = tableInstance;

  // Destrcuture the state
  const { globalFilter } = state;

  // destructure isScrolling from useStateContext
  const { isScrolling } = useStateContext();

  return (
    <div>
      <div className="sticky top-10 bg-white">
        {/* define table in html */}
        <div className="flex">
          <GlobalFilter
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            preGlobalFilteredRows={preGlobalFilteredRows}
          />
          {/* For the dropdown */}
          <div className="flex">
            {headerGroups.map((headerGroup) =>
              headerGroup.headers.map((column) =>
                column.Filter ? (
                  <div key={column.id}>
                    <label htmlFor={column.id}>
                      {column.render("Header")}:{" "}
                    </label>
                    {column.render("Filter")}
                  </div>
                ) : null
              )
            )}
          </div>
        </div>
      </div>

      <table {...getTableProps()} className="min-w-full divide-y bg-gray-400">
        <thead
          className={`sticky top-20  ${
            isScrolling
              ? " scale-102 bg-blue-50 drop-shadow-xl"
              : " scale-100 bg-gray-50 drop-shadow-md"
          } transition-all duration-500 ease-in-out`}
        >
          {/* loop through the headerGroups */}
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 "
                >
                  <div className="flex">
                    {column.render("Header")}
                    {/* Add a Span tag to display the arrows  */}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <BsArrowDownShort />
                        ) : (
                          <BsArrowUpShort />
                        )
                      ) : null}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="divide-y divide-gray-200 bg-white"
        >
          {page.map((row) => {
            // call prepareRow function that was returned from useTable hook
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-100">
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="whitespace-nowrap px-6 py-2 "
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          <BiChevronsLeft />
        </Button>
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          <BiChevronLeft />
        </Button>
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          <BiChevronRight />
        </Button>
        <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          <BiChevronsRight />
        </Button>

        <span>
          Page{" "}
          <strong>
            {state.pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <select
          value={state.pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>
        {/* new */}
        <pre>
          <code>{JSON.stringify(state, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};

export default ReactTable;
