import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/surveys">Surveys</Link> | 
      <Link to="/profile">Profile</Link>
    </nav>
  )
}
