import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditExercisePage = ({ exerciseToEdit }) => {
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps]  = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    
    // Convert the date
    const dateObject = new Date(exerciseToEdit.date);
    const formattedDate = dateObject.toISOString().split('T')[0];
    const [date, setDate] = useState(formattedDate);
    
    const history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                reps: reps, 
                weight: weight,
                unit: unit, 
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert("Successfully edited document!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update document.`);
            console.log(response.status)
            console.log(errMessage.Error)
        }
        history.push("/");
    }

    return (
        <>
        <article>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Update the exercise</legend>
                    <label for="name">Exercise name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label for="reps">Reps</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <label for="weight">Weight</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                    <label for="unit">Unit</label>
                    <select value={unit} onChange={e => setUnit(e.target.value)} id="unit">
                        <option value="lbs">lbs</option>
                        <option value="kgs">kgs</option>
                    </select>

                    <label for="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="submit">
                    <button
                        onClick={editExercise}
                        id="submit"
                    >Save</button>
                    </label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExercisePage;