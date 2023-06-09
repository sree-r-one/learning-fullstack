import React, { useEffect } from "react";
import { useStateContext } from "./contexts/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import "./App.css";
import { useState } from "react";
import { Navbar, Footer, Sidebar, ThemeSettings, Tooltip } from "./components";
import {
  ReactTable,
  Line,
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Troubleshooting,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";

const App = () => {
  // destructure context from useStateContext
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="dark:main-dark-bg relative flex">
          {/* Settings Gear */}
          <div className="fixed bottom-4 right-4 z-50">
            <Tooltip message={"Settings"}>
              <div
                className="transform rounded-full  p-2 text-3xl drop-shadow-sm transition duration-300 ease-in-out hover:rotate-45 hover:text-blue-800 hover:drop-shadow-md hover:delay-200"
                style={{ background: "white" }}
              >
                <FiSettings />
              </div>
            </Tooltip>
          </div>
          {/* Sidebar */}
          <div
            className={`dark:bg-secondary-dark-bg fixed bg-white transition-all duration-200 ease-in-out ${
              activeMenu ? "w-64" : "w-0"
            }`}
          >
            <Sidebar />
          </div>

          {/* NavBar */}
          <div
            className={`dark:bg-main-bg bg-main-bg w-full transition-all duration-100 ease-in-out ${
              activeMenu ? "min-h-screen md:ml-64" : "flex-2"
            }`}
          >
            {/* <div className="bg-main-bg dark:bg-main-dark-bg navbar fixed w-full md:static"> */}
            <div className="bg-main-bg dark:bg-main-dark-bg navbar fixed w-full">
              <Navbar />
            </div>

            {/* Routes */}
            <div className="mt-12">
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/react-table" element={<ReactTable />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/troubleshooting" element={<Troubleshooting />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
