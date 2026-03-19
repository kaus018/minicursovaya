# Survey App - Полное приложение для опросов

Это полностью функциональное веб-приложение для создания и прохождения опросов с использованием современных технологий.

## 🎯 Что это такое?

Survey App - это платформа для:
- 📋 Создания пользовательских опросов
- ✏️ Ответов на опросы других пользователей
- 📊 Просмотра статистики опросов
- 👤 Управления профилем пользователя

## 🏗️ Архитектура проекта

### Frontend (React + Vite)
- **Технологии**: React 19, React Router 7, Axios
- **Структура**: Компоненты, Pages, Context API для управления состоянием

### Backend (Node.js + Express)
- **Технологии**: Express.js, MongoDB, Mongoose, JWT, bcrypt
- **Архитектура**: MVC-подход (Models, Controllers, Routes)
- **Аутентификация**: JWT токены

## 🚀 Быстрый старт

### Предварительные требования
- Node.js 14+ 
- MongoDB (локально или Docker)
- npm/yarn

### Шаг 1: Установка MongoDB

**Option A - Homebrew (Mac)**:
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Option B - Docker**:
```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

**Проверка**:
```bash
mongosh  # Должна открыться интерактивная оболочка
```

### Шаг 2: Запуск Backend

```bash
cd backend
npm install
node seed.js          # Создать тестовые данные (опционально)
npm run dev           # Запустить в режиме разработки
```

✅ Backend должен запуститься на **http://localhost:5000**

### Шаг 3: Запуск Frontend

В отдельном терминале:
```bash
npm install
npm run dev
```

✅ Frontend должен запуститься на **http://localhost:5173**

## 👤 Тестовые аккаунты

Если вы запустили `node seed.js`:

| Username | Email | Пароль |
|----------|-------|--------|
| admin | admin@example.com | admin123 |
| testuser | test@example.com | test123 |

## 📚 API Endpoints

### Аутентификация
- `POST /api/auth/register` - Регистрация
- `POST /api/auth/login` - Вход
- `GET /api/auth/profile` - Получить профиль (требует авторизация)

### Опросы
- `GET /api/surveys` - Получить все опросы
- `GET /api/surveys/:id` - Получить один опрос
- `POST /api/surveys` - Создать опрос (требует авторизация)
- `PUT /api/surveys/:id` - Обновить опрос (требует авторизация)
- `DELETE /api/surveys/:id` - Удалить опрос (требует авторизация)
- `POST /api/surveys/:id/respond` - Ответить на опрос (требует авторизация)
- `GET /api/surveys/:id/responses` - Получить все ответы (требует авторизация)

## 🔑 Функциональность

### ✅ Реализовано

**Аутентификация**
- ✓ Регистрация новых пользователей
- ✓ Вход в систему
- ✓ JWT токены (7 дней)
- ✓ Хеширование паролей (bcrypt)
- ✓ Защита маршрутов

**Опросы - CRUD операции**
- ✓ Создание опросов
- ✓ Получение списка всех опросов
- ✓ Получение деталей одного опроса
- ✓ Обновление опросов (только автором)
- ✓ Удаление опросов (только автором)

**Участие в опросах**
- ✓ Прохождение опросов
- ✓ Сохранение ответов
- ✓ Просмотр результатов

**Профиль пользователя**
- ✓ Просмотр информации профиля
- ✓ Просмотр статистики (количество пройденных опросов)
- ✓ Список пройденных опросов

## 🗂️ Структура файлов

```
my-survey-app/
├── backend/                    # Node.js + Express сервер
│   ├── config/
│   │   └── db.js              # MongoDB подключение
│   ├── models/
│   │   ├── User.js            # Модель пользователя
│   │   └── Survey.js          # Модель опроса
│   ├── controllers/
│   │   ├── authController.js  # Логика аутентификации
│   │   └── surveyController.js # Логика опросов
│   ├── routes/
│   │   ├── authRoutes.js      # API маршруты аутентификации
│   │   └── surveyRoutes.js    # API маршруты опросов
│   ├── middleware/
│   │   └── auth.js            # Проверка JWT токена
│   ├── server.js              # Главный файл сервера
│   ├── seed.js                # Создание тестовых данных
│   ├── package.json
│   ├── .env                   # Переменные окружения
│   └── README.md              # Документация backend
│
└── src/                        # React приложение
    ├── context/
    │   └── AuthContext.jsx    # Управление состоянием аутентификации
    ├── pages/
    │   ├── Home.jsx
    │   ├── Login.jsx
    │   ├── Register.jsx
    │   ├── Profile.jsx
    │   ├── SurveyList.jsx
    │   ├── SurveyDetails.jsx
    │   └── About.jsx
    ├── components/
    │   ├── PrivateRoute.jsx   # Защита маршрутов
    │   └── SurveyCard.jsx     # Компонент карточки опроса
    ├── layouts/
    │   ├── Header.jsx         # Навигация
    │   └── Footer.jsx
    ├── styles/
    │   └── main.css
    ├── App.jsx
    └── main.jsx
```

## 🔒 Безопасность

- ✓ Пароли хешируются с bcrypt
- ✓ JWT токены для аутентификации
- ✓ CORS кросс-доменная политика
- ✓ Защита маршрутов от неавторизованного доступа
- ✓ Разовое использование токена per request

## 🐛 Решение проблем

### MongoDB не подключается
```bash
# Проверить статус MongoDB
brew services list

# Перезагрузить MongoDB
brew services restart mongodb-community
```

### CORS ошибки
Убедитесь что:
- Backend запущен на `http://localhost:5000`
- Frontend запущен на `http://localhost:5173`
- В `server.js` указаны правильные origins

### Ошибка "port already in use"
```bash
# Найти процесс на порту 5000
lsof -i :5000

# Убить процесс
kill -9 <PID>

# Или использовать другой порт в .env
PORT=5001
```

### Токен истекает
- Токен действует 7 дней
- Требуется повторная авторизация для нового токена

## 📖 Дополнительные команды

**Backend**
```bash
npm start      # Production
npm run dev    # Development с nodemon
```

**Frontend**
```bash
npm run build  # Собрать для production
npm run preview # Посмотреть production версию
npm run lint   # Проверить код
```

## 📝 Лицензия

MIT License

---

**Готово к защите! 🎉**

Успешной защиты проекта! Если что-то не работает - проверьте логи в консоли!