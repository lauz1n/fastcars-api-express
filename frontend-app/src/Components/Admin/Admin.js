import React, { useContext } from "react"

import { Routes, Route } from "react-router-dom"
import { CarUpload, AdminDashboard } from "../index"

const Admin = () => {
  return (
    <section>
      <Routes>
        <Route path="dashboard" element={<AdminDashboard />} />
      </Routes>
    </section>
  )
}

export default Admin
