import React from "react"
import Cards from "../Cards/Cards"
import { Head } from "../index"
import { Container } from "@mui/material"

const Hero = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: "20px" }}>
        <Head title="Início" />
        <Cards />
      </Container>
    </>
  )
}

export default Hero
