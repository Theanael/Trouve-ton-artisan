# Trouve-ton-artisan

## Prérequis

- Node.js et npm installés.
- MySQL ou MariaDB installé et démarré.
- Git, pour récupérer le dépôt.
- Un navigateur web.

## Installation

### 1. Récupérer le projet

```bash
git clone <URL_DU_DEPOT_GITHUB>
cd trouve-ton-artisan
```

Remplacer `<URL_DU_DEPOT_GITHUB>` par l'adresse du dépôt GitHub.

### 2. Installer les dépendances

Dans un terminal, installer celles du frontend :

```bash
cd frontend
npm install
```

Dans un autre terminal, depuis la racine du projet, installer celles du backend :

```bash
cd backend
npm install
```

### 3. Configurer la base de données

- Démarrer MySQL ou MariaDB.
- Créer la base de données utilisée par le projet.
- Exécuter le script SQL de création et de peuplement fourni dans le dépôt, s'il est présent.
- Configurer les identifiants de connexion à la base de données dans le fichier d'environnement attendu par le backend.

Si le frontend utilise une variable d'environnement pour l'adresse de l'API, vérifier qu'elle pointe vers le backend local, par exemple :

```dotenv
VITE_API_URL=http://localhost:3000
```

Le nom de la variable doit correspondre à celui utilisé dans le code.

## Lancement

Le frontend et le backend doivent être lancés dans deux terminaux distincts.

### 1. Lancer le backend

```bash
cd backend
npm run dev
```

Si le script `dev` n'existe pas dans le `package.json`, utiliser le script de démarrage qui y est défini, par exemple :

```bash
npm start
```

L'API est généralement disponible à l'adresse `http://localhost:3000`, selon la configuration du projet.

### 2. Lancer le frontend

Dans un second terminal :

```bash
cd frontend
npm run dev
```

Vite affiche l'adresse locale du site dans le terminal, généralement `http://localhost:5173`. Ouvrir cette adresse dans un navigateur.
