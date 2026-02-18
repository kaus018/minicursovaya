// import { useParams } from "react-router-dom"

// export default function SurveyDetails() {
//   const { id } = useParams()

//   return (
//     <div>
//       <h2>Survey #{id}</h2>
//       <p>Здесь будет описание опроса</p>
//     </div>
//   )
// }
import { useParams } from "react-router-dom"
import { useState } from "react"

export default function SurveyDetails() {
  const { id } = useParams()

  // Пример вопросов
  const questions = [
    { text: "Насколько вам нравится наша платформа?", options: ["Отлично", "Хорошо", "Средне", "Плохо"], votes: [0,0,0,0] },
    { text: "Хотите ли вы больше функций?", options: ["Да", "Нет"], votes: [0,0] }
  ]

  const [qData, setQData] = useState(questions)

  const handleVote = (qIndex, oIndex) => {
    const newData = [...qData]
    newData[qIndex].votes[oIndex] += 1
    setQData(newData)
    localStorage.setItem(`survey-${id}`, JSON.stringify(newData))
  }

  return (
    <div className="container">
      <h2>Опрос №{id}</h2>

      {qData.map((q, i) => {
        const total = q.votes.reduce((a,b)=>a+b, 0)
        return (
          <div key={i} style={{marginBottom:"30px"}}>
            <h3>{q.text}</h3>
            <div>
              {q.options.map((o, j) => {
                const percent = total === 0 ? 0 : Math.round((q.votes[j]/total)*100)
                return (
                  <div key={j} style={{marginBottom:"8px"}}>
                    <button onClick={()=>handleVote(i,j)}>{o}</button>
                    <div style={{height:"10px", background:"#ccc", width:"100%", borderRadius:"5px", marginTop:"4px"}}>
                      <div style={{width:`${percent}%`, background:"#4caf50", height:"100%", borderRadius:"5px"}}></div>
                    </div>
                    <small>{percent}%</small>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
