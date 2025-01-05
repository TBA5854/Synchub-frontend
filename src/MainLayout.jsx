import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
const MainLayout = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(355deg, rgb(48 66 103) 7%, rgb(143 83 142) 98%)",
      }}
      className="flex flex-row p-12 w-full min-h-screen gap-6"
    >
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
