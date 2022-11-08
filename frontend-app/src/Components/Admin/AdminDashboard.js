import React, { useState, useEffect } from "react"
import { Container } from "@mui/material"
import { Car, SelectByPrice, CarUpload } from "../index"

export function sortByPrice(filter, cars) {
  if (filter === "low") {
    return cars.sort((car, nextCar) => car.price - nextCar.price)
  }

  return cars.sort((car, nextCar) => nextCar.price - car.price)
}

const AdminDashboard = () => {
  const [cars, setCars] = useState([])
  const [filter, setFilter] = useState("low")

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

  useEffect(() => {
    const carsFiltered = sortByPrice(filter, cars)
    setCars([...carsFiltered])
    console.log("test")
  }, [filter])

  function handleFilter(event) {
    const value = event.currentTarget.value
    setFilter(value)
  }

  return (
    <>
      <SelectByPrice onChange={handleFilter} />

      <CarUpload />

      <Container maxWidth="md" sx={{ marginTop: "30px" }}>
        <div>
          {cars.map((car) => {
            const b64encoded = btoa(
              new Uint8Array(car.img.data.data).reduce(function (data, byte) {
                return data + String.fromCharCode(byte)
              }, "")
            )
            return (
              <Car
                key={car.id}
                name={car.name}
                model={car.model}
                brand={car.brand}
                price={car.price}
                img={`data:image/png;base64, ${b64encoded}`}
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
