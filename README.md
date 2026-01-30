# 🎓 Projet React : State et Props

Projet pratique pour apprendre React - State et Props
**Année Universitaire : 2025-2026**

## 📋 Contenu du Projet

Ce projet contient 5 exercices complets :

1. **Compteur** - Gestion du state avec incrémentation/décrémentation
2. **Liste Dynamique** - Ajout d'éléments dans une liste
3. **Boîte à Couleur** - Changement dynamique de couleurs
4. **Gestionnaire de Notes** - Ajout, suppression et calcul de moyenne
5. **Todo List** - Tâches avec priorités et recherche

## 🚀 Installation

### 1. Installer les dépendances

```bash
npm install
```

### 2. Démarrer le projet

```bash
npm start
```

Le projet s'ouvrira automatiquement dans votre navigateur à l'adresse `http://localhost:3000`

## 📁 Structure du Projet

```
src/
├── components/
│   ├── Counter.js          # Exercice 1
│   ├── ListManager.js      # Exercice 2
│   ├── ColorBox.js         # Exercice 3
│   ├── GradeManager.js     # Exercice 4
│   └── TodoList.js         # Exercice 5
├── App.js
├── App.css
└── index.js
```

## 🎯 Objectifs d'Apprentissage

- ✅ Comprendre la différence entre **state** et **props**
- ✅ Maîtriser l'utilisation du hook **useState**
- ✅ Manipuler les **props** pour passer des données
- ✅ Gérer les événements (onClick, onChange, onSubmit)
- ✅ Valider les données utilisateur
- ✅ Créer des composants réutilisables

## 📚 Concepts React Utilisés

### State vs Props

| State | Props |
|-------|-------|
| Données internes | Données du parent |
| Peut être modifié | En lecture seule |
| `useState()` | Attributs du composant |
| Déclenche re-render | Reçues en paramètres |

### Hooks Utilisés

- `useState` - Gérer l'état local

### Événements

- `onClick` - Clic sur bouton
- `onChange` - Changement dans input
- `onSubmit` - Soumission de formulaire

## 💡 Exemples d'Utilisation

### Exercice 1 : Compteur

```jsx
<Counter initialCount={10} step={5} />
```

### Exercice 2 : Liste

```jsx
<ListManager
  initialItems={['React', 'Angular', 'VueJs']}
  placeholder="Ajouter un framework..."
/>
```

### Exercice 3 : Couleur

```jsx
<ColorBox
  initialColor="#3498db"
  colorOptions={['#e74c3c', '#3498db', '#2ecc71']}
/>
```

### Exercice 4 : Notes

```jsx
<GradeManager initialNotes={[15, 12.5, 18, 14]} />
```

### Exercice 5 : Todo

```jsx
<TodoList
  initialTasks={[
    { id: 1, name: 'Apprendre React', priority: 'Haute', completed: false }
  ]}
/>
```

## 🎨 Personnalisation

Vous pouvez modifier :
- Les valeurs initiales des props
- Les styles dans chaque composant
- Ajouter de nouvelles fonctionnalités

## 🛠️ Technologies

- React 18.2.0
- React Hooks (useState)
- CSS-in-JS (Inline Styles)

## 📝 Notes

- Tous les composants utilisent des **fonctions fléchées**
- Les styles sont définis avec **CSS-in-JS**
- Validation des données utilisateur
- Code commenté en français

## 🎯 Pour Aller Plus Loin

- Ajouter localStorage pour sauvegarder les données
- Utiliser useEffect pour les effets de bord
- Ajouter des animations CSS
- Créer des tests unitaires
- Utiliser TypeScript

## 👨‍💻 Auteur

Projet réalisé dans le cadre du cours React - State et Props

---

**Bon courage ! 💪**
