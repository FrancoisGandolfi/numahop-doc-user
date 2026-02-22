---
title: Mappings CSV
sidebar_label: Mappings CSV
sidebar_position: 4
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "file-csv"]} /> Mappings CSV

Import de notices via fichier CSV

### Mapping d’import dans NumaHOP

1. **Accéder au menu de mapping**
   - Sélectionnez l’icône correspondante dans le menu de gauche.
   - Dans l’encadré en bas à droite de l’écran, choisissez **Mapping des notices CSV**.

2. **Ajouter un nouveau mapping**
   - Cliquez sur **+** pour ajouter un nouveau mapping.
   - Une fenêtre s’affiche : donnez un nom au mapping et associez-le à une bibliothèque.

3. **Ajouter des règles de mapping**
   - Cliquez sur **Ajouter une règle** en bas à droite.
   - Un pop-up s’affiche pour configurer les règles.

---

### Exemple de mapping CSV

Certaines données de l’unité documentaire nécessitent des valeurs spécifiques dans les règles de mapping (à indiquer en tant que chaîne de caractères) :

| Champs de l’unité documentaire | Valeurs | Description |
|--------------------------------|---------|-------------|
| **Droits** | `TO_CHECK`, `FREE`, `RESTRICTED`, `RESTRICTED_WITH_AUTHORIZATION` | Droits à vérifier, libre de droits, sous droits, sous droits avec accord de l’auteur |
| **Archivable** | `TRUE`, `FALSE` |  |
| **Diffusable** | `TRUE`, `FALSE` |  |
| **Type de constat d’état** | `MONO_PAGE`, `MULTI_PAGE` | Constat d’état mono-feuillet ou multi-feuillets |

---

Mapping CSV

Le mapping CSV permet de renseigner les champs de l’unité documentaire à partir d’un fichier CSV à importer. Les données **Dublin Core** contenues dans le fichier CSV sont automatiquement insérées dans les champs correspondants de la notice.

---

### Format du fichier CSV

Pour garantir un import correct, respectez les règles suivantes :

- **Préfixe des colonnes Dublin Core** : Les noms des colonnes correspondant à des données Dublin Core doivent être préfixés par `dc:` (exemple : `dc:title`, `dc:identifier`).
- **Encadrement des champs** : Les champs doivent être entourés de **guillemets** (`"`).
- **Séparateur de champs** : Le séparateur doit être une **virgule** (`,`).

---

### Correspondance des propriétés

La propriété à renseigner dans le mapping correspond **au nom de la colonne du fichier CSV**.
