import { useState } from "react"
import SurveyCard from "../components/SurveyCard"
import { Link } from "react-router-dom"

const surveys = [
  {
    id: 1,
    title: "Опрос студентов AITU",
    description: "Удовлетворенность обучением и кампусом",
    img: "/images/survey1.jpg"
  },
  {
    id: 2,
    title: "Опрос посетителей спортзала",
    description: "Качество оборудования и тренировок",
    img: "/images/survey2.jpg"
  },
  {
    id: 3,
    title: "Опрос школьников",
    description: "Отношение к учебной нагрузке",
    img: "/images/survey3.jpg"
  }
]

export default function SurveyList() {
  const [search, setSearch] = useState("")

  const filtered = surveys.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="container surveys-page">
      <header className="surveys-header">
        <div>
          <h1>Доступные опросы</h1>
          <p className="surveys-subtitle">Найдите и пройдите интересующие вас опросы</p>
        </div>
        <div className="surveys-count">
          <span className="count-badge">{filtered.length}</span>
          <span className="count-label">опросов</span>
        </div>
      </header>

      <section className="surveys-search">
        <input
          className="search-input"
          type="text"
          placeholder="Поиск опроса..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </section>

      {filtered.length > 0 ? (
        <section className="card-grid surveys-grid">
          {filtered.map(survey => (
            <SurveyCard key={survey.id} survey={survey} />
          ))}
        </section>
      ) : (
        <section className="no-surveys">
          <h3>Опросы не найдены</h3>
          <p>Попробуйте использовать другое ключевое слово</p>
        </section>
      )}
    </main>
  )
}
