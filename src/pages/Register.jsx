import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    register(email, password)
    navigate("/profile")
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
     <input
  type="email"
  placeholder="Email"
  required
  onChange={e => setEmail(e.target.value)}
/>

      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button>Register</button>
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

  register(email, password)
  navigate("/profile")
}
