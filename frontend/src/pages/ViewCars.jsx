import React from "react";
import { Link } from "react-router-dom";

export default function ViewCarsPage() {
  return (
    <>
      View Cars Page
      <Link to={"/terms-and-conditions"}>Term and Condition</Link>
    </>
  );
}
