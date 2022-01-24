// Third Parties
import axios, { AxiosRequestConfig } from "axios";

// Types
import { FC } from "react";

// Hooks
import { useForm } from "react-hook-form";
import { useState } from "react";
import { PrimaryButton } from "components/shared";

// Shared Components

/*--------------------*/

// Local Types
interface IProps {
  setSwitchSection: (section: "show") => void;
}

// Local Preps

/**
 * NewAddress Component
 */
const NewAddress: FC<IProps> = ({ setSwitchSection }) => {
  const [loading, setLoading] = useState(false);
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
        setSwitchSection('show');
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
      <form className="max-w-xl" onSubmit={handleSubmit(onSubmit)}>
        {content.map((item) => (
          <label className="block mb-2 flex">
            <p className="basis-1/3">
              {item.label} {!item.required && "(Optional)"}
            </p>
            <input
              className={`ml-2 p-2 border-solid border-2 flex-1 ${
                errors[item.id] ? "border-red-600" : "border-stone-900"
              }`}
              required={errors[item.id]}
              type="text"
              placeholder={`Enter your ${item.id}`}
              {...register(item.id, { required: item.required })}
            />
          </label>
        ))}
        <div className="grid grid-cols-2 gap-2">
          <div onClick={() => setSwitchSection("show")}>
            <PrimaryButton type="button">Cancel</PrimaryButton>
          </div>
          <PrimaryButton type="submit" filled>
            {loading ? "Saving..." : "Submit"}
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default NewAddress;
