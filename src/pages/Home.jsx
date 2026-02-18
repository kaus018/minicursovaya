import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="container">
      <section className="hero" style={{textAlign: "center"}}>
        <h1>Online Survey Platform</h1>
        <p>Создавайте, проходите и анализируйте онлайн-опросы</p>
        <img src="/images/hero-survey.png" alt="Hero Survey" style={{width:"80%", maxWidth:"600px", borderRadius:"10px"}} />
        <div style={{marginTop:"20px"}}>
          <Link to="/surveys">
            <button>Посмотреть опросы</button>
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Возможности платформы:</h2>
        <ul>
          <li>Просмотр списка опросов</li>
          <li>Прохождение опросов</li>
          <li>Сохранение результатов в браузере</li>
          <li>Регистрация и вход для отслеживания прогресса</li>
          <li>Фильтрация и сортировка опросов</li>
        </ul>
      </section>

      <section className="about">
        <h2>Для кого это полезно:</h2>
        <p>
          Платформа подходит для любых целей: учебные опросы, опросы для бизнеса, исследования аудитории и личные проекты.
        </p>
      </section>
    </div>
  )
}
