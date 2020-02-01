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

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="new-workout">
        <input placeholder="date" onChange={} />
        <input placeholder="workout name" />
        <label>Sets</label>
        <select>
          {repsAndSets.map(setIdx => {
            return <option>{setIdx}</option>;
          })}
        </select>
        <label>Reps</label>
        <select>
          {repsAndSets.map(repIdx => {
            return <option>{repIdx}</option>;
          })}
        </select>

        <label>Muscle group(s)</label>
        {muscleGroups.map(muscleGroup => {
          return (
            <div>
              <input type="checkbox"></input>
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
