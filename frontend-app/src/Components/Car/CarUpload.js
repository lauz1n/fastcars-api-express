import React, { useState } from "react"
import { Button, Stack, Box, Container } from "@mui/material"
import PhotoCamera from "@mui/icons-material/PhotoCamera"

const CarUpload = () => {
  const [carImg, setCarImg] = useState({})
  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [price, setPrice] = useState("")

  const saveCar = async (formData) => {
    const response = await fetch("http://localhost:8000/api/product/create", {
      method: "POST",
      headers: {
        Authorization: "auth-token" + window.localStorage.getItem("token"),
      },
      body: formData,
    })

    console.log(await response.json())
  }

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData()
    formData.append("carImg", carImg.raw)
    formData.append("name", name)
    formData.append("brand", brand)
    formData.append("model", model)
    formData.append("price", price)

    saveCar(formData, window.localStorage.getItem("token"))
  }

  function handleImgChange({ target }) {
    setCarImg({
      raw: target.files[0],
    })
  }

  return (
    <>
      <Container maxWidth="md">
        <Box component="form" onSubmit={handleSubmit}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
          >
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              name="name"
              onChange={(e) => setName(e.currentTarget.value)}
              value={name}
            />
            <label htmlFor="brand">Marca</label>
            <input
              id="brand"
              name="brand"
              onChange={(e) => setBrand(e.currentTarget.value)}
              value={brand}
            />
            <label htmlFor="model">Modelo</label>
            <input
              id="model"
              name="model"
              onChange={(e) => setModel(e.currentTarget.value)}
              value={model}
            />
            <label htmlFor="price">Preço</label>
            <input
              id="name"
              name="price"
              onChange={(e) => setPrice(e.currentTarget.value)}
              value={price}
            />

            <Button variant="contained" component="label">
              Foto <PhotoCamera />
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                name="img"
                onChange={handleImgChange}
              />
            </Button>

            <button type="submit">Cadastrar</button>
          </Stack>
        </Box>
      </Container>
    </>
  )
}
export default CarUpload
