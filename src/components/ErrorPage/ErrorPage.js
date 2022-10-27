import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div className="flex flex-col min-h-[700px] justify-center items-center text-center">
        <h1 className="text-6xl font-semibold">Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <div>
            <p className="text-red-500 text-5xl mb-3 font-semibold">{error.statusText || error.message}</p>
            <p className="text-4xl font-bold text-red-500">{error.status}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ErrorPage;