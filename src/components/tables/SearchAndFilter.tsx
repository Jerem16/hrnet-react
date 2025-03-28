import React, { useState, useEffect } from "react";
import InputField from "../form/InputField";
import SelectField from "../form/SelectField";
import { seize } from "../../assets/data/dataOptions";

/**
 * @interface SearchAndFilterProps
 * Définit les propriétés du composant `SearchAndFilter`
 *
 * @property {string} searchTerm - Terme actuellement utilisé pour la recherche.
 * @property {(term: string) => void} setSearchTerm - Fonction pour mettre à jour le terme de recherche.
 * @property {number} itemsPerPage - Nombre d'éléments affichés par page.
 * @property {(count: number) => void} setItemsPerPage - Fonction pour modifier le nombre d'éléments par page.
 * @property {number} totalEmployees - Nombre total d’employés affichés après filtrage.
 */
interface SearchAndFilterProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    itemsPerPage: number;
    setItemsPerPage: (count: number) => void;
    totalEmployees: number; // Nombre d’employés filtrés
}

/**
 * Composant de filtrage et de recherche pour la liste des employés.
 * Il permet :
 * - De rechercher un employé par son nom ou d'autres critères.
 * - De modifier dynamiquement le nombre d'éléments affichés par page.
 * - D'afficher dynamiquement le nombre total d'employés après filtrage.
 * - D'utiliser un debounce pour éviter les mises à jour trop fréquentes de la recherche.
 *
 * @component
 * @param {SearchAndFilterProps} props - Les props du composant.
 * @returns {JSX.Element} - Un champ de recherche, un sélecteur et un compteur d'employés.
 */
const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
    searchTerm,
    setSearchTerm,
    itemsPerPage,
    setItemsPerPage,
    totalEmployees,
}) => {
    /**
     * État local pour stocker l’entrée utilisateur avant mise à jour globale.
     * Cela permet d’éviter les mises à jour trop fréquentes de `setSearchTerm` et d'améliorer les performances.
     */
    const [searchInput, setSearchInput] = useState(searchTerm);

    /**
     * Applique un "debounce" (délai de 300ms) pour éviter que `setSearchTerm` soit appelé à chaque frappe clavier.
     * - Un `setTimeout` est déclenché après 300ms sans nouvelle saisie.
     * - Si l'utilisateur tape rapidement, le timer est annulé et redémarré.
     * - Cela empêche des mises à jour excessives du store et optimise les performances.
     */
    useEffect(() => {
        const debounce = setTimeout(() => {
            setSearchTerm(searchInput);
        }, 300);

        return () => clearTimeout(debounce);
    }, [searchInput, setSearchTerm]);

    return (
        <div className="search-filter-container">
            {/* Sélecteur du nombre d'éléments par page */}
            <span className="totalEmployees">
                <SelectField
                    id="pages-nb-selector"
                    label="Show:"
                    options={seize}
                    value={String(itemsPerPage)}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                />{" "}
                on {totalEmployees}{" "}
                {totalEmployees === 1 ? "result" : "results"}
            </span>
            <InputField
                id="search-selector"
                label="Search:"
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            {/* Affichage du nombre d'employés trouvés après filtrage */}
        </div>
    );
};

export default SearchAndFilter;
