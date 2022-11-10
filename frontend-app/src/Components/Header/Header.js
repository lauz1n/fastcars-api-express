import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button } from "@mui/material"
import ElectricBoltSharpIcon from "@mui/icons-material/ElectricBoltSharp"
import { UserContext } from "../../UserContext"

const Header = () => {
  const { login } = useContext(UserContext)

  return (
    <>
      <AppBar position="relative">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <ElectricBoltSharpIcon
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "35px",
              }}
            />
          </Link>

          <Typography color="white" style={{ textDecoration: "none" }}>
            <Link to="/login">Login</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
