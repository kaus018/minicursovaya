import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  )

  const register = (email, password, username) => {
    const newUser = { email, password, username }
    localStorage.setItem("user", JSON.stringify(newUser))
    setUser(newUser)
  }

  const login = (username, password) => {
    const saved = JSON.parse(localStorage.getItem("user"))
    if (saved && saved.username === username && saved.password === password) {
      setUser(saved)
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
