// Third Parties
import axios, { AxiosRequestConfig } from "axios";

// Types
import type { FC } from "react";

// Hooks
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

// Shared Components
import { PrimaryButton } from "components";

/*--------------------*/

// Local Types
interface IProps {
  setSwitchSection: (section: "show") => void;
  setUpdated: (updated: boolean) => void;
  address: any;
  updated: boolean;
}

// Local Preps

/**
 * EditAddress Component
 */
const EditAddress: FC<IProps> = ({ setSwitchSection, address, setUpdated, updated }) => {
  const [loading, setLoading] = useState(false);
  const [freeForm, setFreeForm] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
    getValues,
  } = useForm();

  useEffect(() => {
    setValue("name", address.name);
    setValue("address1", address.address1);
    setValue("address2", address.address2);
    setValue("city", address.city);
    setValue("state", address.state);
    setValue("zip", address.zip);
  }, [setValue, address]);

  const getFreeForm = (data: any) => {
    const getLines = data.message.split("\n");
    setValue("name", getLines[0]);
    setValue("address1", getLines[1]);
    setValue("address2", getLines[2]);
    setValue("city", getLines[3]);
    setValue("state", getLines[4]);
    setValue("zip", getLines[5]);
    setFreeForm(false);
  };

  const switchFreeForm = () => {
    if (!freeForm) {
      // I get the values but if they are empty, I set a placeholder for required lines
      const AllValues = [
        getValues("name").length > 0 ? getValues("name") : "Name here",
        getValues("address1").length > 0 ? getValues("address1") : "Address here",
        getValues("address2").length > 0 ? getValues("address2") : "\n",
        getValues("city").length > 0 ? getValues("city") : "City here",
        getValues("state").length > 0 ? getValues("state") : "State here",
        getValues("zip").length > 0 ? getValues("zip") : "Zip here",
      ];
      let stringOfValues = AllValues.join(" \n");
      setValue("message", stringOfValues);
    }
    setFreeForm(!freeForm);
  };

  const onSubmit = (data: any) => {
    setLoading(true);
    const options: AxiosRequestConfig = {
      method: "PATCH",
      url: `https://fsl-candidate-api-vvfym.ondigitalocean.app/v1/address/${address.id}`,
      data,
    };
    axios(options)
      .then(() => {
        setLoading(false);
        setUpdated(!updated);
        setSwitchSection("show");
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
    <div className="max-w-xl">
      <h2 className="text-4xl max-w-md text-stone-900 dark:text-stone-50 mb-8">
        Edit User
      </h2>
      <div className="w-48 mb-4" onClick={switchFreeForm}>
        <PrimaryButton type="button">Switch Free Form</PrimaryButton>
      </div>
      {freeForm ? (
        <form onSubmit={handleSubmit(getFreeForm)}>
          <textarea
            className="w-full h-64 p-4 border-2 border-stone-300 dark:border-stone-500 resize-none"
            placeholder="Please, use five lines for each field. &#10;Use a blank line if you need to skip Address 2.&#10;.&#10;Like so: &#10;Name, &#10;Address, &#10;Address 2, &#10;City, &#10;State, &#10;Zip"
            {...register("message")}
          />
          <div className="mt-4">
            <PrimaryButton type="submit">Transform</PrimaryButton>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {content.map((item) => (
            <label key={item.id} className="block mb-2 flex">
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
      )}
    </div>
  );
};

export default EditAddress;
