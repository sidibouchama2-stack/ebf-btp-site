# EBF-BTP — Site web

Site vitrine de **EBF-BTP SARL**, entreprise mauritanienne de Bâtiment et
Travaux Publics (certifiée BAT2), construit avec React, Vite et Tailwind CSS.

## Démarrage

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build de production
```

## Structure

- `src/components/` — sections de la page (Navbar, Hero, About, Services,
  Process, Projects, Gallery, Contact, Footer)
- `src/data/projects.js` — données des réalisations (titre, lieu, période,
  budget, photos)
- `src/assets/img/` — photos extraites du prospectus de l'entreprise
- `src/utils/format.js` — formatage des nombres et montants (MRU)

## Déploiement

Le dossier `dist/` généré par `npm run build` est un site statique : il peut
être déployé sur Netlify, Vercel, GitHub Pages ou tout hébergement statique.
