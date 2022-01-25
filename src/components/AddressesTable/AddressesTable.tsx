/* eslint-disable react/jsx-key */

// Third Parties
import { useTable, useSortBy, usePagination } from "react-table";
import axios, { AxiosRequestConfig } from "axios";

// Types
import { FC, useEffect } from "react";

// Hooks
import { useMemo, useState } from "react";

// Component Schema
import { AddressesColumnSchema } from "./AddressesTableSchemas";

// Shared Components
import { PrimaryButton, ConfirmBox } from "components";

/*--------------------*/

// Local Types
type IRemove = 'inactive' | 'remove' | 'cancel';
interface IProps {
  addresses: any;
  setSwitchSection: (section: "create" | "edit") => void;
  setSelectedAddress: (address: any) => void;
  setUpdated: (updated: boolean) => void;
  updated: boolean;
}

/**
 * AddressesTable Component
 */
const AddressesTable: FC<IProps> = ({
  addresses,
  setSwitchSection,
  setSelectedAddress,
  setUpdated,
  updated,
}) => {
  const [addressToRemove, setAddressToRemove] = useState<any>(null);
  const [removeStatus, setRemoveStatus] = useState<IRemove>('inactive');
  const data = useMemo(() => addresses, [addresses]);
  const columns = useMemo(() => AddressesColumnSchema, []);
  const tableInstance = useTable({ columns, data }, useSortBy, usePagination);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const handleEditAddress = (address: any) => {
    setSwitchSection("edit");
    setSelectedAddress(address);
  };

  const openRemoveBox = (address: any) => {
    setAddressToRemove(address);
  };

  useEffect(() => {
    if (removeStatus === 'remove') {
      const options: AxiosRequestConfig = {
        method: "DELETE",
        url: `https://fsl-candidate-api-vvfym.ondigitalocean.app/v1/address/${addressToRemove.id}`
      };
      axios(options)
        .then(() => {
          setRemoveStatus('inactive');
          setAddressToRemove(null);
          setUpdated(!updated);
        })
        .catch((res) => {
          console.log("error", res);
          setRemoveStatus('inactive');
          setAddressToRemove(null);
        });
    }
    if (removeStatus === 'cancel') {
      setAddressToRemove(null);
      setRemoveStatus('inactive');
    }
  }, [removeStatus, addressToRemove, updated, setUpdated]);

  return (
    <div>
      <div
        className="w-32 mb-8 inline-block float-right"
        onClick={() => setSwitchSection("create")}
      >
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
          {rows.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
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
                  <span
                    onClick={() => handleEditAddress(row.original)}
                    className="cursor-pointer"
                  >
                    Edit
                  </span>{" "}
                  /{" "}
                  <span
                    onClick={() => openRemoveBox(row.original)}
                    className="cursor-pointer"
                  >
                    Remove
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {addressToRemove && (
        <ConfirmBox
          text={addressToRemove.name}
          setAction={setRemoveStatus}
        />
      )}
    </div>
  );
};

export default AddressesTable;
