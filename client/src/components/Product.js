import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "react-simple-snackbar";

import { MenuIcon } from "@heroicons/react/outline";
import Sidebar from "./Sidebar";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const initialState = {
    itemcode: 0,
    price: 0,
    description: "",
    name: "",
    country: "United States",
  };
  const [product, setProduct] = useState(initialState);

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const addProduct = () => {
    if (
      product.name.length > 0 &&
      product.description.length > 0 &&
      parseInt(product.itemcode) > 0 &&
      parseInt(product.price) > 0
    ) {
      axios
        .post("http://localhost:9091/product/create", product)
        .then((data) => {
          openSnackbar("Product Created");
          setProduct(initialState);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      openSnackbar("Sorry Fields Can't Be Empty !!");
    }
  };

  return (
    <>
      <div>
        {/* Static sidebar for desktop */}
        <Sidebar />

        {/* Static sidebar for desktop */}

        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Product
                </h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="py-4">
                  <div className="">
                    {
                      <div>
                        <div className="">
                          <div>
                            <div>
                              <h3 className="text-lg leading-6 font-small text-gray-900">
                                Add a Product
                              </h3>
                              <p className="mt-1 text-sm text-gray-500"></p>
                            </div>

                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                              <div className="sm:col-span-4">
                                <label
                                  htmlFor="username"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Item number
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                    Enter
                                  </span>
                                  <input
                                    type="number"
                                    name="itemcode"
                                    value={product.itemcode}
                                    id="itemcode"
                                    onChange={handleChange}
                                    autoComplete="itemcode"
                                    className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                  />
                                </div>
                              </div>
                              <div className="sm:col-span-4">
                                <label
                                  htmlFor="price"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Price
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                    Enter Price
                                  </span>
                                  <input
                                    type="number"
                                    name="price"
                                    value={product.price}
                                    id="price"
                                    onChange={handleChange}
                                    autoComplete="price"
                                    className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                  />
                                </div>
                              </div>

                              <div className="sm:col-span-6">
                                <label
                                  htmlFor="about"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Description
                                </label>
                                <div className="mt-1">
                                  <textarea
                                    id="about"
                                    name="description"
                                    value={product.description}
                                    onChange={handleChange}
                                    rows={3}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                                    defaultValue={""}
                                  />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                  Describe the product
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="pt-8">
                            <div>
                              <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Information
                              </h3>
                              <p className="mt-1 text-sm text-gray-500"></p>
                            </div>
                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                              <div className="sm:col-span-3">
                                <label
                                  htmlFor="first-name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Name
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    name="name"
                                    value={product.name}
                                    onChange={handleChange}
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                  />
                                </div>
                              </div>

                              <div className="sm:col-span-3">
                                <label
                                  htmlFor="country"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Country of Manufacture
                                </label>
                                <div className="mt-1">
                                  <select
                                    id="country"
                                    name="country"
                                    value={product.country}
                                    autoComplete="country-name"
                                    onChange={handleChange}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                  >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                    <option>India</option>
                                    <option>Bangladesh</option>
                                    <option>China</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="pt-5">
                          <div className="flex justify-end">
                            <button
                              type="button"
                              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              onClick={addProduct}
                              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
