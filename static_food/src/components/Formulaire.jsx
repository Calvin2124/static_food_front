import { useState } from "react";

export default function Formulaire({ meal }) {
    const [drink, setDrink] = useState('');
    const [entree, setEntree] = useState('');
    const [plat, setPlat] = useState('');
    const [dessert, setDessert] = useState('');
    const [contry, setContry] = useState('');
   
    const handlesubmitPetitDejeuner = (e) => {
        e.preventDefault();
        console.log({
            meal,
            drink,
            contry,
            plat,
        }); 
        setContry("");
        setDrink("");
        setPlat("");
    };
    const handlesubmitDejeuner = (e) => {
        e.preventDefault();
        console.log({
            meal,
            drink,
            contry,
            entree,
            plat,
            dessert,
        }); 
        setContry("");
        setDrink("");
        setPlat("");
        setEntree("");
        setDessert("");
    };

    const handlesubmitdiner = (e) => {
        e.preventDefault();
        console.log({
            meal,
            drink,
            contry,
            entree,
            plat,
            dessert,
        }); 
        setContry("");
        setDrink("");
        setPlat("");
        setEntree("");
        setDessert("");
    };
    

    const handleFormDiner = () => (
        <form onSubmit={handlesubmitdiner} className="space-y-4">
            <div>
                <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-1">Ville :</label>
                <select 
                    onChange={(e) => setContry(e.target.value)} 
                    id="ville" 
                    name="ville"  
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={contry}
                >
                    <option value="">Choisissez une ville</option>
                    <option value="paris">Paris</option>
                    <option value="lyon">Lyon</option>
                    <option value="marseille">Marseille</option>
                    <option value="bordeaux">Bordeaux</option>
                </select>
            </div>

            <div>
                <label htmlFor="entree" className="block text-sm font-medium text-gray-700 mb-1">Entrée :</label>
                <input 
                    type="text" 
                    id="entree" 
                    name="entree" 
                    placeholder="Entrez votre entrée"  
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={entree}
                    onChange={(e) => setEntree(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="plat" className="block text-sm font-medium text-gray-700 mb-1">Plat :</label>
                <input 
                    type="text" 
                    id="plat" 
                    name="plat" 
                    placeholder="Entrez votre plat"  
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={plat}
                    onChange={(e) => setPlat(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="dessert" className="block text-sm font-medium text-gray-700 mb-1">Dessert :</label>
                <input 
                    type="text" 
                    id="dessert" 
                    name="dessert" 
                    placeholder="Entrez votre dessert"  
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={dessert}
                    onChange={(e) => setDessert(e.target.value)}
                />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out">
                Commander le menu
            </button>
        </form>
    );

    const handleFormDejeune = () => (
        <form onSubmit={handlesubmitDejeuner} className="space-y-4">
            <div>
                <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-1">Ville :</label>
                <select 
                    onChange={(e) => setContry(e.target.value)} 
                    id="ville" 
                    name="ville"  
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={contry}
                >
                    <option value="">Choisissez une ville</option>
                    <option value="paris">Paris</option>
                    <option value="lyon">Lyon</option>
                    <option value="marseille">Marseille</option>
                    <option value="bordeaux">Bordeaux</option>
                </select>
            </div>

            <div>
                <label htmlFor="entree" className="block text-sm font-medium text-gray-700 mb-1">Entrée :</label>
                <input 
                    type="text" 
                    id="entree" 
                    name="entree" 
                    placeholder="Entrez votre entrée"  
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={entree}
                    onChange={(e) => setEntree(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="plat" className="block text-sm font-medium text-gray-700 mb-1">Plat :</label>
                <input 
                    type="text" 
                    id="plat" 
                    name="plat" 
                    placeholder="Entrez votre plat"  
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={plat}
                    onChange={(e) => setPlat(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="dessert" className="block text-sm font-medium text-gray-700 mb-1">Dessert :</label>
                <input 
                    type="text" 
                    id="dessert" 
                    name="dessert" 
                    placeholder="Entrez votre dessert"  
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={dessert}
                    onChange={(e) => setDessert(e.target.value)}
                />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out">
                Commander le menu
            </button>
        </form>
    );

    const handleFormPetitDejeuner = () => (
        <form onSubmit={handlesubmitPetitDejeuner} className="space-y-4">
            <div>
                <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-1">Ville :</label>
                <select 
                    onChange={(e) => setContry(e.target.value)} 
                    id="ville" 
                    name="ville"  
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={contry}
                >
                    <option value="">Choisissez une ville</option>
                    <option value="paris">Paris</option>
                    <option value="lyon">Lyon</option>
                    <option value="marseille">Marseille</option>
                    <option value="bordeaux">Bordeaux</option>
                </select>
            </div>

            <div>
                <label htmlFor="boisson" className="block text-sm font-medium text-gray-700 mb-1">Boisson :</label>
                <input 
                    type="text" 
                    id="boisson" 
                    name="boisson" 
                    placeholder="Entrez votre boisson"  
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={drink}
                    onChange={(e) => setDrink(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="plat" className="block text-sm font-medium text-gray-700 mb-1">Plat :</label>
                <input 
                    type="text" 
                    id="plat" 
                    name="plat" 
                    placeholder="Entrez votre plat"  
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={plat}
                    onChange={(e) => setPlat(e.target.value)}
                />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out">
                Soumettre la commande
            </button>
        </form>
    );

    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md m-auto">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Formulaire de Menu</h1>
            <h2>{meal}</h2>
            {meal === 'Petit-déjeuner' ? handleFormPetitDejeuner() : 
             meal === 'Déjeuner' ? handleFormDejeune() : 
             meal === 'Diner' ? handleFormDiner() : 
             handleFormPetitDejeuner()}
        </div>
    );
}
