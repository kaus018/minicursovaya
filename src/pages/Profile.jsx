import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const surveys = [
  { id: 1, title: "Опрос студентов AITU" },
  { id: 2, title: "Опрос посетителей спортзала" },
  { id: 3, title: "Опрос школьников" }
]

export default function Profile() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [votedSurveys, setVotedSurveys] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const voted = []
    surveys.forEach(survey => {
      const storageKey = `survey-${survey.id}`
      if (localStorage.getItem(storageKey)) {
        voted.push(survey)
      }
    })
    setVotedSurveys(voted)
    setLoading(false)
  }, [])

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  if (loading) return <main><p>Загрузка...</p></main>

  if (!user) {
    return (
      <main className="container">
        <section className="auth-section">
          <h2>Требуется авторизация</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
          <button onClick={() => navigate("/login")}>Перейти к входу</button>
        </section>
      </main>
    )
  }

  return (
    <main className="container profile-main">
      <article className="profile-header">
        <img src="/images/Profile-PNG-File.png" alt="Profile" className="profile-avatar" />
        <div className="profile-info">
          <h1>Никнейм: {user?.username || "Не заполнен"}</h1>
          <p>Электронная почта: {user?.email || "Не указана"}</p>
        </div>
      </article>

      <section className="profile-stats">
        <div className="stat-item">
          <div className="stat-number">{votedSurveys.length}</div>
          <div className="stat-label">Проголосовано опросов</div>
        </div>
      </section>

      {votedSurveys.length > 0 && (
        <section className="profile-surveys">
          <h2>Проголосованные опросы</h2>
          <ul className="surveys-list">
            {votedSurveys.map(survey => (
              <li key={survey.id} className="survey-item">
                <span className="survey-title">{survey.title}</span>
                <span className="survey-badge">✓</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="profile-actions">
        <button onClick={handleLogout} className="logout-btn">Выйти</button>
      </div>
    </main>
  )
}
