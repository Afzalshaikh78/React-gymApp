import React, { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'

const App = () => {
  const [workout, setWorkout] = useState(null);
   const [poison, setPoison] = useState("individual");
   const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");
  
  const updateWorkout = () => {
    if (muscles.length < 1) {
      return;
    }

    const newWorkout = generateWorkout({ poison, muscles, goal });
    setWorkout(newWorkout);

    // Use a timeout to wait for the new component to render
    setTimeout(() => {
      const workoutSection = document.getElementById("workout");
      if (workoutSection) {
        workoutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // slight delay ensures the DOM has updated
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white text-sm sm:text-base">
      <Hero />
      <Generator
        poison={poison}
        muscles={muscles}
        goal={goal}
        setPoison={setPoison}
        setMuscles={setMuscles}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App