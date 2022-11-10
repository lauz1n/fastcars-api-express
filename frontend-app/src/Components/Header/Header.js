import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button } from "@mui/material"
import ElectricBoltSharpIcon from "@mui/icons-material/ElectricBoltSharp"
import { UserContext } from "../../UserContext"
import styles from "./Header.module.css"

const Header = () => {
  const { login, setLogin } = useContext(UserContext)
  const navigate = useNavigate()

  function userLogout() {
    window.localStorage.removeItem("token")
    setLogin(false)
    navigate("/")
    window.confirm("Tem certeza que deseja deslogar?")
  }

  return (
    <>
      <AppBar position="relative">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/" className={styles.logolink}>
            <ElectricBoltSharpIcon
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "35px",
              }}
            />
          </Link>

          <Typography color="white" style={{ textDecoration: "none" }}>
            {login ? (
              <Link to="/admin/dashboard" style={{ marginRight: "1rem" }}>
                Administrador
              </Link>
            ) : null}
            {login ? (
              <Button variant="contained" color="error" onClick={userLogout}>
                Logout
              </Button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
