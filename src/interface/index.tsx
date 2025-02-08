import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    startDate: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    department: string;
}

interface InputFieldProps {
    label: string;
    id: keyof FormData;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
interface SelectFieldProps {
    label: string;
    id: keyof FormData;
    options: string[];
    value: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
