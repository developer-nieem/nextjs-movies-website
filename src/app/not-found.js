import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex  h-full mt-44  justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">404</h2>
          <p>This page are not found!</p>
          <div className="card-actions">
           <Link href='/'> <button className="btn btn-primary">Back to Home</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
