import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, correctAnswer }) => {
 console.log(correctAnswer);

 const showToastInRadio = () =>{
  if(correctAnswer === option){
    toast.success('Good Job! Correct Answer', {
      position: toast.POSITION.TOP_CENTER
    }
    )
  }
  else{
    toast.error('Hey Developer, Wrong Answer!', {
   position: toast.POSITION.TOP_CENTER
});
   }
 }

  return (
    <div>
      <button className="border-2 rounded-lg border-blue-200 w-full text-center bg-gray-200 py-8 px-4 hover:bg-slate-300 flex gap-3 align-center">
        <input  onClick={showToastInRadio} className="h-6 w-6" type="radio" />
        <label className="font-semibold" htmlFor="">
          {option}
        </label>
        <ToastContainer/>
      </button>
     
    </div>
  );
};

export default Option;
