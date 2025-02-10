export interface Employee {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    startDate: string;
    department: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
}

export const employees: Employee[] = [
    {
        firstName: "Jeremy",
        lastName: "Lemaignent",
        dateOfBirth: "02/19/2025",
        startDate: "02/07/2025",
        department: "Marketing",
        street: "69 rue maurice tronelle",
        city: "Le Havre",
        state: "AL",
        zipCode: "76620",
    },
    {
        firstName: "Seda",
        lastName: "Estelle",
        dateOfBirth: "02/09/1995",
        startDate: "02/22/2025",
        department: "Legal",
        street: "69 Rue Tronelle",
        city: "Paris",
        state: "GU",
        zipCode: "76620",
    },
    {
        firstName: "Jeremy",
        lastName: "Lemaignent",
        dateOfBirth: "02/11/2025",
        startDate: "02/11/2025",
        department: "Sales",
        street: "69 rue maurice tronelle",
        city: "Le Havre",
        state: "AL",
        zipCode: "76620",
    },
    {
        firstName: "Jeremy",
        lastName: "Lemaignent",
        dateOfBirth: "02/04/2025",
        startDate: "02/20/2025",
        department: "Marketing",
        street: "69 rue maurice tronelle",
        city: "Le Havre",
        state: "AS",
        zipCode: "76620",
    },
];
