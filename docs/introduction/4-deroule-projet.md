---
title: Déroulé d'un projet
sidebar_label: Déroulé d'un projet
sidebar_position: 4
description: Exemples fonctionnels de projets types
---

import Icon from '@site/src/components/Icon';

# Déroulé d'un projet <Icon icon={["fa", "diagram-project"]} />

On distingue deux principaux types de projets.
- les **projets standards**, qui couvrant l’intégralité du cycle de vie des documents, de la sélection des documents physiques et de leur signalement, jusqu’à la diffusion et à l'archivage des reproductions numériques ;
- les **reprises de passif**, qui visent à intégrer des documents déjà numérisés dans NumaHop, sans passer par une phase de numérisation physique, pour permettre une structuration, un contrôle, une diffusion et le cas échant un archivage, pour en faire un ensemble cohérent.

:::warning
Le déroulé de ces projets types détaillé ci-dessous reposent d'abord sur le parametrage des configurations de NumaHop, puis sur l'enchaînement des étapes d'un _worflow_.
- les étapes de configuration peuvent être **effectuées dans n'importe quel ordre**, à condition que le _workflow_ n’ait pas été démarré au niveau d'un lot ;
- le démarrage d'un _worflow_ impose le **respect strict des étapes successives** qu'il définit.
:::

:::danger
La différence fondamentale entre les projets standards et les projets de reprise de passif concerne les unités documentaires :
- dans le cas de projets standards, **les unités documentaires sont importées et rattachées à un lot** ;
- dans le cas de reprise de passif, **les unités documentaires sont générées automatiquement à la livraison**, à partir de lots vides.
:::

## Projets standards

### Configurations préalables

Les configurations préalables doivent être réalisées par un **administrateur**. Elles sont identiques à celles d'un projet de reprise de passif.

- Configurations d'un _workflow_ dédié : [_Workflows_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;
  - Création des **utilisateurs** impliqués dans le projet : [_Gestion des Utilisateurs_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;
  - Création des **groupes** de _workflow_ réunissants les différents acteurs du projet : [_Gestion des Groupes_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;

:::danger
L'administrateur doit s'assurer que l'affectation de l'utilisateur à un groupe de _workflow_ soit cohérente avec son profil d'utilisateur [_Gestion des Profils_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]().
:::

- Configuration des **contrôles** : [_Configuration des contrôles_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]().

### Parametrages des projets et lots

Les parametrages des projets et lots peuvent être réalisés aussi bien par les **administrateurs** que par les **utilisateurs**.

- Création du **projet** de numérisation : [_Projets_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;

- Création du **lot** de numérisation: [_Lots_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]().
  - Le type de lot d'un projet standard sera **_Physique_**.

Le rattachement du lot au projet de numérisation peut se faire soit au moment de la création du lot, soit _a posteriori_ si le projet est créé après le lot. Il est possible de redéfinir au niveau du lot les informations qui n'ont pas été ou qui ne doivent pas être hérités du projet, et nécessaires au bon déroulement du lot en question.

:::info
Si le projet le permet, il est préférable de créer le projet avant le lot, pour garantir l'héritage des informations renseignées dans le projet au niveau du lot, parmi lesquelles ont trouve les mentions du prestataire de numérisation, du _workflow_, du serveur de livraison, des contrôles, et des configuration de diffusion et d'archivage.
:::

### Import des unités documentaires

- Import des notices et création des unités documentaires : [_Imports_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;
- Association des unités documentaires aux lots le cas échéant [_Unités documentaires_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;

:::info
Dans la mesure du possible, il est conseillé d'importer ou de créer les unités documentaires après la création des lots et des projets, pour faciliter le rattachement des unités documentaires aux dits projets et lots au moment de l'import, et ainsi éviter une étape de rattachement manuelle.
:::



### Etapes du workflow


| Étape                                      | Type               | Description                                                                                                                                                                                                                     | Validation de l'étape                                                                                    |
|--------------------------------------------|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| **Génération du bordereau**               | 🔵 Facultatif               | À définir.                                                                                                                                                                                                                     |                                                                                                |
| **Validation des constats d'état**        | 🔵 Facultatif               | Réalisation du constat d'état initial (hors workflow) et validation de ce constat d'état.                                                                                                                                   | <Icon icon={["fa", "square-check"]} /> en haut à droite dans le constat d'état.                |
| **Validation bordereau et constat d'état par le prestataire** | 🔵 Facultatif | Réalisation d'un constat d'état par le prestataire à réception du document et validation de ce constat d'état.                                                                                                               | <Icon icon={["fa", "square-check"]} /> en haut à droite dans le constat d'état.                |
| **Réalisation d'un constat d'état avant numérisation** | 🔵 Facultatif | Réalisation d'un constat d'état par le prestataire avant la numérisation du document et validation de ce constat d'état.                                                                                                       | <Icon icon={["fa", "square-check"]} /> en haut à droite dans le constat d'état.                |
| **En attente de numérisation**            | ⚪ Transitoire              | Étape non gérée par NumaHOP.                                                                                                                                                                                                 |                                                                                                |
| **Réalisation d'un constat d'état après numérisation** | 🔵 Facultatif | Réalisation d'un constat d'état par le prestataire suite à la numérisation du document et validation de ce constat d'état.                                                                                                   | <Icon icon={["fa", "square-check"]} /> en haut à droite dans le constat d'état.                |
| **Livraison des documents numérisés**     | 🔴 Obligatoire              | Livraison des documents numérisés sur la plateforme, suite au dépôt des fichiers sur le FTP.                                                                                                                               | Création d'une livraison et lancement de la livraison.                                        |
| **Contrôles automatiques en cours**       | ⚪ Automatique              | Réalisation des contrôles automatiques et génération des fichiers dérivés. Récupération de la table des matières et de l'OCR si paramétré.                                                                                     |                                                                                                |
| **Contrôle qualité en cours**             | 🔴 Obligatoire              | Contrôle visuel des documents numérisés.                                                                                                                                                                                      | Réalisation du contrôle qualité.                                                              |
| **Pré-rejet du document**                  | 🔵 Facultatif               | Si l'étape est activée, le premier rejet du document générera un pré-rejet à confirmer dans l'étape « Validation du rejet ».                                                                                                   | Premier rejet du document lors du contrôle visuel.                                             |
| **Pré-validation du document**             | 🔵 Facultatif               | Si l'étape est activée, la première validation du document générera une pré-validation à confirmer dans l'étape « Validation du document ».                                                                                     | Première validation du document lors du contrôle visuel.                                       |
| **Validation du rejet**                    | 🔵 Facultatif               | Validation du rejet si l'étape « Pré-rejet du document » est activée.                                                                                                                                                         | Rejet définitif du document.                                                                  |
| **Validation du document**                 | 🔴 Obligatoire              | Validation ou rejet du document lors du contrôle qualité. En cas de rejet, envoi automatique du rapport de contrôle au prestataire, puis fin du workflow pour relivraison.                                                      | Validation ou rejet du document lors du contrôle qualité.                                      |
| **Validation de la notice du document**    | 🔴 Obligatoire              | Validation de la notice de l'unité documentaire.                                                                                                                                                                               | <Icon icon={["fa", "square-check"]} /> en haut à droite dans la notice.                        |
| **Rapport de contrôles pour le prestataire** | ⚪ Automatique            | Envoi du rapport de contrôle au prestataire.                                                                                                                                                                                   |                                                                                                |
| **Archivage du document**                  | 🔵 Facultatif               | Envoi du document validé au CINES pour archivage. Tâche quotidienne automatisée. En cas d'erreur, l'utilisateur peut envoyer manuellement.                                                                                     |                                                                                                |
| **Diffusion du document**                  | 🔵 Facultatif               | Diffusion du document validé à Internet Archive. Tâche quotidienne automatisée. En cas d'erreur, l'utilisateur peut envoyer manuellement.                                                                                     |                                                                                                |



## Projet de reprise de passif

### Configurations préalables

Les configurations préalables doivent être réalisées par un **administrateur**. Elles sont identiques à celles d'un projet standard.

- Configurations d'un _workflow_ dédié : [_Workflows_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;
  - Création des **utilisateurs** impliqués dans le projet : [_Gestion des Utilisateurs_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;
  - Création des **groupes** de _workflow_ réunissants les différents acteurs du projet : [_Gestion des Groupes_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;

:::danger
L'administrateur doit s'assurer que l'affcetations de l'utilisateur à un groupe de _workflow_ soit cohérente avec sont profil d'utilisateur [_Gestion des Profils_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]().
:::

- Configuration des **contrôles** : [_Configuration des contrôles_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]().

### Parametrages des projets et lots

Les parametrages des projets et lots peuvent être réalisés aussi bien par les **administrateurs** que par les **utilisateurs**.

- Création du **projet** de numérisation : [_Projets_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;

- Création du **lot** de numérisation: [_Lots_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]().
  - Le type de lot d'un projet standard sera **_Numérique_**.

Le rattachement du lot au projet de numérisation peut se faire soit au moment de la création du lot, soit _a posteriori_ si le projet est créé après le lot. Il est possible de redéfinir au niveau du lot les informations qui n'ont pas été ou qui ne doivent pas être hérités du projet, et nécessaires au bon déroulement du lot en question.

### Livraison des documents numériques

:::danger
Pour un projet de reprise de passif, on ne rattache pas d'unités documentaire aux lots. La première étape d'un projet de reprise de passif est donc la livraison des documents, qui entraine la création des unités documentaires.
:::

- Création d'une **livraison** rattachée à un lot vide : [_Livraisons_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;
- **Livraison** des documents numériques : [_Livraison_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;






### Etapes du _workflow_


| Étape                                      | Type               | Description                                                                                                                                                                                                                     | Validation                                                                                     |
|--------------------------------------------|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| **Contrôle qualité en cours**             | 🔴 Obligatoire              | Contrôle visuel des documents numérisés.                                                                                                                                                                                      | Réalisation du contrôle qualité.                                                              |
| **Pré-rejet du document**                  | 🔵 Facultatif               | Si l'étape est activée, le premier rejet du document génère un pré-rejet à confirmer dans l'étape « Validation du rejet ».                                                                                                   | Premier rejet du document lors du contrôle visuel.                                             |
| **Pré-validation du document**             | 🔵 Facultatif               | Si l'étape est activée, la première validation du document génère une pré-validation à confirmer dans l'étape « Validation du document ».                                                                                     | Première validation du document lors du contrôle visuel.                                       |
| **Validation du rejet**                    | 🔵 Facultatif               | Validation du rejet si l'étape « Pré-rejet du document » est activée. Envoi automatique du rapport de contrôle au prestataire, puis fin du workflow pour relivraison.                                                                         | Rejet définitif du document.                                                                  |
| **Validation du document**                 | 🔴 Obligatoire              | Validation ou rejet du document lors du contrôle qualité. En cas de rejet, envoi automatique du rapport de contrôle au prestataire, puis fin du workflow pour relivraison.                                                      | Validation ou rejet du document lors du contrôle qualité.                                      |
| **Validation de la notice du document**    | 🔴 Obligatoire              | Validation de la notice de l'unité documentaire.                                                                                                                                                                               | <Icon icon={["fa", "square-check"]} /> en haut à droite dans la notice.                        |
| **Rapport de contrôles pour le prestataire** | ⚪ Automatique            | Envoi du rapport de contrôle au prestataire.                                                                                                                                                                                   |                                                                                                |
| **Archivage du document**                  | 🔵 Facultatif               | Envoi du document validé au CINES pour archivage. Tâche quotidienne automatisée. En cas d'erreur, l'utilisateur peut envoyer manuellement.                                                                                     |                                                                                                |
| **Diffusion du document**                  | 🔵 Facultatif               | Diffusion du document validé à Internet Archive. Tâche quotidienne automatisée. En cas d'erreur, l'utilisateur peut envoyer manuellement.                                                                                     |                                                                                                |
