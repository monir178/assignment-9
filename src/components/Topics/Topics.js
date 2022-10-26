import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({ topic }) => {

    const { id, name, logo, total } = topic;

    return (
        <div>

            <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-slate-300 dark:border-gray-700 mb-5">

                <img className="p-2" src={logo} alt="product image" />

                <div className="px-3 pb-5">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-600 mb-3">{name}
                    </h5>

                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-600">Total: {total}</span>

                        <Link to={`/topics/${id}`} className="text-white flex justify-between items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start Practice
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ml-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>



                    </div>
                </div>
            </div>

        </div>
    );
};

export default Topics;