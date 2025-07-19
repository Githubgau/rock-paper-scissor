import React from "react";
import rock from './rock .jpg';
import paper from './paper.jpg';
import scissor from './scissor.jpg'

function Process({ handle, elemen, generateRandom, choice, user, comp }) {
  return (
    <div className="bg-[#94d7e7] text-white w-[1000px] h-[700px] flex justify-center ml-[250px] p-[40px]">
      <div className="flex flex-col items-center font-serif text-xl font-bold text-cyan-900">
        <div className="flex flex-row mb-6 text-2xl">
        <h1 className="  text-amber-900">ROCK.</h1>
        <h1 className=" text-pink-400">PAPER.</h1>
        <h1 className=" text-yellow-600">PAPER.</h1>
        </div>
        <p>SELECT YOUR WEAPON</p>
        <div className="flex space-x-4 mt-2 ">
          <img
            onClick={() => handle("rock")}
            className=" px-4 py-2 rounded-lg"
            src={rock}
            alt="rock"
          />
          <img
            onClick={() => handle("paper")}
            className=" px-4 py-2 rounded-lg"
            src={paper}
            alt="paper"
          />
          <img
            onClick={() => handle("scissor")}
            className=" px-4 py-2 rounded-lg"
            src={scissor}
            alt="scissor"
          />
        </div>
        <button
          onClick={generateRandom}
          className="bg-cyan-200 px-4 py-2 rounded-lg mt-4"
        >
          SUBMIT
        </button>
        <p className="text-xl font-bold text-cyan-900 mt-5">You chose: {elemen}</p>

        <p className="text-xl font-bold  mt-5 text-cyan-900">
          Computer chose: {choice}
        </p>

        <p className="text-xl font-bold text-cyan-900 mt-5">your score:{user}</p>
        <p className="text-xl font-bold text-cyan-900 mt-5">
          Computer score:{comp}
        </p>
      </div>
    </div>
  );
}

export default Process