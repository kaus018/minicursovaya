export default function SurveyList() {
  const [search, setSearch] = useState("")

  const filtered = surveys.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container survey-list">
      <h2>Surveys</h2>
      <input placeholder="Search..." onChange={e => setSearch(e.target.value)} />

      {filtered.map(s => (
        <div className="card" key={s.id}>
          <Link to={`/surveys/${s.id}`}>{s.title}</Link>
        </div>
      ))}
    </div>
  )
}
