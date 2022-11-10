import React from "react"

import { Routes, Route } from "react-router-dom"
import { CarUpload, AdminDashboard } from "../index"

const Admin = () => {
  return (
    <section>
      <Routes>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="car/edit/:id" element={<CarUpload />} />
      </Routes>
    </section>
  )
}

export default Admin
