import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  Header,
  Hero,
  AdminLogin,
  Footer,
  Admin,
  AdminProtectedRoute,
} from "./Components"
import { CssBaseline } from "@mui/material"
import { UserStorage } from "./UserContext"
import "./App.css"

const App = () => {
  return (
    <Router>
      <UserStorage>
        <CssBaseline />
        <Header />
        <main className="App">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="login/*" element={<AdminLogin />} />

            <Route
              path="admin/*"
              element={
                <AdminProtectedRoute>
                  <Admin />
                </AdminProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </UserStorage>
    </Router>
  )
}

export default App
