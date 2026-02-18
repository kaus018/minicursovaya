import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  )

  const register = (email, password) => {
    const newUser = { email, password }
    localStorage.setItem("user", JSON.stringify(newUser))
    setUser(newUser)
  }

  const login = (email, password) => {
    const saved = JSON.parse(localStorage.getItem("user"))
    if (saved && saved.email === email && saved.password === password) {
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
