import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])

  // Загружаем данные при монтировании
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || []
    const savedCurrentUser = JSON.parse(localStorage.getItem("currentUser")) || null
    setUsers(savedUsers)
    setUser(savedCurrentUser)
  }, [])

  const register = (email, password, username) => {
    // Проверяем, не существует ли уже такой пользователь
    const existingUser = users.find(u => u.username === username || u.email === email)
    if (existingUser) {
      return false
    }

    const newUser = { id: Date.now(), email, password, username }
    const updatedUsers = [...users, newUser]
    localStorage.setItem("users", JSON.stringify(updatedUsers))
    setUsers(updatedUsers)
    return true
  }

  const login = (username, password) => {
    const found = users.find(u => u.username === username && u.password === password)
    if (found) {
      localStorage.setItem("currentUser", JSON.stringify(found))
      setUser(found)
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem("currentUser")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
