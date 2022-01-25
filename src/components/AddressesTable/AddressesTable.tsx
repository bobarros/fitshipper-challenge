/* eslint-disable react/jsx-key */

// Third Parties
import { useTable, useSortBy, usePagination } from "react-table";

// Types
import type { FC } from "react";

// Hooks
import { useMemo } from "react";

// Component Schema
import { AddressesColumnSchema } from "./AddressesTableSchemas";

// Shared Components
import { PrimaryButton } from "components";

/*--------------------*/

// Local Types
interface IProps {
  addresses: any;
  setSwitchSection: (section: 'create' | 'edit') => void;
  setSelectedAddress: (address: any) => void;
}

/**
 * AddressesTable Component
 */
const AddressesTable: FC<IProps> = ({ addresses, setSwitchSection, setSelectedAddress }) => {
  const data = useMemo(() => addresses, [addresses]);
  const columns = useMemo(() => AddressesColumnSchema, []);
  const tableInstance = useTable({ columns, data }, useSortBy, usePagination);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  const handleEditAddress = (address: any) => {
    setSwitchSection('edit');
    setSelectedAddress(address);
  }

  const openRemoveBox = (address: any) => {

  }

  return (
    <div>
      <div className="w-32 mb-8 inline-block float-right" onClick={() => setSwitchSection('create')}>
        <PrimaryButton>Create +</PrimaryButton>
      </div>
      <table
        className="w-full text-stone-900 dark:text-stone-300"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className="border border-solid border-stone-900 dark:border-stone-50"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column: any) => (
                <th
                  className="text-left p-2 pr-12 border border-solid border-stone-900 dark:border-stone-50"
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
              <th className="text-left p-2 pr-12 border border-solid border-stone-900 dark:border-stone-50">
                Action
              </th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: any, i: number) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any, index: number) => {
                  return (
                    <td
                      className="border border-solid pl-2 pr-16
                      border-stone-900
                      dark:border-stone-50"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
                <td className="border border-solid pl-2 pr-16 border-stone-900 dark:border-stone-50">
                  <span onClick={() => handleEditAddress(row.original) } className="cursor-pointer">Edit</span> /{" "}
                  <span onClick={() => openRemoveBox(row.original)} className="cursor-pointer">Remove</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AddressesTable;
