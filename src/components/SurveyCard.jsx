import { Link } from "react-router-dom"

export default function SurveyCard({ survey }) {
  return (
    <div className="card">
      <img src={survey.img} alt={survey.title} style={{ width: "100%", borderRadius: "10px" }} />
      <h3>{survey.title}</h3>
      <p>{survey.description}</p>
      <Link to={`/surveys/${survey.id}`}>
        <button>Пройти опрос</button>
      </Link>
    </div>
  )
}
