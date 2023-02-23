import React from "react";

const PokemonCard = () => {
  return (
    <div>
      <div className="flex items-center justify-center rounded-lg border-gray-900 m-8 shadow-xl flex-col w-200 h-200 bg-stone-900">
        <div className=" w-full flex items-center justify-center text-center h-30 text-white">
          Ola
        </div>
        <div className="flex justify-center items-center w-full h-140 bg-emerald-50 border border-x-gray-900">
          <img className="w-36" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="" />
        </div>
        <div className="flex w-full items-center justify-center h-30 text-white">
          <div>ola</div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
