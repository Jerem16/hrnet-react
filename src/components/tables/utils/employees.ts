import { Employee } from "../../../redux/store/employeeSlice";

/**
 ** Convertit une chaîne de caractères en objet Date.
 *  @param dateStr - La date sous forme de chaîne.
 *  @returns {Date | null} - Un objet Date si valide, sinon null.
 */
const parseDate = (dateStr: string): Date | null => {
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? null : date;
};

/**
 ** Formate une date au format français (JJ/MM/AAAA).
 *  @param dateStr - La date sous forme de chaîne.
 *  @returns {string} - La date formatée ou la chaîne d'origine si invalide.
 */
export const formatDate = (dateStr: string): string => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString("fr-FR");
};

/**
 ** Trie un tableau d'employés en fonction d'une colonne et d'un ordre de tri.
 *  @param employees - La liste des employés.
 *  @param sortColumn - La colonne utilisée pour le tri.
 *  @param sortOrder - L'ordre de tri ("asc" pour ascendant, "desc" pour descendant).
 *  @returns {Employee[]} - La liste triée des employés.
 */
export const sortEmployees = (
    employees: Employee[],
    sortColumn: keyof Employee | null,
    sortOrder: "asc" | "desc"
) => {
    if (!sortColumn) return employees;

    return [...employees].sort((a, b) => {
        let valueA = a[sortColumn];
        let valueB = b[sortColumn];

        // Tri spécifique pour les dates
        if (sortColumn === "dateOfBirth" || sortColumn === "startDate") {
            const dateA = parseDate(valueA);
            const dateB = parseDate(valueB);
            if (!dateA || !dateB) return 0;
            return sortOrder === "asc"
                ? dateA.getTime() - dateB.getTime()
                : dateB.getTime() - dateA.getTime();
        }

        // Conversion en minuscules pour comparer les chaînes de caractères
        if (typeof valueA === "string" && typeof valueB === "string") {
            valueA = valueA.toLowerCase();
            valueB = valueB.toLowerCase();
        }

        // Comparaison des valeurs pour le tri
        if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
        if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
        return 0;
    });
};

/**
 ** Filtre une liste d'employés en fonction d'un terme de recherche.
 *  @param employees - La liste des employés.
 *  @param searchTerm - Le terme recherché.
 *  @returns {Employee[]} - La liste filtrée des employés.
 */
export const filterEmployees = (employees: Employee[], searchTerm: string) => {
    if (!searchTerm.trim()) return employees;
    return employees.filter((employee) =>
        Object.values(employee).some((value) => {
            if (typeof value === "string" && value) {
                return (
                    value.toLowerCase().includes(searchTerm.toLowerCase()) &&
                    value[0]?.toLowerCase() === searchTerm[0]?.toLowerCase()
                );
            } else if (typeof value === "number") {
                return value.toString().includes(searchTerm);
            }
            return false;
        })
    );
};

/**
 ** Découpe une liste d'employés en pages pour la pagination.
 *  @param employees - La liste des employés.
 *  @param currentPage - Le numéro de la page actuelle.
 *  @param itemsPerPage - Le nombre d'éléments par page.
 *  @returns {Employee[]} - La liste des employés pour la page demandée.
 */
export const paginateEmployees = (
    employees: Employee[],
    currentPage: number,
    itemsPerPage: number
) => {
    return employees.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
};

/**
 ** Calcule le nombre total de pages nécessaires pour afficher tous les employés.
 *  @param employees - La liste des employés.
 *  @param itemsPerPage - Le nombre d'éléments par page.
 *  @returns {number} - Le nombre total de pages.
 */
export const getTotalPages = (employees: Employee[], itemsPerPage: number) => {
    return Math.ceil(employees.length / itemsPerPage);
};
