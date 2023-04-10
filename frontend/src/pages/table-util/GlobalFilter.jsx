import React from "react";
import { useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({
  GlobalFilter,
  setGlobalFilter,
  preGlobalFilteredRows,
}) => {
  let count = preGlobalFilteredRows.length;

  // useState to store the value of the input
  const [value, setValue] = useState(GlobalFilter);

  // onchange handler with useAsyncDebounce
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="flex w-96 items-center p-2">
      <input
        className="w-full rounded-md border-gray-300 p-2 py-2 text-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search ${count} records...`}
      />
    </div>
  );
};

export default GlobalFilter;
