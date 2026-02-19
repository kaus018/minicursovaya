import { useState } from "react"
import SurveyCard from "../components/SurveyCard"

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
    <main className="container">
      <section className="surveys-section">
        <h2>Доступные опросы</h2>

        <input
          className="search"
          type="text"
          placeholder="Поиск..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="card-grid">
          {filtered.map(survey => (
            <SurveyCard key={survey.id} survey={survey} />
          ))}
        </div>
      </section>
    </main>
  )
}
