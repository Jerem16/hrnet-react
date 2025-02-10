// Validation du nom (prénom ou nom de famille)
export const validateName = (name: string): string => {
    const regexNumber = /[0-9]/;
    if (!name || name.length < 2) {
        return "Minimum 2 caractères.";
    }
    if (regexNumber.test(name)) {
        return "Les chiffres ne sont pas accepter.";
    }
    return "";
};

// Validation de l'adresse email
export const validateEmail = (email: string): string => {
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegExp.test(email)) {
        return "Please enter a valid email address.";
    }
    return "";
};

// Validation de la date de naissance
export const validateBirthDate = (dateStr: string): string => {
    if (!dateStr) {
        return "La date de naissance est requise.";
    }

    const currentDate = new Date();
    const birthDate = new Date(dateStr);

    // Vérifier si la date est invalide
    if (isNaN(birthDate.getTime())) {
        return "Date de naissance invalide.";
    }

    const calculateAge = (birthDate: Date, currentDate: Date): number => {
        const birthYear = birthDate.getFullYear();
        const currentYear = currentDate.getFullYear();
        let age = currentYear - birthYear;

        const birthMonth = birthDate.getMonth();
        const currentMonth = currentDate.getMonth();
        if (
            currentMonth < birthMonth ||
            (currentMonth === birthMonth &&
                currentDate.getDate() < birthDate.getDate())
        ) {
            age--;
        }
        return age;
    };

    const age = calculateAge(birthDate, currentDate);
    if (age < 18) return "L'employé doit avoir 18 ans.";

    return "";
};
// Validation de la date de début
export const validateStartDate = (
    startDateStr: string,
    birthDateStr: string
): string => {
    if (!startDateStr) {
        return "La date de début est requise.";
    }
    if (!birthDateStr) {
        return "La date de naissance est requise.";
    }

    const startDate = new Date(startDateStr);
    const birthDate = new Date(birthDateStr);

    if (isNaN(startDate.getTime()) || isNaN(birthDate.getTime())) {
        return "Date invalide.";
    }

    // Calcul de la date minimale de début (date de naissance + 18 ans)
    const minStartDate = new Date(birthDate);
    minStartDate.setFullYear(minStartDate.getFullYear() + 18);

    if (startDate < minStartDate) {
        return "L'employé doit avoir 18 ans.";
    }

    return "";
};

export const validateZipCode = (zip: string): string => {
    return /^[0-9]{5}$/.test(zip)
        ? ""
        : "Le code postal doit être un nombre à 5 chiffres.";
};

// Validation des nombres (par exemple pour les tournois)
export const validateNumberInput = (value, min = 0, max = 99) => {
    if (!value || isNaN(value) || value < min || value > max) {
        return `Value must be a number between ${min} and ${max}.`;
    }
    return "";
};

// Validation des boutons radio
export const validateRadio = (options) => {
    const isChecked = options.some((option) => option.checked);
    if (!isChecked) {
        return "Please select an option.";
    }
    return "";
};

// Validation des cases à cocher
export const validateCheckbox = (isChecked) => {
    if (!isChecked) {
        return "You must agree to the terms and conditions.";
    }
    return "";
};

// Validation du mot de passe
export const validatePassword = (password: string): string => {
    const passwordRegExp = /^[a-zA-Z0-9!@#$%^&*_-]{8,}$/;
    // Au moins 8 caractères avec des caractères spéciaux autorisés
    if (!password || !passwordRegExp.test(password)) {
        return "Password must be at least 8 characters long and include letters, numbers, and the following special characters: !@#$%^&*_-";
    }
    return ""; // Pas d'erreur
};

// Validation des caractères alphanumériques pour le nom d'utilisateur
export const isAlphanumeric = (str: string): string => {
    const alphanumericRegExp = /^[a-zA-Z0-9]*$/; // Seulement des lettres et chiffres
    if (!str || !alphanumericRegExp.test(str)) {
        return "User Name can only contain alphanumeric characters.";
    }
    return ""; // Pas d'erreur
};

// Fonction générique pour vérifier si un champ est vide
export const isNotEmpty = (value: string, fieldName: string): string => {
    return !value || value.trim() === ""
        ? `${fieldName} ne doit pas être vide.`
        : "";
};
