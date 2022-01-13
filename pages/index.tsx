// Next
import Head from "next/head";

// Third Parties

// Types
import type { NextPage } from "next";
import type { AxiosRequestConfig } from "axios";

// Hooks

// Shared Components
import { AddressesTable } from "@components/home";

/*--------------------*/

// Local Types
interface IProps {
  addresses: readonly {
    [x: string]: {};
  }[];
}

/**
 * Home Page
 */

const Home: NextPage<IProps> = ({ addresses }) => {
  return (
    <div>
      <Head>
        <title>Challenge</title>
      </Head>
      <main>
        <h1 className="text-3xgl font-bold underline">Addresses</h1>
        <AddressesTable addresses={addresses} />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const axios = require("axios");
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "https://fsl-candidate-api-vvfym.ondigitalocean.app/v1/address?orderBy=id&direction=desc",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  const res = await axios(options);

  return {
    props: {
      addresses: res.data,
    },
  };
};
