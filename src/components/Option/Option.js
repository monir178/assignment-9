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

// <button onClick={handleAnswer} className=' text-zinc-700 flex align-center  border rounded-lg border-green-700 m-3 lg:p-10 md:p-5 p-4  hover:bg-slate-100'>

// <input className='h-6 w-4 ' type="radio" name=""     />
// <label className='mx-5 text-xl'  >{option}</label>

// </button>
