import React from "react";

/**
 * @interface PaginationProps
 * Définit les propriétés du composant `Pagination`.
 *
 * @property {number} currentPage - La page actuelle.
 * @property {number} totalPages - Le nombre total de pages.
 * @property {(page: number) => void} onPageChange - Fonction pour changer la page actuelle.
 */
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

/**
 * Composant de pagination permettant à l'utilisateur de naviguer entre les pages de résultats.
 * Il fournit des boutons pour aller à la page précédente, à la page suivante, et affiche le numéro de la page actuelle.
 *
 * - Le bouton "Previous" est désactivé si l'utilisateur est déjà sur la première page.
 * - Le bouton "Next" est désactivé si l'utilisateur est déjà sur la dernière page.
 * - Le composant affiche également la page actuelle et le nombre total de pages.
 *
 * @component
 * @param {PaginationProps} props - Les propriétés du composant
 * @returns {JSX.Element} - Des boutons de pagination pour naviguer entre les pages
 */
const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    return (
        <div className="pagination-container">
            {/* Bouton pour aller à la page précédente */}
            <button
                className="pagination-button"
                disabled={currentPage === 1} // Désactive si sur la première page
                onClick={() => onPageChange(currentPage - 1)}
                aria-label="Previous page" // Amélioration pour l'accessibilité
            >
                Previous
            </button>

            {/* Affichage du numéro de la page actuelle */}
            <span className="pagination-text">
                Page {currentPage} of {totalPages}
            </span>

            {/* Bouton pour aller à la page suivante */}
            <button
                className="pagination-button"
                disabled={currentPage === totalPages} // Désactive si sur la dernière page
                onClick={() => onPageChange(currentPage + 1)}
                aria-label="Next page" // Amélioration pour l'accessibilité
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
