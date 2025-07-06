import React from "react";
import { Link } from "react-router-dom";

export default function RegisterNextPage() {
  return (
    <>
      Register Next Page
      <Link to={"/terms-and-conditions"}>Term and Condition</Link>
    </>
  );
}




type="button"
onClick={() => setOpen(false)}
className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-600 sm:ml-3 sm:w-auto"