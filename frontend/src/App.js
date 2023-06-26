// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';

// Define the function that renders the content in routes using State.
function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState([]);

  return (
    <>
      <Router>

          <header>
            <h1>Fabiano's Exercise App</h1>
            <p>A full stack MERN app</p>
          </header>

          <Navigation />

          <main>
            <Route path="/" exact>
              <HomePage setExerciseToEdit={setExerciseToEdit} />
            </Route>

            <Route path="/add-exercise">
              <AddExercisePage />
            </Route>
            
            <Route path="/edit-exercise">
              <EditExercisePage exerciseToEdit={exerciseToEdit} />
            </Route>
          </main>

          <footer>
            <p>&copy; 2022 Fabiano Srur</p>
          </footer>

      </Router>
    </>
  );
}

export default App;