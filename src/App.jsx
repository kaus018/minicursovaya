import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SurveyList from './pages/SurveyList';
import SurveyDetails from './pages/SurveyDetails';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

const App = () => {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/surveys" element={<SurveyList />} />
          <Route path="/surveys/:id" element={<SurveyDetails />} />
        </Routes>
        <Footer />
      </Router>
  );
};

export default App;