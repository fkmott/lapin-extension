# 🐇 Langage LAPIN

**Langage d'Apprentissage de la Programmation INtutive**  
*Une extension VS Code pour apprendre à programmer en français*

---

## ✨ **Fonctionnalités**

### 🎨 **Expérience de développement**
- ✅ **Coloration syntaxique** avancée
- ✅ **Auto-complétion** avec snippets intelligents
- ✅ **Surbrillance** des mots-clés en français
- ✅ **Indentation** automatique des blocs
- ✅ **Paires automatiques** (si...fin, tant que...fin)

### 🚀 **Exécution intégrée**
- 🎯 **Bouton "Run"** dans la barre d'état
- 📝 **Exécution directe** depuis l'éditeur
- 🐛 **Mode Debug** avec messages détaillés
- 📊 **Sortie en temps réel** dans le terminal

### 📚 **Pour l'apprentissage**
- 🇫🇷 **Syntaxe en français** intuitive
- 🎮 **Exemples intégrés** pour débuter
- 📖 **Documentation en ligne** dans les tooltips
- 🧩 **Structures de contrôle** simplifiées

---

## 🚀 **Installation**

### **Depuis VS Code Marketplace**
1. Ouvrez **VS Code**
2. Appuyez sur `Ctrl+Shift+X` (Windows/Linux) ou `Cmd+Shift+X` (Mac)
3. Recherchez **"LAPIN"**
4. Cliquez sur **Installer**

### **Installation manuelle**
```bash
# Clonez le dépôt
git clone https://github.com/fkmott/lapin-extension.git

# Ouvrez dans VS Code
code lapin-extension

# Appuyez sur F5 pour tester
```

---

## 📝 **Premiers pas**

### **1. Créez votre premier programme**
Créez un fichier `bonjour.lapin` :
```lapin
// Mon premier programme LAPIN
afficher "🐇 Bonjour le monde !"
nom = "LAPIN"
afficher "J'adore programmer avec " + nom
```

### **2. Exécutez-le**
- Cliquez sur le bouton **🐇 Run** dans la barre d'état
- Ou faites un **clic droit** → "🐇 Exécuter le code LAPIN"
- Ou utilisez le **palette de commandes** (`Ctrl+Shift+P`) → "LAPIN: Run"

---

## 🎯 **Syntaxe du langage**

### **Variables et affichage**
```lapin
// Variables simples
nom = "Alice"
age = 25
est_programmeur = vrai

// Affichage
afficher "Bonjour, je m'appelle " + nom
ecrire "J'ai "  // Sans retour à la ligne
afficher age + " ans"
```

### **Conditions**
```lapin
// Condition simple
si age >= 18 alors
    afficher "Vous êtes majeur"
sinon
    afficher "Vous êtes mineur"
fin

// Conditions multiples
si age > 18 et est_programmeur alors
    afficher "Programmeur majeur !"
fin
```

### **Boucles**
```lapin
// Boucle tant que
compteur = 0
tant que compteur < 5
    afficher "Tour numéro " + compteur
    compteur = compteur + 1
fin

// Boucle répéter
repeter 3 fois
    afficher "Répétition"
fin

// Boucle pour chaque
animaux = ["lapin", "chat", "chien"]
pour chaque animal dans animaux
    afficher "J'aime les " + animal
fin
```

### **Fonctions**
```lapin
// Définition de fonction
fonction saluer(nom_personne)
    message = "Bonjour " + nom_personne + " !"
    retourner message
fin

// Appel de fonction
resultat = saluer("Bob")
afficher resultat

// Fonction avec plusieurs paramètres
fonction additionner(a, b)
    somme = a + b
    retourner somme
fin
```

### **Listes et collections**
```lapin
// Création de liste
nombres = [1, 2, 3, 4, 5]
fruits = ["pomme", "banane", "orange"]

// Opérations sur listes
afficher longueur(nombres)  // Affiche 5
ajouter(fruits, "kiwi")     // Ajoute un élément

// Accès aux éléments
afficher fruits[0]          // Affiche "pomme"
```

---

## 🔧 **Fonctions intégrées**

### **Entrée/Sortie**
- `afficher(texte)` : Affiche avec retour à la ligne
- `ecrire(texte)` : Affiche sans retour à la ligne
- `lire()` : Lit une ligne de texte
- `lire_nombre()` : Lit un nombre

### **Mathématiques**
- `nombre_aleatoire(min, max)` : Nombre aléatoire
- `arrondir(nombre, decimales)` : Arrondissement
- `absolu(nombre)` : Valeur absolue
- `racine(nombre)` : Racine carrée

### **Textes**
- `longueur(texte)` : Longueur d'une chaîne
- `majuscules(texte)` : Conversion en majuscules
- `minuscules(texte)` : Conversion en minuscules
- `texte_en_nombre(texte)` : Conversion texte → nombre
- `nombre_en_texte(nombre)` : Conversion nombre → texte

### **Utilitaires**
- `maintenant()` : Heure actuelle
- `date()` : Date actuelle
- `inclure(fichier)` : Inclut un autre fichier LAPIN

---

## 🛠️ **Configuration**

### **Paramètres recommandés** (dans `.vscode/settings.json`)
```json
{
    "[lapin]": {
        "editor.tabSize": 4,
        "editor.insertSpaces": true,
        "editor.wordWrap": "on",
        "editor.formatOnSave": true
    },
    "files.associations": {
        "*.lapin": "lapin",
        "*.lap": "lapin"
    }
}
```

### **Snippets disponibles**
Tapez ces raccourcis puis `Tab` :
- `afficher` → `afficher "|"`
- `si` → Structure conditionnelle complète
- `tantque` → Boucle tant que
- `pour` → Boucle pour chaque
- `fonction` → Définition de fonction

---

## 🐛 **Dépannage**

### **Problèmes courants**

| Problème | Solution |
|----------|----------|
| "Python non trouvé" | Installez Python 3.8+ depuis [python.org](https://python.org) |
| Bouton "Run" invisible | Ouvrez un fichier `.lapin` d'abord |
| Erreur d'exécution | Vérifiez la syntaxe avec `lapin_debug.py` |
| Pas de coloration | Redémarrez VS Code |

### **Mode Debug**
Utilisez la version debug pour plus de détails :
```bash
python lapin_debug.py votre_fichier.lapin
```

---

## 📁 **Structure du projet**

```
lapin-extension/
├── extension.js          # Extension principale
├── package.json         # Configuration VS Code
├── lapin.py            # Interpréteur complet
├── lapin_debug.py      # Version debug simplifiée
├── lapin_stdlib.py     # Bibliothèque standard
├── syntaxes/
│   └── lapin.tmLanguage.json  # Coloration syntaxique
├── language-configuration.json # Configuration langage
└── snippets/
    └── snippets.json   # Auto-complétion
```

---

## 🤝 **Contribuer**

Les contributions sont les bienvenues !

1. **Fork** le projet
2. **Clonez** votre fork
3. **Créez une branche** (`git checkout -b feature/ma-fonctionnalite`)
4. **Commit** vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
5. **Push** (`git push origin feature/ma-fonctionnalite`)
6. **Ouvrez une Pull Request**

---

## 📄 **Licence**

Ce projet est sous licence **MIT**.  
Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

**🐇 Happy coding with LAPIN !**  
*Parce qu'apprendre à programmer devrait être aussi simple qu'un saut de lapin !*

---

*Dernière mise à jour : Décembre 2025*  
*Version : 1.0.0*
