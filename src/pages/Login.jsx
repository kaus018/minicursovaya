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

    const success = login(username, password)
    if (success) navigate("/")
    else alert("Неверные данные")
  }

  return (
    <main className="container">
      <section className="auth-section">
        <h2>Вход</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" 
        placeholder="Username"
         required onChange={e => setUsername(e.target.value)}
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
