import { useParams } from "react-router-dom"

export default function SurveyDetails() {
  const { id } = useParams()

  return (
    <div>
      <h2>Survey #{id}</h2>
      <p>Здесь будет описание опроса</p>
    </div>
  )
}
