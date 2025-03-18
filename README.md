# HRnet - Migration vers React

## 📌 Présentation

HRnet est une application interne de gestion des employés de WealthHealth.  
Actuellement basée sur jQuery, cette application souffre de problèmes de performances et de maintenabilité.  
Ce projet a pour but de migrer HRnet vers React afin d'améliorer sa stabilité, ses performances et son évolutivité.

## 🚀 Objectifs

-   Convertir l'ensemble de l'application HRnet en React
-   Remplacer les plugins jQuery existants par des composants React
-   Implémenter une gestion d'état moderne
-   Effectuer des tests de performance et comparer les résultats
-   Documenter et publier un composant React sous forme de package

## 🛠️ Stack technique

-   **Framework :** React avec Vite
-   **Gestion d'état :** Context API / Redux
-   **Styles :** CSS Modules, TailwindCSS ou Styled Components
-   **Performance :** Audits avec Lighthouse
-   **Tests :** tests de performance Lighthouse en comparant l'ancienne et la nouvelle application.
-   **Déploiement :** GitHub Pages ou AWS Amplify

## 📌 Installation

1️⃣ **Cloner le projet**

```bash
git clone https://github.com/Jerem16/hrnet-react.git
cd hrnet-react
```

2️⃣ Installer les dépendances

```bash
npm install
yarn install
```

3️⃣ Lancer le serveur de développement

```bash
npm run dev
yarn run dev
```

🎯 Fonctionnalités à développer
📌 Conversion de l'application

Migration des pages "Create Employee" et "Employee List" en React
Mise en place d'un système de gestion d'état

    Modernisation du design

🔄 Conversion des plugins jQuery

Date Picker → Composant React personnalisé
Fenêtre modale → Composant React personnalisé
Menus déroulants → Remplacement par un composant React natif

    Tableau des employés → Optimisation du rendu

## Développé avec :

-   [Visual Studio Code](https://code.visualstudio.com/) - Éditeur de texte
-   [Sass](https://sass-lang.com/) - Préprocesseur CSS
-   [React 19](https://fr.reactjs.org/) - Bibliothèque JavaScript libre développée par Facebook
-   [Vite](https://vite.dev/) - Boîte à outils référence pour initier un projet React
-   [React Router V6](https://reactrouter.com/) - Bibliothèque de routage pour React
-   [Typescript](https://www.typescriptlang.org/) - Un package utilisé pour documenter les types de propriétés prévus transmises aux composants React
-   [Redux](https://redux.js.org/) - Bibliothèque JS de gestion d'état pour applications web
-   [GitHub](https://github.com/) - Outil de gestion de versions
-   [GitHub Pages](https://pages.github.com/) - Outil d’hébergement


📊 Tests de performance

Audit Lighthouse avant et après la migration

    Comparaison des temps de chargement

📜 Documentation

Chaque composant React converti sera documenté avec des commentaires et un guide d'utilisation.
🤝 Contribuer

Les contributions sont les bienvenues ! Pour proposer des améliorations :

    Fork le repo
    Crée une branche (feature/ma-nouvelle-fonctionnalité)
    Soumets une Pull Request

📜 Licence

Ce projet est sous licence MIT. Soumets une Pull Request

📜 Licence

Ce projet est sous licence MIT.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
