import { createContext, useState } from "react";
import { getApiData } from "../utils/scripts/api";

export const SearchResultContext = createContext({
    results: [],
    updateQueryValue: () => {}
});

export function SearchResultProvider({ children }) {
    const [results, setResults] = useState([]);

    const updateQueryValue = async (value) => {
        if (value && value.length) {
            const values = await getApiData(value);
            setResults(values);
        } else {
            setResults([]);
        }
    };

    return (
    <SearchResultContext.Provider value={ {results, updateQueryValue} }>
        {children}
    </SearchResultContext.Provider>)
}