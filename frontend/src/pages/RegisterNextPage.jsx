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
