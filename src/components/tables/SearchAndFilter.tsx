import React from "react";
import InputField from "../form/InputField";
import SelectField from "../form/SelectField";
import { seize } from "../../assets/data/dataOptions";

interface SearchAndFilterProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    itemsPerPage: number;
    setItemsPerPage: (count: number) => void;
}
// const seize = {[ name:"10", name:"25", name:"100"]};
const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
    searchTerm,
    setSearchTerm,
    itemsPerPage,
    setItemsPerPage,
}) => {
    return (
        <div className="search-filter-container">
            <SelectField
                id="pages-nb-selector"
                label="Show:"
                options={seize} 
                value={String(itemsPerPage)}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
            />

            <InputField
                id="search-selector"
                label="Search:"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default SearchAndFilter;
