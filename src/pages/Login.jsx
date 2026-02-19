import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { login } = useAuth()   // ВОТ ОТСЮДА БЕРЁМ

  const handleSubmit = (e) => {
    e.preventDefault()

    const success = login(email, password)
    if (success) navigate("/profile")
    else alert("Неверные данные")
  }

  return (
    <main className="container">
      <section className="auth-section">
        <h2>Вход</h2>
        <form onSubmit={handleSubmit}>
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
        <button type="submit">Войти</button>
      </form>
      </section>
    </main>
  )
}
