export default function Profile() {
  const { user, logout } = useAuth()

  return (
    <div className="container">
      <div className="card">
        <h2>Profile</h2>
        <p>Email: {user.email}</p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}
