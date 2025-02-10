export interface State {
    name: string;
    abbreviation: string;
}

export interface Department {
    name: string;
}

export const departments: Department[] = [
    {
        name: "Sales",
    },
    {
        name: "Marketing",
    },
    {
        name: "Engineering",
    },
    {
        name: "HR",
    },
    {
        name: "Legal",
    },
];
export const states: State[] = [
    {
        name: "Alabama",
        abbreviation: "AL",
    },
    {
        name: "Alaska",
        abbreviation: "AK",
    },
    {
        name: "American Samoa",
        abbreviation: "AS",
    },
    {
        name: "Arizona",
        abbreviation: "AZ",
    },
    {
        name: "Arkansas",
        abbreviation: "AR",
    },
];
