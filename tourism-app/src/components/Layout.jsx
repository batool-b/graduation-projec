import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import  Footer  from "./Footer";

const Layout = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-white" 
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* شريط التنقل العلوي - يظهر في كل الصفحات */}
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      {/* تذييل الصفحة - يظهر في كل الصفحات */}
      <Footer />
    </div>
  );
};

export default Layout;