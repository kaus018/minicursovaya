import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Profile() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <div className="container">
      <h2>Профиль</h2>
      <p>Email: {user?.email}</p>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  )
}
