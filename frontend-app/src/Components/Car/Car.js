import React from "react"
import {
  Button,
  Container,
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material"
import styles from "./Car.module.css"
import { useNavigate } from "react-router-dom"

const Car = ({ name, brand, model, price, imgName, img, id }) => {
  const navigate = useNavigate()

  async function deleteCar() {
    if (window.confirm("Tem certeza que deseja deletar " + name)) {
      const response = await fetch(
        `http://localhost:8000/api/product/cars/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "auth-token " + window.localStorage.getItem("token"),
          },
        }
      )
      if (response.ok) {
        window.location.reload()
      }
    }
  }

  function handleEdit() {
    navigate("/admin/car/edit/" + id)
  }

  return (
    <Container
      maxWidth="md"
      align="center"
      sx={{ height: "100%", marginTop: "30px " }}
    >
      <Grid container columns={{ colSpan: "2" }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
            }}
          >
            <CardContent styles={{ flexGrow: "1" }}>
              <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
                {name} {brand} {model}
              </Typography>
              <img src={img} alt={imgName} />
              <Typography sx={{ fontSize: "24px" }}>R$ {price}</Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Button onClick={handleEdit} variant="contained">
                Editar
              </Button>
              <Button variant="outlined" color="error" onClick={deleteCar}>
                Deletar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Car
