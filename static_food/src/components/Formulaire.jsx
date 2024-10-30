export default function Formulaire({ word_form }) {

    const handleFormDiner = () => (
        <form className="space-y-4">
            <div>
                <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-1">Ville :</label>
                <select id="ville" name="ville" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Choisissez une ville</option>
                    <option value="paris">Paris</option>
                    <option value="lyon">Lyon</option>
                    <option value="marseille">Marseille</option>
                    <option value="bordeaux">Bordeaux</option>
                </select>
            </div>

            <div>
                <label htmlFor="entree" className="block text-sm font-medium text-gray-700 mb-1">Entrée :</label>
                <input type="text" id="entree" name="entree" placeholder="Entrez votre entrée" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            </div>

            <div>
                <label htmlFor="plat" className="block text-sm font-medium text-gray-700 mb-1">Plat :</label>
                <input type="text" id="plat" name="plat" placeholder="Entrez votre plat" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            </div>

            <div>
                <label htmlFor="dessert" className="block text-sm font-medium text-gray-700 mb-1">Dessert :</label>
                <input type="text" id="dessert" name="dessert" placeholder="Entrez votre dessert" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out">
                Commander le menu
            </button>
        </form>
    );

    const handleFormDejeuner = () => (
        <form className="space-y-4">
            <div>
                <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-1">Ville :</label>
                <select id="ville" name="ville" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Choisissez une ville</option>
                    <option value="paris">Paris</option>
                    <option value="lyon">Lyon</option>
                    <option value="marseille">Marseille</option>
                    <option value="bordeaux">Bordeaux</option>
                </select>
            </div>

            <div>
                <label htmlFor="boisson" className="block text-sm font-medium text-gray-700 mb-1">Boisson :</label>
                <input type="text" id="boisson" name="boisson" placeholder="Entrez votre boisson" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            </div>

            <div>
                <label htmlFor="plat" className="block text-sm font-medium text-gray-700 mb-1">Plat :</label>
                <input type="text" id="plat" name="plat" placeholder="Entrez votre plat" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out">
                Soumettre la commande
            </button>
        </form>
    );

    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Formulaire de Menu</h1>
            {word_form === 'Petit-Déjeuner' ? handleFormDejeuner() : handleFormDiner()}
        </div>
    );
}