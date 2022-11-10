import React, { useState } from "react"
import { USER_POST } from "./api"
import { useNavigate } from "react-router-dom"

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const [login, setLogin] = useState(!!window.localStorage.getItem("token"))

  const navigate = useNavigate()

  async function userLogin(name, username, password) {
    try {
      const { url, options } = USER_POST({ name, username, password })
      const tokenRes = await fetch(url, options)
      if (!tokenRes) throw new Error("Invalid login")
      const { token } = await tokenRes.json()
      setLogin(true)
      window.localStorage.setItem("token", token)
      navigate("/admin/dashboard")
    } catch (err) {
      setLogin(false)
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, login, setLogin }}>
      {children}
    </UserContext.Provider>
  )
}
