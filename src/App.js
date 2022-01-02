import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ExerciseList from './components/exercise.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from "./components/create-exercise.component"
import CreateUser from './components/create-user.component';
import Navbar from './components/navbar.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
      <Routes>
      <Route path="/" element={<ExerciseList />}> </Route>
      <Route path="/edit" element={<EditExercise/>} />
      <Route path="/create" element={<CreateExercise />}/>
      <Route path="/user" element={<CreateUser/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
