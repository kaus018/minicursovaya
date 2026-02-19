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

    if (!username.trim()) {
      alert("Введите имя пользователя")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Введите корректный email")
      return
    }

    if (password.length < 3) {
      alert("Пароль должен быть не менее 3 символов")
      return
    }

    const success = register(email, password, username)
    if (!success) {
      alert("✗ Ошибка регистрации\n\nПользователь с таким именем или email уже существует!")
      return
    }
    
    const loginSuccess = login(username, password)
    if (loginSuccess) {
      alert(`✓ Регистрация успешна!\n\nДобро пожаловать, ${username}!`)
      setUsername("")
      setEmail("")
      setPassword("")
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
            value={username}
            required
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </section>
    </main>
  )
}