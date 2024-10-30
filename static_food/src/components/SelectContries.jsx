import React, { useEffect, useState } from "react";
import { getStoreCountries } from "../Store/StoreCountries";

export default function SelectCountries() {
    const [contry, setContry] = useState('');
    const { countries, fetchCountries } = getStoreCountries()

    useEffect(() => {
        fetchCountries()
    }, [countries])
    return (
        <>
            <select 
                onChange={(e) => setContry(e.target.value)} 
                id="ville" 
                name="ville"  
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={contry}
            >
                <option value="">--Choisissez un pays--</option>
                {countries.map((country) => (
                    <option key={country.id} value={country.name}>{country.name}</option>
                ))}
            </select>
        </> 
    )
}