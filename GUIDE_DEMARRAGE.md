# 🚀 Guide de Démarrage Rapide

## Étapes pour lancer le projet

### Option 1 : Créer avec Create React App (Recommandé)

```bash
# 1. Créer le projet
npx create-react-app mon-projet-react

# 2. Aller dans le dossier
cd mon-projet-react

# 3. Copier les fichiers de ce projet dans votre projet :
#    - Copier tous les fichiers du dossier src/components
#    - Remplacer App.js
#    - Remplacer App.css

# 4. Démarrer le projet
npm start
```

### Option 2 : Utiliser directement ce projet

```bash
# 1. Aller dans le dossier du projet
cd projet-react-state-props

# 2. Installer les dépendances
npm install

# 3. Démarrer
npm start
```

## 📝 Structure des fichiers à copier

Si vous créez un nouveau projet, copiez ces fichiers :

```
Votre nouveau projet/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Counter.js
│   │   ├── ListManager.js
│   │   ├── ColorBox.js
│   │   ├── GradeManager.js
│   │   └── TodoList.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## ⚠️ Problèmes courants

### Erreur : "npm not found"
👉 Installez Node.js depuis https://nodejs.org/

### Erreur : "port 3000 already in use"
👉 Fermez les autres applications React ou utilisez :
```bash
PORT=3001 npm start
```

### Le projet ne démarre pas
👉 Supprimez node_modules et réinstallez :
```bash
rm -rf node_modules
npm install
npm start
```

## 📚 Commandes utiles

```bash
# Démarrer en mode développement
npm start

# Créer une version de production
npm run build

# Lancer les tests
npm test
```

## 🎯 Vérifier que tout fonctionne

Après avoir lancé `npm start`, vous devriez voir :
1. Le navigateur s'ouvre automatiquement
2. L'adresse : http://localhost:3000
3. La page avec tous les 5 exercices affichés

## 💡 Conseils

- Ouvrez la console du navigateur (F12) pour voir les erreurs
- Modifiez le code et sauvegardez - les changements apparaissent automatiquement
- Commencez par comprendre un composant avant de passer au suivant

## 📖 Ordre d'apprentissage recommandé

1. **Counter.js** - Le plus simple, comprendre useState
2. **ListManager.js** - Ajouter des éléments
3. **ColorBox.js** - Changement dynamique
4. **GradeManager.js** - Validation et calculs
5. **TodoList.js** - Le plus complet

Bon courage ! 🎓
