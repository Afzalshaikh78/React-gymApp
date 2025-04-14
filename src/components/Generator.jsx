import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import { FaCaretDown } from "react-icons/fa";
import Button from "./Button";

const Header = (props) => {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">{index}</p>
        <h4>{title}</h4>
      </div>
        <p className="text-sm p-4 sm:text-base md:text-2xl mx-auto">
          {description}
        </p>
      
    </div>
  )
}


const Generator = (props) => {
  const { poison, muscles, goal, setPoison, setMuscles, setGoal , updateWorkout } = props;
  const [showModel, setShowModel] = useState(false);
 

  function toggleModel() {
    setShowModel(!showModel)
  }

            
  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return 
    }
    
    if (muscles.length > 2) {
      setShowModel(false)
      return
    }

    if (poison !== 'individual') {
      setMuscles([muscleGroup])
      setShowModel(false)
      return
    }

    setMuscles([...muscles, muscleGroup])
    if (muscles.length === 2) {
      setShowModel(false)
    }
 }
 
  return (
    <SectionWrapper id={"generate"}
      header={"Generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to enjoy"}
      />

      <div className="p-3 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {Object.keys(WORKOUTS).map((type, typeIndex) => {
        return (
          <button onClick={() => {
            setMuscles([])
            setPoison(type)
          }}
            className={"capitalize duration-200 cursor-pointer p-4 grid bg-slate-950 font-light rounded-lg border hover:border-blue-600 " + (type === poison ? 'border-blue-800 ' : 'border-transparent')}
            key={typeIndex}
          >
            <p className="capitalize">{type.replaceAll('_',' ')}</p>
          </button>
        );
      })}
                                   
      </div>
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation."}
      />

      <div className="bg-slate-950 flex flex-col  border border-solid m-3  border-blue-400 rounded-lg ">
      
        <button onClick={toggleModel} className="relative cursor-pointer p-3 flex items-center justify-center">
          <p className="uppercase">{muscles.length === 0 ? 'Select muscle group' : muscles.join(' ') }</p>
          <FaCaretDown className="size-6  absolute right-3 top-1/2 -translate-y-1/2"/>
        </button>
        {showModel && (
          <div className="flex flex-col px-3 pb-3 ">
            {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup,muscleGroupIndex)=>{
                return (
                  <button onClick={() => {
                    updateMuscles(muscleGroup)
            }}  className={"uppercase cursor-pointer hover:text-blue-500 " + (muscles.includes(muscleGroup) ? 'text-blue-400' : '') } key={muscleGroupIndex}>
              <p >
                {muscleGroup.replaceAll('_','')}
                  </p>
                    </button>
                )
                
            })}
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective."}
      />

      <div className="grid p-3 grid-cols-1 sm:grid-cols-3 gap-4 ">
      {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
        return (
          <button
            onClick={() => {
              setGoal(scheme);
            }}
            className={
              "capitalize pb-4  px-3 pt-4 duration-200 cursor-pointer  grid bg-slate-950 font-light rounded-lg border hover:border-blue-600 " +
              (scheme === goal ? "border-blue-800 " : "border-transparent")
            }
            key={schemeIndex}
          >
            <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
          </button>
        );
      })}
      </div>
      <Button func={updateWorkout} text={'Formulate'} />
    </SectionWrapper>
  );
};

export default Generator;
