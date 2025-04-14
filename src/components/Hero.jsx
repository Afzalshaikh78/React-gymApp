import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center gap-10 justify-center text-center w-full max-w-[800px] mx-auto p-4">

      <div className="flex flex-col gap-2 mt-[-20px]">
      <p>IT'S TIME TO GET</p>
      <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:7xl">
        Swole<span className="text-blue-400">zilla</span>
      </h1>
      </div>
      
      <p className="text-sm md:text-lg font-light">
        I hereby acknowledgement that I may become <span className="text-blue-400 font-medium">unbelievably swole</span> and
        accept all the risk of becoming the local <span className="text-blue-400 font-medium">mass monstrosity</span>
        ,afflicted with severe body dysmorphia,unable to fit through doors
      </p>
      <Button func={() => {
        window.location.href = '#generate'
      }} text={'Accept & Begin' } />
    </div>
  );
};

export default Hero;
