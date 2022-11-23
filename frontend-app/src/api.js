export const API_USER_URL = "https://api-fastcars.herokuapp.com/api/user"
export const API_CAR_URL = "https://api-fastcars.herokuapp.com/api/product"

export function GET_ALL_CARS() {
  return {
    url: API_CAR_URL + "/cars",
    options: {
      method: "GET",
      cache: "no-store",
    },
  }
}

export function USER_GET(body) {
  return {
    url: API_USER_URL,
    options: {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  }
}

export function USER_POST(body) {
  return {
    url: API_USER_URL + "/login",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  }
}
