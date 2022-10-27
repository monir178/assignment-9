import React from "react";

const Option = ({ option, correctAnswer }) => {
    console.log(correctAnswer);

  return (
    <div>
      <div className="border-2 rounded-lg border-blue-200 w-full text-center bg-gray-200 py-8 px-4 hover:bg-slate-300 flex gap-3 align-center">
        <input className="" type="radio" />
        <label className="font-semibold" htmlFor="">
          {option}
        </label>
      </div>
    </div>
  );
};

export default Option;
