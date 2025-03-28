/**
 * Valide un nom de rue.
 * @param {string} name - Le nom de la rue à valider.
 * @returns {string} - Message d'erreur ou chaîne vide si valide.
 */
export const validateStreet = (name: string): string => {
    if (!name || name.length < 4) {
        return "Minimum 4 caractères."; // Vérifie si le nom de la rue a moins de 4 caractères
    }
    const specialCharsRegExp = /[!@#$%^&*()?:{}|<>/\\\[\]`~_+;=<>]/;
    if (specialCharsRegExp.test(name)) {
        return "Caractères spéciaux interdits.";
    }
    return ""; // Si tout est correct, retourne une chaîne vide (aucune erreur)
};

/**
 * Valide un prénom ou un nom de famille.
 * @param {string} name - Le prénom ou nom à valider.
 * @returns {string} - Message d'erreur ou chaîne vide si valide.
 */
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

/**
 * Valide une adresse email.
 * @param {string} email - L'adresse email à valider.
 * @returns {string} - Message d'erreur ou chaîne vide si valide.
 */
export const validateEmail = (email: string): string => {
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegExp.test(email)) {
        return "Please enter a valid email address.";
    }
    return "";
};

/**
 * Valide une date de naissance (doit être valide et l'utilisateur doit avoir au moins 18 ans).
 * @param {string} dateStr - La date de naissance en format YYYY-MM-DD.
 * @returns {string} - Message d'erreur ou chaîne vide si valide.
 */
export const validateBirthDate = (dateStr: string): string => {
    if (!dateStr) {
        return "La date de naissance est requise.";
    }

    const currentDate = new Date();
    const birthDate = new Date(dateStr);

    // Vérifie si la date est invalide
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

/**
 * Valide une date de début d'emploi (doit être après 18 ans de la date de naissance).
 * @param {string} startDateStr - La date de début d'emploi.
 * @param {string} birthDateStr - La date de naissance de l'employé.
 * @returns {string} - Message d'erreur ou chaîne vide si valide.
 */
export const validateStartDate = (
    startDateStr: string,
    birthDateStr: string
): string => {
    if (!birthDateStr) {
        return "La date de naissance est requise.";
    }
    if (!startDateStr) {
        return "La date de début est requise.";
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

/**
 * Valide un code postal (5 chiffres).
 * @param {string} zip - Le code postal à valider.
 * @param {string} fieldName - Nom du champ pour personnaliser le message d'erreur.
 * @returns {string} - Message d'erreur ou chaîne vide si valide.
 */
export const validateZipCode = (zip: string, fieldName: string): string => {
    if (!zip) return `${fieldName} ne doit pas être vide.`;
    return /^[0-9]{5}$/.test(zip)
        ? ""
        : "Le code postal doit contenir 5 chiffres.";
};

/**
 * Valide un nombre dans une plage donnée.
 * @param {number} value - La valeur numérique à valider.
 * @param {number} [min=0] - Valeur minimale acceptée.
 * @param {number} [max=99] - Valeur maximale acceptée.
 * @returns {string} - Message d'erreur ou chaîne vide si valide.
 */
export const validateNumberInput = (value: number, min = 0, max = 99) => {
    if (!value || isNaN(value) || value < min || value > max) {
        return `Value must be a number between ${min} and ${max}.`;
    }
    return "";
};

/**
 * Vérifie si au moins un bouton radio est sélectionné.
 * @param {Array<{ checked: boolean }>} options - Liste des options radio.
 * @returns {string} - Message d'erreur ou chaîne vide si valide.
 */
export const validateRadio = (options: { checked: boolean }[]): string => {
    return options.some((option) => option.checked)
        ? ""
        : "Veuillez sélectionner une option.";
};

/**
 * Vérifie si une case à cocher est cochée.
 * @param {boolean} isChecked - Indique si la case est cochée.
 * @returns {string} - Message d'erreur ou chaîne vide si valide.
 */
export const validateCheckbox = (isChecked: boolean): string => {
    return isChecked ? "" : "Vous devez accepter les conditions.";
};

/**
 * Valide un mot de passe (au moins 8 caractères avec lettres, chiffres et caractères spéciaux).
 * @param {string} password - Le mot de passe à valider.
 * @returns {string} - Message d'erreur ou chaîne vide si valide.
 */
export const validatePassword = (password: string): string => {
    const passwordRegExp = /^[a-zA-Z0-9!@#$%^&*_-]{8,}$/;
    return password && passwordRegExp.test(password)
        ? ""
        : "Le mot de passe doit contenir au moins 8 caractères avec des lettres, chiffres et caractères spéciaux.";
};

/**
 * Vérifie si une chaîne contient uniquement des caractères alphanumériques.
 * @param {string} str - La chaîne à vérifier.
 * @returns {string} - Message d'erreur ou chaîne vide si valide.
 */
export const isAlphanumeric = (str: string): string => {
    const alphanumericRegExp = /^[a-zA-Z0-9]*$/;
    return str && alphanumericRegExp.test(str)
        ? ""
        : "Le nom d'utilisateur ne doit contenir que des lettres et des chiffres.";
};

/**
 * Vérifie si un champ n'est pas vide.
 * @param {string} value - La valeur du champ.
 * @param {string} fieldName - Nom du champ pour personnaliser le message d'erreur.
 * @returns {string} - Message d'erreur ou chaîne vide si valide.
 */
export const isNotEmpty = (value: string, fieldName: string): string => {
    return !value || value.length < 2
        ? `${fieldName} ne doit pas être vide.`
        : "";
};
