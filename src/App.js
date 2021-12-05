import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import HomePage from './pages/HomePage.jsx'
import PostsPage from './pages/PostsPage';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/Posts"element={<PostsPage />}>
              <Route path=":userId"element={<PostsPage />} />
            </Route >
            <Route path="/" element={<HomePage />} />
        </Routes>
    </Router>
  );
}

export default App;
