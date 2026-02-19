import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Login() {
  const [password, setPassword] = useState("")
  const [username , setUsername] = useState("")
  const navigate = useNavigate()
  const { login } = useAuth()   // ВОТ ОТСЮДА БЕРЁМ

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!username.trim() || !password.trim()) {
      alert("Пожалуйста, заполните все поля")
      return
    }

    const success = login(username, password)
    if (success) {
      alert(`✓ Вход успешен!\n\nДобро пожаловать, ${username}!`)
      setUsername("")
      setPassword("")
      navigate("/")
    } else {
      alert("✗ Ошибка входа\n\nПользователь не найден или пароль неверный.\n\nПроверьте данные или зарегистрируйтесь.")
    }
  }

  return (
    <main className="container">
      <section className="auth-section">
        <h2>Вход</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Username"
            value={username}
            required 
            onChange={e => setUsername(e.target.value)}
          />
          <input 
            type="password"
            placeholder="Пароль"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />
        <button type="submit">Войти</button>
      </form>
      </section>
    </main>
  )
}
