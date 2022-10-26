import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quiz = useLoaderData();
    // console.log(quiz)
    const { data } = quiz;
    console.log(data)
    const { name, questions, total, id } = data;
    return (
        <div className='mt-6'>
            <h2 className='text-4xl font-bold text-blue-600 text-center'>Quiz of {name}</h2>

            <div>
                {
                    questions.map(question => <Questions
                        key={id}
                        question={question}
                    ></Questions>)
                }
            </div>
        </div>
    );
};

export default Quiz;