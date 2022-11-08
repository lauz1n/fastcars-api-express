import React from "react"
import styles from "./Footer.module.css"
import { Typography } from "@mui/material"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Typography variant="h6" align="center" color="white">
        Desenvolvido por Samuel Ventura
      </Typography>
      <Typography variant="h8" align="center" color="white">
        Alguns direitos reservados
      </Typography>
    </footer>
  )
}

export default Footer
