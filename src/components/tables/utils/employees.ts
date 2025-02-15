export const parseDate = (dateStr: string): Date | null => {
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? null : date;
};

export const formatDate = (dateStr: string): string => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString("fr-FR");
};

export const sortEmployees = (
    employees: any[],
    sortColumn: keyof any | null,
    sortOrder: "asc" | "desc"
) => {
    if (!sortColumn) return employees;

    return [...employees].sort((a, b) => {
        let valueA = a[sortColumn];
        let valueB = b[sortColumn];

        if (sortColumn === "dateOfBirth" || sortColumn === "startDate") {
            const dateA = parseDate(valueA);
            const dateB = parseDate(valueB);
            if (!dateA || !dateB) return 0;
            return sortOrder === "asc"
                ? dateA.getTime() - dateB.getTime()
                : dateB.getTime() - dateA.getTime();
        }

        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();

        if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
        if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
        return 0;
    });
};

export const filterEmployees = (employees: any[], searchTerm: string) => {
    return employees.filter((employee) =>
        Object.values(employee).some((value) => {
            if (typeof value === "string") {
                return (
                    value.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    formatDate(value).includes(searchTerm)
                );
            } else if (typeof value === "number") {
                return value.toString().includes(searchTerm);
            }
            return false;
        })
    );
};

export const paginateEmployees = (
    employees: any[],
    currentPage: number,
    itemsPerPage: number
) => {
    return employees.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
};

export const getTotalPages = (employees: any[], itemsPerPage: number) => {
    return Math.ceil(employees.length / itemsPerPage);
};
