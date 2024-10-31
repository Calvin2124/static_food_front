import { ArrowBigLeft } from "lucide-react"
import { Link } from "react-router-dom"
import React, { useState } from "react"
import SelectCountries from "../components/SelectCountries"
import CardStat from "../components/CardStat";

export default function Stats () {
  const [countryId, setCountryId] = useState('');
  const [countryName, setCountryName] = useState('');
  const [meal, setMeal] = useState('');

  const getCountryOption = (countryId, country) => {
    setCountryId(countryId);
    setCountryName(country)
}
    return (
        <>
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800">
    <div className="flex justify-around">
      <Link to={"/"} className="text-2xl text-white flex items-center justify-between"><ArrowBigLeft /> Formulaires </Link>
      <h1 className="text-5xl text-white text-center p-6 font-bold">Static Food</h1>
      </div>
    <div className=" flex items-center justify-center p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {['Petit-déjeuner', 'Déjeuner', 'Dîner'].map((meal) => (
          <div
            key={meal}
            onClick={() => setMeal(meal)}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 p-0.5 transition-all duration-500 hover:from-pink-600 hover:to-purple-600 hover:scale-105"
          >
            <div className="relative flex items-center justify-center h-20 cursor-pointer bg-black bg-opacity-80 backdrop-blur-sm rounded-xl transition-all duration-500 group-hover:bg-opacity-70">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 text-xl font-bold uppercase tracking-wider">
                {meal}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div >
    <h2 className="text-white text-3xl text-center m-4">{meal}</h2>
    <div className="flex justify-center max-w-2xl m-auto">
      {meal && <SelectCountries getCountryOption={getCountryOption} />}
    </div>
    <div className="m-7">
    {/* Si un utilisateur choisi quelque chose dans le selectCountries le composant CardStat s'affiche */}
    </div>
    {countryId && <CardStat meal={meal} countryName={countryName} countryId={countryId} />}
    </main>
    </>
    )
}