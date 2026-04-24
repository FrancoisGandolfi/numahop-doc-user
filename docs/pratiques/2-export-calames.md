---
title: Export CALAMES
sidebar_label: Export CALAMES
sidebar_position: 1
description: Exporter un instrument de recherche depuis CALAMES
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "arrow-up-from-bracket"]} /> Export CALAMES


## Présentation

Cette page décrit comment faire un export EAd.xml depuis Calames.

## Export depuis Calames

### Retrouver sa notice à exporter dans Calames

- **Repérer le fichier où se trouve votre cote** et cliquer dessus
- Cliquer sur **archdesc** .
- Cliquer sur **desc** 
- **Se positionner sur le manuscrit à exporter** dans l'arborrescence .
- Faire un clic droit, puis  **Éditer**.

### Récupérer l'identifiant de la notice

- Une fois sur la notice, **se positionner au niveau de la balise *c*** pour faire apparaître l’identifiant *id* en haut à droite.
- **Copier l’identifiant**.

### Exporter la notice

- Se repositionner au niveau du fichier, faire un clic droit, puis sélectionnez **Exporter**.
- Une fenêtre pop-up s’ouvre, cliquer sur **Oui**.
- Une fenêtre apparaît vous demandant de choisir un modèle. Choisissez **Natif-C**.
- Une nouvelle fenêtre apparaît. *Coller votre identifiant de la notice à exporter** entre les guillemets
- Une fenêtre d’enregistrement apparaît. **Enregistrer votre fichier**
 sur votre ordinateur en ajoutant une extension au format .xml.

## Chargement dans NumaHOP

Vous pouvez maintenant charger vos notices à l'aide de la procédure d'import [des notice simples](/docs/utilisateur/5_Imports/1-notices-simples.md)ou des [notices mères filles](/docs/utilisateur/5_Imports/2-notices-meres-filles.md) selon le niveau exportée depuis Calames. 

