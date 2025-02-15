import React from "react";

interface SearchAndFilterProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    itemsPerPage: number;
    setItemsPerPage: (count: number) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
    searchTerm,
    setSearchTerm,
    itemsPerPage,
    setItemsPerPage,
}) => {
    return (
        <div className="min-w-[470px] mb-4 flex justify-between">
            <label htmlFor="pages-nb-selector">
                Show:
                <select
                    id="pages-nb-selector"
                    className="ml-2 border p-1 rounded"
                    value={itemsPerPage}
                    onChange={(e) => {
                        setItemsPerPage(Number(e.target.value));
                    }}
                >
                    {[10, 25, 50, 100].map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </label>
            <label htmlFor="search-selector">
                Search:
                <input
                    id="search-selector"
                    className="ml-2 border p-1 rounded"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </label>
        </div>
    );
};

export default SearchAndFilter;
