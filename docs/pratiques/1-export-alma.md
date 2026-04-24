---
title: Export ALMA
sidebar_label: Export ALMA
sidebar_position: 1
description: Exporter des notices biblographiques depuis ALMA
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "arrow-up-from-bracket"]} /> Export ALMA

 ## Présentation

 Cette interface permet de savoir comment réaliser un export de données au format Marc.xml depuis Alma.
 
 Pour se faire, elle décrit les étapes suivantes :
- Création d’un Jeu de données dans Alma	2
- Export du jeu de données dans ALMA	5
- Récuparation du fichier marc.xml	6


 ## Création d'un jeu de données dans Alma
La première étape consiste à créer un jeu de données pour rassembler toutes les notices que vous souhaitez voir importer dans NumaHOP.

### Caractéristique du du jeu de données 
Aller dans **Admin** > **Gérer les ensemble** > **Créer un ensemble exemplarisé**

**Remplir la fenêtre d'information** suivante : 

| **Libellé** | **Commentaire** | **Détails** | **Exemple**  |
|---------|-------------|---------|---|
| Nom ensemble        | Nom de votre corpus            |🔴 Obligatoire         | *Esotérisme*  |
| Description         | Description plus fine du contenu            | 🔵 Facultatif        |*document de la Réserve*   |
|  Note       | Note informative            | 🔵 Facultatif        |   |
| Type de contenu de l'ensemble        |  Choisir le type de données à traiter            | 🔵 Facultatif        | *Titres physiques*  |
| Privé /actif        | Cocher la croix privée si vous souhaitez ne pas avoir un jeu de notices public             |🔵 Facultatif         | *privé*  |
| Ajout exemplaires à l'ensemble        | Choix de la méthodologie d'ajout des notices            |🔵 Facultatif         |*à partir de la recherche*   |


### Ajout de notices au jeu de données
Une fois votre jeu crée, cliquer sur **Ajouter des membles à l'ensemble**

**Lancer une recherche** par exemple par cote pour ajouter des notices à votre ensemble.

**Sélectionner la notice**, cliquer sur **Ajouter à la sélection**

Refaire l'opération de recherche et de sélection jusqu'à avoir un jeu de données complet pour l'export. 



## Export du jeu de données dans ALMA

### Exportation du jeu de données

Aller dans **Ressources** > **Publication** > **Profils de publication**

La liste des profils apparait, prendre le votre et cliquer sur **Plus d'actions** > **Modifier** 

**Changer le nom de l’ensemble** y indiquer votre jeu de données à exporter à l’aide du menu déroulant

Cliquer sur **Enregistrer**  > **Executer**

### Récupération du jeu de données sur le serveur STFP d'Alma

**Aller sur votre serveur Alma** > **Récupérer votre fichier Marc.xml** 


### Chargement dans NumaHOP

Vous pouvez maintenant charger vos notices à l'aide de la [procédure d'import des notice simples](docs/utilisateur/5_Imports/1-notices-simples.md)


