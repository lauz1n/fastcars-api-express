import React, { useState, useContext } from "react"
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material"
import { UserContext } from "../../UserContext"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import styles from "./AdminLogin.module.css"
import { Head } from "../index"

const theme = createTheme()

const AdminLogin = () => {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { userLogin } = useContext(UserContext)

  async function handleSubmit(e) {
    e.preventDefault()
    userLogin(name, username, password)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs" className={styles.container}>
        <Head title="Login" />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              type="text"
              label="Nome"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name.value}
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              id="username"
              label="Usuário"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username.value}
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password.value}
              id="password"
              autoComplete="current-password"
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              type="submit"
            >
              LOGIN
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
export default AdminLogin
