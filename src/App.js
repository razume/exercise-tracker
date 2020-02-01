import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './App.css';

function App() {
  // create a new exercise
  // list of previous exercises
  const repsAndSets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const muscleGroups = ['arms', 'legs', 'back', 'chest'];
  const [exercise, setExercise] = useState({
    date: '',
    name: '',
    sets: 0,
    reps: 0,
    notes: '',
    arms: false,
    legs: false,
    chest: false,
    back: false
  });

  const [exercises, setExercises] = useState([]);

  const handleChange = e => {
    const name = e.target.name;
    const updateObj = { ...exercise, [name]: e.target.value };
    setExercise(updateObj);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="new-workout">
        <input placeholder="date" name="date" onChange={handleChange} />
        <input placeholder="workout name" name="name" onChange={handleChange} />
        <label>
          Sets
          <select name="sets" onChange={handleChange}>
            {repsAndSets.map(setIdx => {
              return <option>{setIdx}</option>;
            })}
          </select>
        </label>

        <label>
          Reps
          <select name="reps" onChange={handleChange}>
            {repsAndSets.map(repIdx => {
              return <option>{repIdx}</option>;
            })}
          </select>
        </label>

        <label>Muscle group(s)</label>
        {muscleGroups.map(muscleGroup => {
          return (
            <div>
              <input onChange={handleChange} type="checkbox"></input>
              <label>{muscleGroup}</label>
            </div>
          );
        })}
        <label>Notes</label>
        <textarea></textarea>
        <button>Save Exercise</button>
      </form>
    </div>
  );
}

export default App;
