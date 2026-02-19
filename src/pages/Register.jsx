import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Register() {
  const [username , setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { register, login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Введите корректный email")
      return
    }

    register(email, password, username)
    const success = login(username, password)
    if (success) {
      navigate("/")
    }
  }

  return (
    <main className="container">
      <section className="auth-section">
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            required
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            required
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </section>
    </main>
  )
}