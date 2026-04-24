---
title: Export CALAMES
sidebar_label: Export CALAMES
sidebar_position: 1
description: Exporter un instrument de recherche depuis CALAMES
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "arrow-up-from-bracket"]} /> Export CALAMES

### Se connecter à Calames Production

1. Repérez le fichier où se trouve votre cote et cliquez dessus (exemple : pour la cote 2205, allez sur le fichier 2001-2500).
2. L’arborescence suivante apparaît, cliquez sur `[archdesc]`.
3. L’arborescence suivante apparaît, cliquez sur `[desc]`.
4. Dans l’arborescence, positionnez-vous sur le manuscrit que vous souhaitez traiter (exemple : Ms. 2205).
5. Faites un clic droit, puis sélectionnez **Éditer**.

### Récupérer l'identifiant de la notice

1. La notice en EAD apparaît. Positionnez la souris au niveau de la balise `<c>` pour faire apparaître l’identifiant (id) en haut à droite.
2. Copiez l’identifiant.

### Exporter la notice

1. Repositionnez-vous au niveau du fichier, faites un clic droit, puis sélectionnez **Exporter**.
2. Une fenêtre pop-up s’ouvre, cliquez sur **Oui**.
3. Une fenêtre apparaît vous demandant de choisir un modèle. Choisissez **Natif-C**.
4. Une nouvelle fenêtre apparaît. Collez votre identifiant de la notice à exporter entre les guillemets, comme dans le modèle ci-dessous :

```xml
<c id="votre_identifiant">
```

5. Une fenêtre d’enregistrement apparaît. Enregistrez votre fichier sur votre ordinateur en ajoutant une extension au format .xml.

Import Notices NumaHOP

Allez dans Gestion unitaire → Import.
Paramètres d'import

Choisissez les paramètres suivants :

Type d’import : Hiérarchie de composants dans une seule notice.
Format de fichier : EAD.
Mapping EAD : Mapping BSG EAD.
Mapping des composants EAD enfant : Mapping BSG EAD.
Fichier à téléverser : Récupérez votre cote à importer.

Critères d'import


Dans Import, choisissez les critères suivants :

Projet : Choisissez dans la liste déroulante votre projet.
Lot : Choisissez dans la liste déroulante votre lot.
Vérifier les unités documentaires : Laissez la case cochée.
Rechercher des doublons : Laissez la case cochée.
Rendre les unités documentaires archivables : Cochez la case si le document doit être archivé au CINES dans le cadre du projet.
Rendre les unités documentaires diffusables : Cochez la case si le document doit être diffusé dans le cadre du projet.


Une fois les cases remplies, cliquez sur Importer pour pré-importer les notices.

Pré-import des notices

La page suivante apparaît. Elle vous permet de visualiser le pré-import de notices et de sélectionner les notices que vous souhaitez importer à l’aide du menu déroulant.
Une fois que vous avez sélectionné vos notices, cliquez sur Importer pour importer définitivement vos notices.
Une nouvelle fenêtre s’ouvre, indiquant que les documents ont été importés.


