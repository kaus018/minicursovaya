import { useState } from "react"
import { Link } from "react-router-dom"

const surveys = [
  { id: 1, category: "Студенты", title: "Удовлетворены ли вы качеством обучения?" },
  { id: 2, category: "Студенты", title: "Хватает ли практических занятий?" },
  { id: 3, category: "Студенты", title: "Как вы оцениваете нагрузку?" },

  { id: 4, category: "Спортзал", title: "Довольны ли вы оборудованием?" },
  { id: 5, category: "Спортзал", title: "Удобное ли расписание тренировок?" },
  { id: 6, category: "Спортзал", title: "Достаточно ли тренеров?" },

  { id: 7, category: "Школа", title: "Нравится ли вам атмосфера в школе?" },
  { id: 8, category: "Школа", title: "Понятно ли объясняют учителя?" },
  { id: 9, category: "Школа", title: "Хватает ли внеурочных мероприятий?" },
]

export default function SurveyList() {
  const [filter, setFilter] = useState("Все")

  const filtered = surveys.filter(s => {
    if (filter === "Все") return true
    return s.category === filter
  })

  return (
    <div className="container">
      <h2>Опросы</h2>

      <select onChange={e => setFilter(e.target.value)}>
        <option>Все</option>
        <option>Студенты</option>
        <option>Спортзал</option>
        <option>Школа</option>
      </select>

      {filtered.map(s => (
        <div className="card" key={s.id}>
          <strong>{s.category}</strong>
          <p>
            <Link to={`/surveys/${s.id}`}>{s.title}</Link>
          </p>
        </div>
      ))}
    </div>
  )
}




// import { useState } from "react"
// import { Link } from "react-router-dom"

// const surveys = [
//   { id: 1, title: "Fitness habits" },
//   { id: 2, title: "Study preferences" },
//   { id: 3, title: "Travel interests" },
// ]

// export default function SurveyList() {
//   const [search, setSearch] = useState("")

//   const filtered = surveys.filter(s =>
//     s.title.toLowerCase().includes(search.toLowerCase())
//   )

//   return (
//     <div className="container survey-list">
//       <h2>Surveys</h2>
//       <input
//         placeholder="Search..."
//         onChange={e => setSearch(e.target.value)}
//       />

//       {filtered.map(s => (
//         <div className="card" key={s.id}>
//           <Link to={`/surveys/${s.id}`}>{s.title}</Link>
//         </div>
//       ))}
//     </div>
//   )
// }


