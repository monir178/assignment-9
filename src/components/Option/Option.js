import React from "react";

const Option = ({ option }) => {
  return (
    <div>
      <div className="border-2 rounded-lg border-blue-200 w-full text-center bg-gray-200 py-8 px-4 ">
        <input type="radio" />

        {option}
      </div>
    </div>
  );
};

export default Option;
