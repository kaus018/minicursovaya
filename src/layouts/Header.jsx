import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="header">
      <h2>Survey Platform</h2>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/surveys">Опросы</Link>
        <Link to="/about">О нас</Link>
        {user ? (
          <>
            <Link to="/profile">Профиль</Link>
            <button onClick={logout}>Выйти</button>
          </>
        ) : (
          <>
            <Link to="/login">Вход</Link>
            <Link to="/register">Регистрация</Link>
          </>
        )}
      </nav>
    </header>
  )
}
