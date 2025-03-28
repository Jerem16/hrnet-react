import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Employee } from "../../redux/store/employeeSlice";
import SearchAndFilter from "./SearchAndFilter";
import EmployeeTable from "./EmployeeTable";
import Pagination from "./Pagination";
import { employees as Employees } from "../../assets/data/employees";
import {
    sortEmployees,
    filterEmployees,
    paginateEmployees,
    getTotalPages,
} from "./utils/employees";
import Modal from "react-modal-component-by-jeremy";

/**
 * @component
 *   Affiche une liste d'employés avec des fonctionnalités de recherche, tri, et pagination.
 *   Ce composant utilise Redux pour récupérer les employés ou une liste statique de secours si la liste est vide.
 *   Il permet également à l'utilisateur de rechercher un employé, de trier les résultats via les entete de colonnes de tri,
 *   et d'afficher de filtrer le nombre de résultats et de naviguer entre les pages.
 *
 * ? Fonctionnalités principales :
 * - Récupère la liste des employés depuis Redux ou une liste statique.
 * - Permet à l'utilisateur de rechercher un employé par son nom, sa date ou d'autres critères.
 * - Supporte le tri dynamique selon une colonne sélectionnée (nom, position, etc.) en ordre ascendant ou descendant.
 * - Implémente la pagination des résultats avec un contrôle du nombre d'éléments affichés par page.
 * - Affiche une modale si aucun employé n'est trouvé.
 *
 * * Utilisation des états locaux :
 * - **isModalOpen** : Gère l'affichage de la modale lorsque la liste est vide.
 * - **searchTerm** : Stocke le terme de recherche saisi par l'utilisateur.
 * - **itemsPerPage** : Gère le nombre d'éléments affichés par page.
 * - **currentPage** : Gère la page actuelle pour la pagination.
 * - **sortColumn** et **sortOrder** : Gèrent l'état du tri pour la colonne sélectionnée et son ordre.
 *
 * @returns {JSX.Element} - Le tableau des employés avec des options de recherche, tri et pagination.
 */
const EmployeeSortTable: React.FC = () => {

    /*****************************************************************************
     *? Récupère la liste des employés depuis Redux. Si la liste est vide, on utilise une liste statique de secours.
     *  @constant
     *  @type {Employee[]}
     */
    const employeesFromState: Employee[] = useSelector(
        (state: RootState) => state.employees
    );
    const employees: Employee[] =
        employeesFromState.length > 0 ? employeesFromState : Employees;

    /** 
    *? État pour gérer l'affichage de la modale si aucun employé n'est trouvé.
    */
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

    /*****************************************************************************
     *? État représentant la colonne utilisée pour le tri des employés.
     *  @state {keyof Employee | null} sortColumn - Clé de l'objet Employee utilisée pour le tri.
     *  @function setSortColumn - Met à jour la colonne de tri sélectionnée.
     */
    const [sortColumn, setSortColumn] = useState<keyof Employee | null>(null);
    /**
     *? État représentant l'ordre de tri appliqué aux employés.
     *  @state {"asc" | "desc"} sortOrder - Indique si le tri est ascendant ou descendant.
     *  @function setSortOrder - Met à jour l'ordre de tri sélectionné.
     */
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    /**
     *? Liste des employés triés selon la colonne et l'ordre de tri sélectionnés.
     ** Utilise la fonction `sortEmployees` pour effectuer le tri.
     *  @constant
     *  @type {Employee[]}
     */
    const sortedEmployees: Employee[] = sortEmployees(
        employees,
        sortColumn,
        sortOrder
    );

    /*****************************************************************************
     *? État représentant le terme de recherche utilisé pour filtrer les employés.
     *  @state {string} searchTerm - Terme de recherche utilisé pour le filtrage.
     *  @function setSearchTerm - Met à jour le terme de recherche.
     */
    const [searchTerm, setSearchTerm] = useState<string>("");
    /**
     *? Liste des employés filtrés en fonction du terme de recherche.
     ** Utilise la fonction `filterEmployees` pour appliquer le filtre.
     *  @constant
     *  @type {Employee[]}
     */
    const filteredEmployees: Employee[] = filterEmployees(
        sortedEmployees,
        searchTerm
    );

    /*****************************************************************************
     *? État définissant le nombre d'employés affichés par page.
     *  @state {number} itemsPerPage - Nombre d'employés affichés par page.
     *  @function setItemsPerPage - Met à jour le nombre d'employés par page.
     */
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    /**
     *? État représentant la page actuelle de la pagination.
     *  @state {number} currentPage - Numéro de la page actuellement affichée.
     *  @function setCurrentPage - Met à jour la page actuelle.
     */
    const [currentPage, setCurrentPage] = useState<number>(1);
    /**
     *? Liste des employés paginés après filtrage.
     ** Utilise la fonction `paginateEmployees` pour gérer la pagination.
     *  @constant
     *  @type {Employee[]}
     */
    const paginatedEmployees: Employee[] = paginateEmployees(
        filteredEmployees,
        currentPage,
        itemsPerPage
    );

    /*****************************************************************************
     *? Nombre total de pages en fonction du nombre d'employés filtrés et du nombre d'éléments affichés par page.
     ** Calculé via la fonction `getTotalPages`.
     *  @constant
     *  @type {number}
     */
    const totalPages: number = getTotalPages(filteredEmployees, itemsPerPage);

    /*****************************************************************************
     *? Effet secondaire pour réinitialiser la page à 1 si le nombre d'employés filtrés est inférieur ou égal au nombre d'éléments par page.
     ** Cela empêche l'affichage d'une page vide après un filtrage.
     */
    useEffect(() => {
        if (filteredEmployees.length <= itemsPerPage) {
            setCurrentPage(1);
        }
    }, [itemsPerPage, filteredEmployees.length]);

    return (
        <main className="main-container">
            <h2 className="main-heading">Current Employees</h2>
            <div className="bg">
                {/* Composant de recherche et filtre */}
                <SearchAndFilter
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                    totalEmployees={filteredEmployees.length} // Nombre d’employés après filtrage
                />

                {/* Vérifie si des employés sont disponibles */}
                {employees.length === 0 ? (
                    <>
                        {/* Affichage d'une modale d'information si aucun employé n'est enregistré */}
                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            title="Sorry"
                            type="info"
                        >
                            <p>No employees added yet.</p>
                        </Modal>
                        <p className="empty-message">No employees added yet.</p>
                    </>
                ) : (
                    <>
                        {/* Tableau des employés triés, filtrés et paginés */}
                        <EmployeeTable
                            employees={paginatedEmployees}
                            sortColumn={sortColumn}
                            sortOrder={sortOrder}
                            setSortColumn={setSortColumn}
                            setSortOrder={setSortOrder}
                        />

                        {/* Composant de pagination */}
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </>
                )}
            </div>
        </main>
    );
};

export default EmployeeSortTable;
