import React from "react";
import Headerr from "../../components/Headerr";
import Sidebar from "../../components/Sidebar";

function AccountSettings() {
  return (
    <div className="min-h-screen flex flex-col">
      <Headerr />
      <div className="flex flex-1">
        <Sidebar />
      </div>
    </div>
  );
}
export default AccountSettings;
