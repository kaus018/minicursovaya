// // import { useState } from "react"
// // import { Link } from "react-router-dom"

// // const surveys = [
// //   { id: 1, category: "Студенты", title: "Удовлетворены ли вы качеством обучения?" },
// //   { id: 2, category: "Студенты", title: "Хватает ли практических занятий?" },
// //   { id: 3, category: "Студенты", title: "Как вы оцениваете нагрузку?" },

// //   { id: 4, category: "Спортзал", title: "Довольны ли вы оборудованием?" },
// //   { id: 5, category: "Спортзал", title: "Удобное ли расписание тренировок?" },
// //   { id: 6, category: "Спортзал", title: "Достаточно ли тренеров?" },

// //   { id: 7, category: "Школа", title: "Нравится ли вам атмосфера в школе?" },
// //   { id: 8, category: "Школа", title: "Понятно ли объясняют учителя?" },
// //   { id: 9, category: "Школа", title: "Хватает ли внеурочных мероприятий?" },
// // ]

// // export default function SurveyList() {
// //   const [filter, setFilter] = useState("Все")

// //   const filtered = surveys.filter(s => {
// //     if (filter === "Все") return true
// //     return s.category === filter
// //   })

// //   return (
// //     <div className="container">
// //       <h2>Опросы</h2>

// //       <select onChange={e => setFilter(e.target.value)}>
// //         <option>Все</option>
// //         <option>Студенты</option>
// //         <option>Спортзал</option>
// //         <option>Школа</option>
// //       </select>

// //       {filtered.map(s => (
// //         <div className="card" key={s.id}>
// //           <strong>{s.category}</strong>
// //           <p>
// //             <Link to={`/surveys/${s.id}`}>{s.title}</Link>
// //           </p>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }




// // import { useState } from "react"
// // import { Link } from "react-router-dom"

// // const surveys = [
// //   { id: 1, title: "Fitness habits" },
// //   { id: 2, title: "Study preferences" },
// //   { id: 3, title: "Travel interests" },
// // ]

// // export default function SurveyList() {
// //   const [search, setSearch] = useState("")

// //   const filtered = surveys.filter(s =>
// //     s.title.toLowerCase().includes(search.toLowerCase())
// //   )

// //   return (
// //     <div className="container survey-list">
// //       <h2>Surveys</h2>
// //       <input
// //         placeholder="Search..."
// //         onChange={e => setSearch(e.target.value)}
// //       />

// //       {filtered.map(s => (
// //         <div className="card" key={s.id}>
// //           <Link to={`/surveys/${s.id}`}>{s.title}</Link>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }


// // import { useState } from "react"
// // import { Link } from "react-router-dom"

// // const surveys = [
// //   { id: 1, category: "Студенты", title: "Опрос студентов AITU" },
// //   { id: 2, category: "Спортзал", title: "Опрос спортзала" },
// //   { id: 3, category: "Школа", title: "Опрос школьников" },
// // ]

// // export default function SurveyList() {
// //   const [filter, setFilter] = useState("Все")

// //   const filtered = surveys.filter(s => filter === "Все" || s.category === filter)

// //   return (
// //     <div className="container">
// //       <h2>Опросы</h2>
// //       <select onChange={e => setFilter(e.target.value)}>
// //         <option>Все</option>
// //         <option>Студенты</option>
// //         <option>Спортзал</option>
// //         <option>Школа</option>
// //       </select>

// //       {filtered.map(s => (
// //         <div key={s.id} className="card">
// //           <strong>{s.category}</strong>
// //           <p><Link to={`/surveys/${s.id}`}>{s.title}</Link></p>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }



// import { useState } from "react"
// import { Link } from "react-router-dom"

// const surveys = [
//   { id: 1, title: "Проверка удовлетворенности студентов", img: "/images/survey1.jpg" },
//   { id: 2, title: "Опрос о занятиях спортом", img: "/images/survey2.jpg" },
//   { id: 3, title: "Исследование школьных привычек", img: "/images/survey3.jpg" },
// ]

// export default function SurveyList() {
//   const [search, setSearch] = useState("")

//   const filtered = surveys.filter(s => s.title.toLowerCase().includes(search.toLowerCase()))

//   return (
//     <div className="container">
//       <h2>Доступные опросы</h2>
//       <input
//         type="text"
//         placeholder="Поиск по опросам..."
//         value={search}
//         onChange={e => setSearch(e.target.value)}
//         style={{padding:"8px", width:"300px", marginBottom:"20px"}}
//       />
//       <div className="survey-grid" style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
//         {filtered.map(s => (
//           <div key={s.id} className="card" style={{border:"1px solid #ccc", borderRadius:"10px", padding:"10px", width:"250px"}}>
//             <img src={s.img} alt={s.title} style={{width:"100%", borderRadius:"10px"}} />
//             <h3>{s.title}</h3>
//             <Link to={`/surveys/${s.id}`}>
//               <button>Пройти опрос</button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }




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
    <div className="container">
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
    </div>
  )
}
