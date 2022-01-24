// Third Parties
import axios, { AxiosRequestConfig } from "axios";


// Types
import type { FC } from "react";

// Hooks
import { useForm } from "react-hook-form";
import { useState } from "react";

// Shared Components

/*--------------------*/

// Local Types
interface IProps {
  setSwitchSection: (section: 'show') => void;
}

// Local Preps

/**
 * NewAddress Component
 */
const NewAddress: FC<IProps> = ({ setSwitchSection }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = (data: any) => {
    setLoading(true);
    const options: AxiosRequestConfig = {
      method: "POST",
      url: "https://fsl-candidate-api-vvfym.ondigitalocean.app/v1/address",
      data,
    };
    axios(options)
      .then(() => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((res) => {
        console.log("error", res);
        setLoading(false);
      });
  };

  const content = [
    {
      id: "name",
      label: "Name",
      required: true,
    },
    {
      id: "address1",
      label: "Address 1",
      required: true,
    },
    {
      id: "address2",
      label: "Address 2",
      required: false,
    },
    {
      id: "city",
      label: "City",
      required: true,
    },
    {
      id: "state",
      label: "State",
      required: true,
    },
    {
      id: "zip",
      label: "Zip",
      required: true,
    },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {content.map((item) => (
          <label key={item.id} className="block mb-2">
            {item.label} {item.required && "(Optional)"}
            <input
              className="ml-2 p-2 border-solid border-2 border-black"
              required={errors.email}
              type="text"
              placeholder={`Enter your ${item.id}`}
              {...register(item.id, { required: item.required })}
            />
            {errors.email && <span>Please enter your {item.id}</span>}
          </label>
        ))}
        <div className="flex">
          <button type="submit" className="bg-black text-white p-2">
            Submit
          </button>
          <button
            onClick={() => console.log("navigate back")}
            type="button"
            className="bg-white text-black p-2"
            onClickCapture={() => setSwitchSection('show')}
          >
            Cancel
          </button>
        </div>
      </form>
      {loading && <div>Loading...</div>}
      {success ? <div>Success!</div> : null}
    </div>
  );
};

export default NewAddress;
