import React from "react";

const Button = (props) => {
  const { text , func } = props;
  return (
    <button onClick={func} className="px-8 mx-auto py-4 rounded-md cursor-pointer border-blue-400 border-[2px] mb-10  border-solid bg-slate-950 blueShadow duration-200">
<p>{text}</p>
    </button>
  );
};

export default Button;
