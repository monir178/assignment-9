import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='mt-16 mb-8 text-center text-6xl text-blue-700 font-bold'>Frequently Asked Questions</h1>

            <div className='container mx-auto  bg-slate-300 rounded-lg p-5 shadow-lg mb-4 '>
                <h2 className='text-3xl font-bold mb-2'> <span className='text-indigo-500 '>Question:</span>What is the purpose of react router?</h2>
                <p className='font-semibold text-xl'><span className='text-3xl text-indigo-500' >Answer:</span> We will need to utilize Router in React JS to create a React application with navigation across multiple pages. React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.

                    A Router in React JS routes using a component-based architecture. It offers various routing components as required by the application. If you wish to learn more about its applications, check out this blog: Navigate React Router programmatically.</p>
            </div>
            <div className='container mx-auto bg-slate-300 rounded-lg p-4 shadow-lg mb-4'>
                <h2 className='text-3xl font-bold mb-2'>
                    <span className='text-indigo-500'>Question:</span> How does context api work?
                </h2>
                <p className='font-semibold text-xl'><span className='text-3xl text-indigo-500' >Answer: </span> The React Context API has been around as an experimental feature for a while now, but only in React’s version 16.3.0 did it become safe to use in production. The article below will show you two basic web store apps, one built with the Context API and one without it.
                    This new API solves one major problem–prop drilling. Even if you’re not familiar with the term, if you’ve worked on a React.js app, it has probably happened to you. Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components. Component will receive props indirectly and you, the React Developer will have to ensure everything works out right.
                </p>
            </div>
            <div className='container mx-auto bg-slate-300 rounded-lg p-4 shadow-lg mb-4'>
                <h2 className='text-3xl font-bold mb-2'> <span className='text-indigo-500 '>Question:</span> What is useRef hook in react?</h2>

                <p className='font-semibold text-xl'><span className='text-3xl text-indigo-500' >Answer: </span> The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.  </p>

            </div>
        </div>


    );
};

export default Blog;