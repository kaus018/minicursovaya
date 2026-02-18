import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { logout } from "../context/AuthContext"

export default function Profile() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"))
    if (!savedUser) {
      navigate("/login")
    } else {
      setUser(savedUser)
    }
  }, [])

  if (!user) return null

  return (
    <div className="container">
      <h2>Профиль пользователя</h2>
      <p>Email: {user.email}</p>
      <button onClick={() => { logout(); navigate("/login") }}>
        Выйти
      </button>
    </div>
  )
}
