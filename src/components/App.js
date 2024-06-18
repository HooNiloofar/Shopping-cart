"use client";
import React from "react";
import Navbar from "./Navbar";
export default function App({ children }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main>{children}</main>
    </div>
  );
}
