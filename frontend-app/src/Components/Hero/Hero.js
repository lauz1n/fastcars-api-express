import React from "react"
import Cards from "../Cards/Cards"
import { Container, Typography } from "@mui/material"

const Hero = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: "20px" }}>
        <Cards />
      </Container>
    </>
  )
}

export default Hero
