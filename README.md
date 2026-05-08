# 📋 Routine Quotidienne

Application web de suivi de routine quotidienne pour un jeune adulte autiste.  
Fonctionne 100% dans le navigateur — aucun serveur requis.

---

## 📁 Structure des fichiers

```
routine-projet/
├── index.html        ← Page utilisateur (la routine du jour)
├── admin/
│   └── index.html    ← Page administration (protégée par mot de passe)
└── README.md
```

---

## 🚀 Mise en ligne sur GitHub Pages

### Étape 1 — Créer un dépôt GitHub

1. Aller sur [github.com](https://github.com) et se connecter
2. Cliquer **"New repository"**
3. Nommer le dépôt : `routine` (ou ce que vous voulez)
4. Laisser **Public** (requis pour GitHub Pages gratuit)
5. Cliquer **"Create repository"**

### Étape 2 — Uploader les fichiers

**Option A — Interface web (plus simple) :**
1. Dans le dépôt créé, cliquer **"uploading an existing file"**
2. Glisser-déposer `index.html`
3. Cliquer **"Commit changes"**
4. Créer le dossier `admin` : cliquer **"Add file" → "Create new file"**,  
   taper `admin/index.html` dans le nom, coller le contenu du fichier admin
5. Cliquer **"Commit changes"**

**Option B — Git en ligne de commande :**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/routine.git
git push -u origin main
```

### Étape 3 — Activer GitHub Pages

1. Aller dans **Settings** du dépôt
2. Dans le menu gauche, cliquer **"Pages"**
3. Sous **"Source"**, sélectionner **"Deploy from a branch"**
4. Choisir la branche **`main`** et le dossier **`/ (root)`**
5. Cliquer **"Save"**
6. Attendre ~1-2 minutes, puis visiter :  
   `https://VOTRE_USERNAME.github.io/routine/`

---

## 🔗 URLs une fois en ligne

| Page | URL |
|------|-----|
| Routine (utilisateur) | `https://VOTRE_USERNAME.github.io/routine/` |
| Administration | `https://VOTRE_USERNAME.github.io/routine/admin/` |

---

## 🔐 Page Administration

- **Mot de passe par défaut :** `admin123`
- ⚠️ **À changer immédiatement** via le panneau "Paramètres" dans la page admin
- La page admin n'est accessible qu'en connaissant l'URL `/admin/`
- **Aucun lien** vers l'admin n'existe dans la page utilisateur
- La session admin expire à la fermeture du navigateur

---

## 💾 Comment les données sont sauvegardées

Les données sont stockées dans le **localStorage** du navigateur.  
Cela signifie :
- ✅ Fonctionne sans connexion internet (après le premier chargement)
- ✅ Les données persistent entre les sessions
- ⚠️ Les données sont **liées à l'appareil et au navigateur**
- ⚠️ Vider le cache du navigateur efface l'historique

Pour consulter l'historique, l'administrateur doit accéder à la page admin  
**depuis le même appareil et navigateur** que celui utilisé pour la routine.

---

## ✏️ Personnalisation

### Changer les tâches
Modifier le tableau `TASKS_DATA` dans `index.html` et le même tableau dans `admin/index.html`.

### Changer les horaires
Modifier les champs `time:` dans `TASKS_DATA` de `index.html`.

### Changer le nom affiché
Modifier le `<h1>` dans `index.html`.
