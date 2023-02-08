import "./App.css";
import Movie from "./Component/Home/Movie";
import MovieDetail from "./Component/Home/MovieDetail";
import Header from "./Component/Layout/Header";
import Login from "./Component/Account/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
