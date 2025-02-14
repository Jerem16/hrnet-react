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
        firstName: "Jérémy",
        lastName: "Lemaignent",
        dateOfBirth: "1977-06-27",
        startDate: "2025-01-30",
        street: "69 Rue Maurice Tronelle",
        city: "Le Havre",
        state: "IN",
        zipCode: "76620",
        department: "Engineering",
    },
    {
        firstName: "Seda",
        lastName: "Abb",
        dateOfBirth: "2000-02-05",
        startDate: "2025-02-12",
        street: "69 Rue Maurice Tronelle",
        city: "Le Havre",
        state: "IL",
        zipCode: "76620",
        department: "Engineering",
    },
];
