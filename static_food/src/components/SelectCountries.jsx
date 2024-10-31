import React, { useEffect, useState } from "react";
import { getStoreCountries } from "../Store/StoreCountries";

export default function SelectCountries({ getCountryOption }) {
    const [contry, setContry] = useState('');
    const { countries, fetchCountries } = getStoreCountries();

    useEffect(() => {
        fetchCountries();
    }, []);

    // Appelle getCountryOption seulement lorsqu'une nouvelle sélection est faite
    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        setContry(selectedCountry);
        getCountryOption(selectedCountry); // Appelle la fonction du parent avec le pays sélectionné
    };

    return (
        <select
            onChange={handleCountryChange} // Appel de la fonction à chaque changement de sélection
            id="ville"
            name="ville"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={contry}
        >
            <option value="">--Choisissez un pays--</option>
            {countries.map((country) => (
                <option key={country.id} value={country.Country}>{country.Country}</option>
            ))}
        </select>
    );
}