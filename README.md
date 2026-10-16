# Trouve-ton-artisan

## Prérequis

- Node.js et npm installés.
- MySQL installé et démarré.
- Git pour récupérer le dépôt.
- Un navigateur web.

## Installation

### 1. Récupérer le projet

```bash
git clone https://github.com/Theanael/Trouve-ton-artisan/edit/main/README.md
cd trouve-ton-artisan
```

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

### 3. Configurer la base de données et des variables d'environnement.

#### Base de donnée
- Démarrer MySQL.
- Créer la base de données utilisée par le projet.
- Exécuter les scripts SQL de création et de peuplement fourni dans le dépôt.

#### Variables d'environnement

A l'aide des deux fichiers `.env.example` fournis, créer des fichiers `.env` aux même emplacement et remplacer les valeurs comme suit :

- DB_NAME, DB_USER, DB_PASSWORD, DB_HOST et DB_PORT définissent les paramètres de connexion à MySQL.

- CORS_ORIGINS liste les origines autorisées à effectuer des requêtes vers l'API (au minimum le frontend).

- VITE_API_URL indique au frontend l'adresse du backend.



## Lancement

Le frontend et le backend doivent être lancés dans deux terminaux distincts.

### 1. Lancer le backend

```bash
cd backend
npm run dev
```

L'API devrait être disponible à l'adresse `http://localhost:3000`.

### 2. Lancer le frontend

Dans un second terminal :

```bash
cd frontend
npm run dev
```

Vite affiche l'adresse locale du site dans le terminal, généralement `http://localhost:5173`. Ouvrir cette adresse dans un navigateur.
