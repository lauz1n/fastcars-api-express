import React, { useEffect, useState } from "react"
import styles from "./Cards.module.css"
import {
  Grid,
  Card,
  Container,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material"

import { sortByPrice } from "../Admin/AdminDashboard"
import { SelectByPrice } from "../index"

function createImage(car) {
  return btoa(
    new Uint8Array(car.img.data.data).reduce(function (data, byte) {
      return data + String.fromCharCode(byte)
    }, "")
  )
}

const Cards = () => {
  const [cars, setCars] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    const carsFiltered = sortByPrice(filter, cars)
    setCars([...carsFiltered])
  }, [filter])

  useEffect(() => {
    async function getCars() {
      const response = await fetch("http://localhost:8000/api/product/cars", {
        method: "GET",
        headers: {
          cache: "no-store",
        },
      })
      const data = await response.json()

      setCars(data)
    }
    getCars()
  }, [])

  function handleFilter(event) {
    const value = event.currentTarget.value
    setFilter(value)
  }

  return (
    <>
      <SelectByPrice onChange={handleFilter} />
      <Container maxWidth="md" className={styles.cardGrid}>
        <Grid container spacing={4}>
          {cars.map((car) => (
            <Grid item key={car._id} xs={12} sm={6} md={4}>
              <Card className={styles.car}>
                <CardMedia
                  component="img"
                  variant="outlined"
                  className="cardMedia"
                  image={`data:image/png;base64, ${createImage(car)}`}
                  title="Image Title"
                />
                <CardContent className={styles.cardContent}>
                  <Typography variant="h6" gutterBottom>
                    {car.name} {car.brand} {car.model}
                  </Typography>
                  <Typography>R$ {car.price}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Cards
