import { useEffect, useState } from "react";

export default function CardStat({ meal, countryName, countryId }) {
    const [plat, setPlat] = useState("");
    const [complete, setComplete] = useState("");
    const [incomplete, setIncomplete] = useState("");
    const [country, setCountry] = useState("");

    const getStatsPlat = async () => {
        try{
            if(meal === "Petit-déjeuner") {
                const response = await fetch(`http://localhost:3000/api/stats/petitDejeune`, 
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ countryId }),
                });
                const data = await response.json();
                setComplete(data.complete); 
                setIncomplete(data.incomplete);
            }
            if(meal === "Déjeuner") {
                const response = await fetch(`http://localhost:3000/api/stats/dejeune`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ countryId }),
                });
                const data = await response.json();
                setComplete(data.complete);
                setIncomplete(data.incomplete);
            }
            if(meal === "Dîner") {
                const response = await fetch(`http://localhost:3000/api/stats/diners`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ countryId }),
                });
                const data = await response.json();
                console.log(data);
                setComplete(data.complete);
                setIncomplete(data.incomplete);
            }
        }catch(err) {
            console.error(err);
        };
    } 

    useEffect(() => {
        getStatsPlat();
    }, [countryId, meal]); // Mettez à jour à chaque changement de countryId


    useEffect(() => {
        if (meal) {
            setPlat(meal);
        }
        if (countryName) {
            setCountry(countryName);
        }
    }, [meal, countryName]); // Mettez à jour à chaque changement de meal ou countryName

    return (
        <div className="w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-all duration-300 hover:shadow-xl">
            <div className="px-6 py-4 bg-gradient-to-r from-blue-700 to-purple-900">
                <h1 className="text-3xl font-bold text-white">{plat || "No meal selected"}</h1>
                <p className="text-sm text-gray-200">Stats petit déjeuner en {country || "Unknown country"}</p>
            </div>
            <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 transition-colors duration-300">
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Complet</span>
                <span className="text-sm font-bold text-green-600 dark:text-green-400">{complete}%</span>
            </div>
            <div className="flex items-center justify-between px-6 py-4 bg-gray-50 dark:bg-gray-700 transition-colors duration-300">
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Incomplet</span>
                <span className="text-sm font-bold text-red-600 dark:text-red-400">{incomplete}%</span>
            </div>
        </div>
    );
}