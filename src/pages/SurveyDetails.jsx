import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const surveyData = {
  1: {
    title: "Опрос студентов AITU",
    questions: [
      {
        text: "Нравится ли вам обучение в AITU?",
        options: ["Очень нравится", "Нормально", "Не нравится"],
        votes: [0, 0, 0]
      },
      {
        text: "Довольны ли вы расписанием?",
        options: ["Да", "Нет"],
        votes: [0, 0]
      }
    ]
  },
  2: {
    title: "Опрос спортзала",
    questions: [
      {
        text: "Довольны ли вы оборудованием?",
        options: ["Да", "Средне", "Нет"],
        votes: [0, 0, 0]
      }
    ]
  },
  3: {
    title: "Опрос школьников",
    questions: [
      {
        text: "Сложная ли учеба?",
        options: ["Очень", "Нормально", "Легко"],
        votes: [0, 0, 0]
      }
    ]
  }
}

export default function SurveyDetails() {
  const { id } = useParams()
  const storageKey = `survey-${id}`

  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ||
    surveyData[id].questions
  )

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(questions))
  }, [questions])

  const [lastClicked, setLastClicked] = useState(null)

  const handleVote = (qIndex, oIndex) => {
    const newData = [...questions]
    newData[qIndex].votes[oIndex] += 1
    setQuestions(newData)
    setLastClicked(`${qIndex}-${oIndex}`)
    setTimeout(() => setLastClicked(null), 300)
  }

  return (
    <main className="container">
      <section className="survey-section">
        <h2>{surveyData[id].title}</h2>

        {questions.map((q, qi) => {
          const total = q.votes.reduce((a, b) => a + b, 0)

          return (
            <article key={qi} className="card">
              <h3>{q.text}</h3>

              {q.options.map((opt, oi) => {
                const percent = total === 0
                  ? 0
                  : Math.round((q.votes[oi] / total) * 100)

                return (
                  <div key={oi} style={{ marginBottom: "12px" }}>
                    <button 
                      onClick={() => handleVote(qi, oi)}
                      className={lastClicked === `${qi}-${oi}` ? 'vote-pulse' : ''}
                    >
                      ✓ {opt}
                    </button>

                    <div className="progress">
                      <div
                        className="progress-fill"
                        style={{ width: `${percent}%` }}
                      />
                    </div>

                    <small>{percent}%</small>
                  </div>
                )
              })}
            </article>
          )
        })}
      </section>
    </main>
  )
}
