// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ConsignmentPage from "./ConsignmentPage";
import PolicyDetail from "./PolicyDetail";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/consignment" element={<ConsignmentPage />} />
      <Route path="/policy/:id" element={<PolicyDetail />} />
    </Routes>
  );
}

export default App;
