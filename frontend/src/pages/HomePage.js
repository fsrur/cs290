import React from 'react';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-app.herokuapp.com'
  : 'http://localhost:5000';

function HomePage({ setExerciseToEdit }) {
    // Use the history for updating
    const history = useHistory();

    // Use state to bring in the data
    const [exercises, setExercises] = useState([]);


    // RETRIEVE the list of exercises
    const loadExercises = async () => {
        const response = await fetch(`/exercises`);
        console.log(response.status)
        const exercises = await response.json();
        setExercises(exercises);
    } 
    

    // UPDATE a exercise
    const onEditExercise = async exercise => {
        setExerciseToEdit(exercise);
        history.push("/edit-exercise");
    }


    // DELETE a exercise  
    const onDeleteExercise = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch(`/exercises`);
            const exercises = await getResponse.json();
            setExercises(exercises);
            // const newExercises = exercises.filter(m => m._id !== _id);
            // setExercises(newExercises);
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD the exercises
    useEffect(() => {
        loadExercises();
    }, []);

    // DISPLAY the exercises
    return (
        <>
            <article>
                <h2>List of Exercises</h2>
                <p>Below are the exercises currently in the database</p>
                <ExerciseList 
                    exercises={exercises} 
                    onEdit={onEditExercise} 
                    onDelete={onDeleteExercise} 
                />
            </article>
        </>
    );
}

export default HomePage;