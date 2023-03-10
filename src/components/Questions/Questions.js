import React from "react";
import Option from "../Option/Option";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ question, id }) => {
  const {correctAnswer} = question;
    // console.log(question);
    // console.log(correctAnswer);
    const showCorrectAnsInEye = () =>{
      toast.info(`Answer : ${correctAnswer}`, {
        position: toast.POSITION.TOP_LEFT
    });
    }

  return (
    <div className="mt-5 w-3/4 mx-auto shadow-lg py-8 px-4 rounded-lg">
   <div  className="flex justify-end mr-2">
   <svg onClick={showCorrectAnsInEye}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 22 22"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 text-blue-700">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
        />
      </svg>
   </div>

      <p className="text-xl font-semibold text-center text-blue-700 py-8 ">
        Question: {question.question}
      </p>

      <div className="grid gap-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        {question.options.map((option) => (
          <Option
            key={id}
            option={option}
            correctAnswer={correctAnswer}
            ></Option>
        ))}
      </div>
    </div>
  );
};

export default Questions;
