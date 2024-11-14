import React, { useState, ChangeEvent } from 'react';

const SearchComponent: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<string[]>([]);

    const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
        const searchQuery = event.target.value;
        setQuery(searchQuery);

        if (searchQuery.length > 0) {
            try {
                const response = await fetch(`/api/search/results?searchText=${searchQuery}`);
                const data: string[] = await response.json();
                setResults(data);
            }
            catch (error) {
                console.log("Error: " + error);
            }
        }
        else {
            setResults([]);
        }
    }

    return
    (
        <div>
            <input type="text" value={query} onChange={handleSearch} placeholder="Search">
            </input>

            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchComponent;