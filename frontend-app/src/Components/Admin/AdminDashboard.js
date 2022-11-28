import React, { useState, useEffect } from "react"
import { Container } from "@mui/material"
import { Car, SelectByPrice, CarUpload, Head } from "../index"

export function sortByPrice(filter, cars) {
  if (filter === "low") {
    return cars.sort((car, nextCar) => car.price - nextCar.price)
  }
  return cars.sort((car, nextCar) => nextCar.price - car.price)
}

const AdminDashboard = () => {
  const [cars, setCars] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    async function getCars() {
      const response = await fetch(
        "https://fastcars-api-express.onrender.com/api/product/cars",
        {
          method: "GET",
          headers: {
            cache: "no-store",
          },
        }
      )
      const data = await response.json()

      setCars(data)
    }
    getCars()
  }, [])

  useEffect(() => {
    const carsFiltered = sortByPrice(filter, cars)
    setCars([...carsFiltered])
  }, [filter])

  function handleFilter(event) {
    const value = event.currentTarget.value
    setFilter(value)
  }

  return (
    <>
      <Head title="Admin Dashboard" />
      <CarUpload />
      <SelectByPrice onChange={handleFilter} />

      <Container maxWidth="md" sx={{ marginTop: "30px" }}>
        <div>
          {cars.map((car) => {
            return (
              <Car
                key={car._id}
                id={car._id}
                name={car.name}
                model={car.model}
                brand={car.brand}
                price={car.price}
                img={car.img}
                alt={car.alt}
              />
            )
          })}
        </div>
      </Container>
    </>
  )
}

export default AdminDashboard
