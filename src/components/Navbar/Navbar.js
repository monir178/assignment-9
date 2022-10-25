import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (


        <nav className="flex items-center justify-between mx-auto px-8 flex-wrap bg-slate-200 p-6 shadow-lg">
            <div className="flex items-center flex-shrink-0 text-blue-700  mr-6">

                <span className="font-extrabold text-4xl tracking-tight">Quizzy Buzzers</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-blue-700  hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block lg:flex lg:items-center lg:w-auto">
                <div className="text-md lg:flex-grow">
                    <Link to={"/topics"} className="block mt-4 lg:inline-block lg:mt-0 text-blue-700 hover:text-white mr-4 font-semibold">
                        Topics
                    </Link>
                    <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-blue-700  hover:text-white mr-4 font-semibold">
                        Statistics
                    </Link>
                    <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-blue-700 font-semibold  hover:text-white">
                        Blog
                    </Link>
                </div>

            </div>
        </nav>

    );
};

export default Navbar;