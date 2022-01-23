// Third Parties
import axios from "axios";

// Types
import type { FC } from "react";
import type { AxiosRequestConfig } from "axios";
import type { Session } from "@supabase/supabase-js";

// Hooks
import { useState, useEffect } from "react";

// Shared Components

// Utils
import { addressesMock } from "../utils/mockServer";

/*--------------------*/

// Local Types
interface IProps {
  session: Session;
}

/**
 * DashBoard Component
 */

const DashBoard: FC<IProps> = () => {
  const [addresses, setAddresses] = useState<any>([]);

  // Fetch Data
  useEffect(() => {
    /*
    const options: AxiosRequestConfig = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      url: 'https://fsl-candidate-api-vvfym.ondigitalocean.app/v1/address?orderBy=id&direction=desc',
    };
    */
    async function fetchData() {
      /*
      const res = await axios(options);
      setAddresses(res.data);
      */
      setAddresses(addressesMock);
    }
    fetchData();
  }, []);

  return (
    <div className="">
      <div>
        <div>Welcome, John!</div>
      </div>
    </div>
  );
};

export default DashBoard;
