import React, { useContext } from "react"
import { AdminLogin } from "../index"
import { UserContext } from "../../UserContext"
import { Navigate } from "react-router-dom"

const AdminProtectedRoute = ({ children }) => {
  const { login } = useContext(UserContext)
  return login ? children : <Navigate to="/login" />
}

export default AdminProtectedRoute
