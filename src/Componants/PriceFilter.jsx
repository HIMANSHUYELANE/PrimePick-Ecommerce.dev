import React from "react";
import { useParams } from "react-router-dom";

export default function PriceFilter({ setMinPrice, setMaxPrice ,setAllPrice }) {
  const params = useParams().category;
  console.log(params);
  const shouldHideDiv = params === "mobile" || params === "electronics" || params === "appliances";
  return (
    <div className="bg-slate-200 px-4 py-10 h-screen space-y-5">
      <h1 className="text-xl font-bold">Price Filter</h1>
      <button value={0} onClick={(e)=>{window.location.reload(e)}} className="px-8 rounded-md border-black border-2">ALL</button>
      <div>
        {shouldHideDiv ? (
          <div className="flex flex-col space-y-5">
            <label>Min Price</label>
            <select className="px-4 rounded-md py-1"
              name=""
              id="op-1"
              onChange={(e) => {
                setMinPrice(e.target.value);
              }}
            >
              <option value="" hidden>
                Select Amount
              </option>
              <option value="10000">10,000</option>
              <option value="20000">20,000</option>
              <option value="30000">30,000</option>
            </select>
            <label>Max Price</label>
            <select
              name=""
              id=""
              onChange={(e) => {
                setMaxPrice(e.target.value);
              }}
              className="px-4 rounded-md py-1"
            >
              <option value="" hidden>
                Select Amount
              </option>
              <option value="20000">20,000</option>
              <option value="40000">40,000</option>
              <option value="50000">50,000</option>
              <option value="60000">60,000</option>
            </select>
          </div>
        ) : (
          <div className="flex flex-col space-y-5">
            <label>Min Price</label>
            <select className="px-4 rounded-md py-1"
              name=""
              id="op-1"
              onChange={(e) => {
                setMinPrice(e.target.value);
              }}
            >
              <option value="" hidden>
                Select Amount
              </option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="400">400</option>
            </select>
            <label>Max Price</label>
            <select
              name=""
              id=""
              onChange={(e) => {
                setMaxPrice(e.target.value);
              }}
              className="px-4 rounded-md py-1"
            >
              <option value="" hidden>
                Select Amount
              </option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="500">500</option>
              <option value="700">700</option>
              <option value="900">900</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
