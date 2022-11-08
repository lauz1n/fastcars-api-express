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

const Car = ({ name, brand, model, price, imgName, img, _id }) => {
  async function deleteCar(_id) {
    const response = await fetch(
      `http://localhost:8000/api/product/cars/${_id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "auth-token" + window.localStorage.getItem("token"),
        },
      }
    )
    if (response.ok) {
      window.location.reload()
    }
  }
  return (
    <Container maxWidth="md" align="center">
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
              <Button variant="contained">Edit</Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => deleteCar(_id)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Car
