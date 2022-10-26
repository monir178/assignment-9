import React from 'react';

const Questions = ({ question }) => {
    console.log(question);
    // console.log(qui)
    return (
        <div className='mt-5 w-3/4 mx-auto shadow-lg'>
            <p className='text-xl font-semibold text-center text-gray-700 py-8'>Question: {question.question}</p>
            <p className=' grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>{question.options.map(option => <div className='border-2 rounded-lg mb-2 border-blue-200 w-3/5 mx-auto text-center bg-gray-200 py-8'> {option} </div>)}</p>
        </div>
    );
};

export default Questions;