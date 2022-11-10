import React from "react"
import { Container, InputLabel } from "@mui/material"
import ElectricBoltSharpIcon from "@mui/icons-material/ElectricBoltSharp"

export default function SelectByPrice({ onChange }) {
  return (
    <Container
      maxWidth="md"
      sx={{
        width: "200px",
        marginBottom: "1rem",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: "12px" }}>
          <InputLabel>Filtro</InputLabel>
        </div>
        <select style={{ padding: "12px" }} onChange={onChange}>
          <option value="none" disabled>
            Selecione um filtro
          </option>
          <option value="high">Maior preço</option>
          <option value="low">Menor preço</option>
        </select>
      </div>
    </Container>
  )
}
