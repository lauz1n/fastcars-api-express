import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography } from "@mui/material"
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

          <Link to="/login">
            <Typography color="white" style={{ textDecoration: "none" }}>
              Login
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
