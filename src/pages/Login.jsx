import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const success = login(email, password)
    if (success) navigate("/profile")
    else alert("Неверные данные")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
  type="email"
  placeholder="Email"
  required
  onChange={e => setEmail(e.target.value)}
/>

      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  )
}
const handleSubmit = e => {
  e.preventDefault()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email)) {
    alert("Введите корректный email")
    return
  }

  const success = login(email, password)
  if (success) navigate("/profile")
  else alert("Неверные данные")
}
