// Third Parties
import axios from "axios";

// Types
import type { FC } from "react";
import type { AxiosRequestConfig } from "axios";

// Hooks
import { useState, useEffect } from "react";

// Shared Components
import { AddressesTable, NewAddress, EditAddress, SideBar } from "components";

/*--------------------*/

// Local Types
interface IProps {}
type Sections = "show" | "create" | "edit";

/**
 * Addresses Component
 */

const Addresses: FC<IProps> = () => {
  const [addresses, setAddresses] = useState<any>([]);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [switchSections, setSwitchSection] = useState<Sections>("show");
  const [updated, setUpdated] = useState(false);

  // Fetch Data
  useEffect(() => {
    const options: AxiosRequestConfig = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      url: "https://fsl-candidate-api-vvfym.ondigitalocean.app/v1/address?orderBy=id&direction=desc",
    };

    async function fetchData() {
      const res = await axios(options);
      setAddresses(res.data);
    }
    fetchData();
  }, [updated]);

  const renderTable = () => {
    switch (switchSections) {
      case "show":
        return (
          <AddressesTable
            addresses={addresses}
            setSwitchSection={setSwitchSection}
            setSelectedAddress={setSelectedAddress}
          />
        );
      case "edit":
        return (
          <EditAddress
            address={selectedAddress}
            setSwitchSection={setSwitchSection}
            setUpdated={setUpdated}
            updated={updated}
          />
        );
      case "create":
        return <NewAddress setSwitchSection={setSwitchSection} />;
    }
  };

  return (
    <div className="h-full min-h-full grid grid-cols-8">
      <SideBar />
      <div className="p-6 col-span-7">{renderTable()}</div>
    </div>
  );
};

export default Addresses;
