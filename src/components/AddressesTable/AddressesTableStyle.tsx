/* eslint-disable react/jsx-key */

// Third Parties
import { useTable, useSortBy } from "react-table";

// Types
import type { FC } from "react";

// Hooks
import { useMemo, useState, useEffect } from "react";

// Component Schema
import { AddressesColumnSchema } from "./AddressesTableSchemas";

/*--------------------*/

// Local Types
interface IProps {
  addresses: any;
}

// Prep Content
const pages = [5, 10, 25];

/**
 * AddressesTable Component
 */
const AddressesTable: FC<IProps> = ({ addresses }) => {
  const data = useMemo(() => addresses, [addresses]);
  const columns = useMemo(() => AddressesColumnSchema, []);
  const tableInstance = useTable({ columns, data }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  const [numberOfRecords, setNumberOfRecords] = useState(5);
  const [currentPages, setCurrentPages] = useState(rows.slice(0, numberOfRecords));

  useEffect(() => {
    setCurrentPages(rows.slice(0, numberOfRecords));
  }, [numberOfRecords, rows]);

  return (
    <>
      <div className="flex my-12 dark:bg-black dark:text-white">
        <div>Number Of Records</div>
        {pages.map((page) => (
          <div
            key={page}
            className="ml-4 cursor-pointer hover:font-bold"
            onClick={() => setNumberOfRecords(page)}
          >
            {page}
          </div>
        ))}
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  className="text-left pb-4 pr-12"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {currentPages.map((row: any, i: number) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any, index: number) => {
                  return (
                    <td
                      className={`pr-16 ${
                        index === 0 ? "cursor-pointer hover:font-bold" : ""
                      }`}
                      {...cell.getCellProps()}
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
    </>
  );
};

export default AddressesTable;
