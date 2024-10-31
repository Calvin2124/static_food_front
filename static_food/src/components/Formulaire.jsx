import { useState } from "react";
import SelectCountries from "./SelectCountries";

export default function Component({ meal }) {
    const [drink, setDrink] = useState('');
    const [entree, setEntree] = useState('');
    const [plat, setPlat] = useState('');
    const [dessert, setDessert] = useState('');
    const [countryId, setCountryId] = useState('');

    const getCountryOption = (country) => {
        setCountryId(country);
        console.log(country);
    }

    const handlesubmitPetitDejeune = async (e) => {
        e.preventDefault();
        const data = {
            Drink: drink,
            Plat: plat,
            countryId
        };
        console.log(data)
        try {
            const response = await fetch('http://localhost:3000/api/petitDejeune/create',{ 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                console.log('response')
            }
        } catch (error) {
            console.error(error);
        } 
        setDrink("");
        setPlat("");
    };

    const handlesubmitDejeune = async (e) => {
        e.preventDefault();
        const data ={
            Drink: drink,
            Entree: entree,
            Plat: plat,
            Dessert: dessert,
            countryId
        }; 
        try {
            const response = await fetch('http://localhost:3000/api/Dejeune/create',{ 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                console.log('response')
            }
        } catch (error) {
            console.error(error);
        } 
        setDrink("");
        setPlat("");
        setEntree("");
        setDessert("");
    };

    const handlesubmitDiner = async (e) => {
        e.preventDefault();
        const data ={
            Drink: drink,
            Entree: entree,
            Plat: plat,
            Dessert: dessert,
            countryId
        }; 
        try {
            const response = await fetch('http://localhost:3000/api/Diners/create',{ 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                console.log('response')
            }
        } catch (error) {
            console.error(error);
        } 
        setDrink("");
        setPlat("");
        setEntree("");
        setDessert("");
    };

    const handleFormDiner = () => (
        <form onSubmit={handlesubmitDiner} className="space-y-6 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800 p-8 rounded-xl shadow-2xl">
    <div>
        <label htmlFor="ville" className="block text-sm font-medium text-blue-300 mb-1">Ville :</label>
        <SelectCountries getCountryOption={getCountryOption} className="w-full px-4 py-2 bg-black bg-opacity-50 border border-purple-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out" />
    </div>

    <div>
        <label htmlFor="drink" className="block text-sm font-medium text-blue-300 mb-1">Boisson :</label>
        <input 
            type="text" 
            id="drink" 
            name="drink" 
            placeholder="Entrez votre boisson"  
            className="w-full px-4 py-2 bg-black bg-opacity-50 border border-purple-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out"
            value={drink}
            onChange={(e) => setDrink(e.target.value)}
        />
    </div>

    <div>
        <label htmlFor="entree" className="block text-sm font-medium text-blue-300 mb-1">Entrée :</label>
        <input 
            type="text" 
            id="entree" 
            name="entree" 
            placeholder="Entrez votre entrée"  
            className="w-full px-4 py-2 bg-black bg-opacity-50 border border-purple-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out"
            value={entree}
            onChange={(e) => setEntree(e.target.value)}
        />
    </div>

    <div>
        <label htmlFor="plat" className="block text-sm font-medium text-blue-300 mb-1">Plat :</label>
        <input 
            type="text" 
            id="plat" 
            name="plat" 
            placeholder="Entrez votre plat"  
            className="w-full px-4 py-2 bg-black bg-opacity-50 border border-purple-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out"
            value={plat}
            onChange={(e) => setPlat(e.target.value)}
        />
    </div>

    <div>
        <label htmlFor="dessert" className="block text-sm font-medium text-blue-300 mb-1">Dessert :</label>
        <input 
            type="text" 
            id="dessert" 
            name="dessert" 
            placeholder="Entrez votre dessert"  
            className="w-full px-4 py-2 bg-black bg-opacity-50 border border-purple-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out"
            value={dessert}
            onChange={(e) => setDessert(e.target.value)}
        />
    </div>

    <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-4 rounded-md hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">
        Commander le menu
    </button>
</form>
    );

    const handleFormDejeune = () => (
        <form onSubmit={handlesubmitDejeune} className="space-y-6 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800 p-8 rounded-xl shadow-2xl">
    <div>
        <label htmlFor="ville" className="block text-sm font-medium text-blue-300 mb-1">Ville :</label>
        <SelectCountries getCountryOption={getCountryOption} className="w-full px-4 py-2 bg-black bg-opacity-50 border border-purple-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out" />
    </div>

    <div>
        <label htmlFor="drink" className="block text-sm font-medium text-blue-300 mb-1">Boisson :</label>
        <input 
            type="text" 
            id="drink" 
            name="drink" 
            placeholder="Entrez votre boisson"  
            className="w-full px-4 py-2 bg-black bg-opacity-50 border border-purple-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out"
            value={drink}
            onChange={(e) => setDrink(e.target.value)}
        />
    </div>

    <div>
        <label htmlFor="entree" className="block text-sm font-medium text-blue-300 mb-1">Entrée :</label>
        <input 
            type="text" 
            id="entree" 
            name="entree" 
            placeholder="Entrez votre entrée"  
            className="w-full px-4 py-2 bg-black bg-opacity-50 border border-purple-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out"
            value={entree}
            onChange={(e) => setEntree(e.target.value)}
        />
    </div>

    <div>
        <label htmlFor="plat" className="block text-sm font-medium text-blue-300 mb-1">Plat :</label>
        <input 
            type="text" 
            id="plat" 
            name="plat" 
            placeholder="Entrez votre plat"  
            className="w-full px-4 py-2 bg-black bg-opacity-50 border border-purple-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out"
            value={plat}
            onChange={(e) => setPlat(e.target.value)}
        />
    </div>

    <div>
        <label htmlFor="dessert" className="block text-sm font-medium text-blue-300 mb-1">Dessert :</label>
        <input 
            type="text" 
            id="dessert" 
            name="dessert" 
            placeholder="Entrez votre dessert"  
            className="w-full px-4 py-2 bg-black bg-opacity-50 border border-purple-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out"
            value={dessert}
            onChange={(e) => setDessert(e.target.value)}
        />
    </div>

    <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-4 rounded-md hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">
        Commander le menu
    </button>
</form>
    );

    const handleFormPetitDejeuner = () => (
        <form onSubmit={handlesubmitPetitDejeune} className="space-y-6 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800 p-8 rounded-xl shadow-2xl">
    <div>
        <label htmlFor="ville" className="block text-sm font-medium text-blue-300 mb-1">Ville :</label>
        <SelectCountries getCountryOption={getCountryOption} className="w-full px-4 py-2 bg-black bg-opacity-50 border border-purple-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out" />
    </div>

    <div>
        <label htmlFor="drink" className="block text-sm font-medium text-blue-300 mb-1">Boisson :</label>
        <input 
            type="text" 
            id="drink" 
            name="drink" 
            placeholder="Entrez votre boisson"  
            className="w-full px-4 py-2 bg-black bg-opacity-50 border border-purple-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out"
            value={drink}
            onChange={(e) => setDrink(e.target.value)}
        />
    </div>

    <div>
        <label htmlFor="plat" className="block text-sm font-medium text-blue-300 mb-1">Plat :</label>
        <input 
            type="text" 
            id="plat" 
            name="plat" 
            placeholder="Entrez votre plat"  
            className="w-full px-4 py-2 bg-black bg-opacity-50 border border-purple-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out"
            value={plat}
            onChange={(e) => setPlat(e.target.value)}
        />
    </div>

    <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-4 rounded-md hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">
        Commander le menu
    </button>
</form>
    );

    return (
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md m-auto border border-blue-500">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-400">Formulaire de Menu</h1>
            <h2 className="text-xl font-semibold mb-4 text-center text-blue-300">{meal}</h2>
            {meal === 'Petit-déjeuner' ? handleFormPetitDejeuner() : 
            meal === 'Déjeuner' ? handleFormDejeune() : 
            meal === 'Dîner' ? handleFormDiner() : 
            handleFormPetitDejeuner()}
        </div>
    );
}