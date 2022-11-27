import React, { useState, useEffect } from "react"
import {
  Button,
  Stack,
  Box,
  Container,
  TextField,
  CssBaseline,
  Typography,
} from "@mui/material"
import PhotoCamera from "@mui/icons-material/PhotoCamera"
import styles from "./CarUpload.module.css"
import { useParams, useNavigate } from "react-router-dom"

const CarUpload = () => {
  const [carImg, setCarImg] = useState({})
  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [price, setPrice] = useState("")

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (params.id) {
      fetch("https://api-fastcars.herokuapp.com/api/product/cars/" + params.id)
        .then((response) => response.json())
        .then((data) => {
          setName(data.name)
          setBrand(data.brand)
          setModel(data.model)
          setPrice(data.price)
        })
    }
  }, [])

  const saveCar = async (formData) => {
    if (!params.id) {
      const response = await fetch("http://localhost:8000/api/product/create", {
        method: "POST",
        headers: {
          Authorization: "auth-token " + window.localStorage.getItem("token"),
        },
        body: formData,
      })

      //if (response.ok) {
      //window.location.reload()
      //}

      return
    }

    const newData = {
      brand,
      name,
      price,
      model,
    }

    const response = await fetch(
      "https://api-fastcars.herokuapp.com/api/product/cars/" + params.id,
      {
        method: "PATCH",
        headers: {
          Authorization: "auth-token " + window.localStorage.getItem("token"),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    )

    if (response.ok) {
      navigate("/admin/dashboard")
    }
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
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" mt={2}>
          {params.id ? "Edição de Carros" : "Cadastro de Carros"}{" "}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          className={styles.gridcontainer}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={1}
          >
            <Box sx={{ width: "900px" }}>
              <TextField
                label="Nome"
                fullWidth
                margin="normal"
                size="small"
                id="name"
                name="name"
                onChange={(e) => setName(e.currentTarget.value)}
                value={name}
              />

              <TextField
                label="Marca"
                fullWidth
                margin="normal"
                size="small"
                id="brand"
                name="brand"
                onChange={(e) => setBrand(e.currentTarget.value)}
                value={brand}
              />

              <TextField
                label="Modelo"
                fullWidth
                size="small"
                margin="normal"
                id="model"
                name="model"
                onChange={(e) => setModel(e.currentTarget.value)}
                value={model}
              />

              <TextField
                label="Preço"
                fullWidth
                margin="normal"
                size="small"
                id="price"
                name="price"
                onChange={(e) => setPrice(e.currentTarget.value)}
                value={price}
              />
            </Box>
          </Stack>
          <Stack
            direction="row"
            spacing={{ sm: 1 }}
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Button variant="contained" component="label" id="btn">
              <PhotoCamera />
              Escolha um Arquivo
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                name="img"
                onChange={handleImgChange}
              />
            </Button>

            <Button type="submit" variant="outlined" id="btn">
              {params.id ? "Confirmar Edição" : "Cadastrar"}
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  )
}
export default CarUpload
