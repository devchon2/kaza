# Kasa — Plateforme de locations (React + React Router)

[![CI](https://img.shields.io/badge/CI-none-lightgrey)]() [![Licence](https://img.shields.io/badge/Licence-MIT-blue)]()

> Projet : **Développez une application Web avec React et React Router** — Kasa.  
> **Objectif général :** démarrer un projet React et implémenter l’ensemble du front (composants, routes, gallery, collapse) en respectant les maquettes Figma (responsive) et les contraintes UX (gallery looping, collapse closed by default, images cropped & centered).

## 📚 Table des matières
- [Description](#-description)
- [Objectifs pédagogiques](#-objectifs-p%C3%A9dagogiques)
- [Compétences & Preuves](#-comp%C3%A9tences--preuves)
- [Stack & Versions](#-stack--versions)
- [Structure du projet](#-structure-du-projet)
- [Fonctionnalités clés](#-fonctionnalit%C3%A9s-cl%C3%A9s)
- [Installation & Lancement](#-installation--lancement)
- [Available Scripts](#available-scripts)
- [Tests](#-tests)
- [Démo & Captures](#-d%C3%A9mo--captures)
- [Roadmap](#-roadmap)
- [Licence](#-licence)
- [Contact](#-contact)
- [English version](#english-version)

---

## 🚀 Description
Kasa est une refonte front d’un site de location d’appartements. Le projet vise à produire une SPA React conforme aux maquettes Figma, avec routing (React Router), galerie d’images (Gallery) et composants réutilisables (Collapse, Cards). Les données sont fournies sous forme d’un fichier JSON (20 annonces) pour construire l’UI sans backend durant le développement.

> **Résultats clés** : app React fonctionnelle • routing client • gallery accessible et comportement « looping » • collapses fermés par défaut.

## 🎯 Objectifs pédagogiques
- Initialiser une app React (Create React App ou Vite).  
- Implémenter React Router pour la navigation (routes dynamiques pour annonces).  
- Développer composants réutilisables : Gallery (carousel), Collapse (accordéon), Cards.  
- Intégrer les données depuis un fichier JSON (mock).  
- Respecter la maquette (images coupées/centrées, gallery hauteur fixe, responsive).

## 🧠 Compétences & Preuves
| Exigence pédagogique | Compétence recrutée | Mise en œuvre | Preuves (fichiers) |
|---|---|---:|---|
| Routing | **React Router** | Routes dynamiques pages logement / 404 | `src/App.jsx`, `src/routes/*` |
| Gallery | **JS / React** | Carousel looping, height fixed, prev/next hide logic | `src/components/Gallery.jsx` |
| UI & layout | **Responsive CSS** | Images crop/center, desktop-first ou mobile-first selon maquette | `src/styles/*`, `public/assets/*` |
| Data | **JSON mock** | 20 annonces pour peupler l’UI | `data/logements.json` (ou `public/data/`) |

*(Les fichiers cités correspondent aux conventions attendues dans le brief — adapte les chemins si ton repo utilise d’autres noms.)*

## 🧰 Stack & Versions
| Tech | Rôle |
|---|---|
| React | UI (CRA ou Vite) |
| React Router | Navigation |
| CSS3 / SASS | Styling |
| Node / npm | Dev tooling |
| JSON | Données mock |

*(Consulte `package.json` pour versions exactes.)*

## 🗂️ Structure du projet (exemple)
```txt
kasa/
├─ public/
│  └─ data/logements.json
├─ src/
│  ├─ components/
│  │  ├─ Gallery.jsx
│  │  ├─ Collapse.jsx
│  │  └─ Card.jsx
│  ├─ pages/
│  ├─ services/
│  │  └─ dataService.js
│  └─ App.jsx
└─ README.md
```

## ✅ Fonctionnalités clés
* [x] Routes client (home, logement/:id, about, 404).  
* [x] Gallery : prev/next avec looping, masque des boutons si 1 image, hauteur fixe.  
* [x] Collapse : fermés par défaut, accessible.  
* [x] Layout responsive fidèle à la maquette (images centrées/coupées).  
* [x] Données mock via JSON (20 annonces).

## ⚡ Installation & Lancement
```bash
# 1) Cloner
git clone https://github.com/devchon2/Kasa.git
cd Kasa

# 2) Installer
npm install   # ou yarn install

# 3) Lancer en dev
npm start     # ou yarn start
# Ouvrir http://localhost:3000
```
> Si le projet utilise Vite : `npm run dev`.

## 📜 Available Scripts
```bash
npm start
npm test
npm run build
npm run lint
```
(Vérifier les scripts réels dans `package.json`.)

## 🧪 Tests
* Tests manuels : gallery (loop, hide buttons), collapse states, responsive sur 1024×768+.  
* Recommandé : tests unitaires composants (Jest + React Testing Library).

## 🎥 Démo & Captures
* Livrable attendu : repo GitHub public + ZIP pour soutenance avec captures desktop/tablet/mobile et démonstration de la gallery.  
* Indiquer URL publique (GitHub Pages / Netlify) si déployé.

## 🗺️ Roadmap
* Ajouter tests E2E (Cypress) pour parcours navigation & gallery.  
* Automatiser CI (build + lint + tests).

## 📝 Licence
MIT — ajouter `LICENSE` à la racine si nécessaire.

## 📫 Contact
Rachid Chon — `rchon@rchon-dev.fr`

---

## English version

<details>
<summary>🇬🇧 Click to expand</summary>

# Kasa — Rental platform (React + React Router)

> Built from the training brief. Goal: implement a React SPA with routing, a fixed-height gallery, collapses and components following the Figma mockups.  
> See the French version for full installation, features, and structure.

</details>
