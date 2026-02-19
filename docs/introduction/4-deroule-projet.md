---
title: Déroulé d'un projet
sidebar_label: Déroulé d'un projet
sidebar_position: 4
---

import Icon from '@site/src/components/Icon';

# Déroulé d'un projet <Icon icon={["fa", "diagram-project"]} />

:::info
Les étapes de configurations détaillées ci-dessous peuvent être effectuées dans n'importe quel ordre, à condition que le _workflow_ n’ait pas été démarré au niveau d'un lot. Le démarrage d'un _worflow_ impose le respect strict des étapes successives qu'il définit.
:::

## Projet standard

### Parametrages préalables

- Workflow
  - Créer les groupes de workflow nécessaires
  - Affecter les utilisateurs concernés

- Controles automatiques
  - Créer une configuration de contrôle automatiques
  - paramétrer les contrôles à effectuer, les taux d’erreur acceptés et le mode d’échantillonnage

### Projet et lot
- Créer un projet

- Créer un lot de numérisation
  - Type de lot : « Physique »
  - Format demandé
  - Type de compression attendu
  - Si nécessaire (en fonction des contrôles automatiques activés) : taux de compression, résolution, profil colorimétrique

- Rattacher le lot au projet de numérisation (soit au moment de la création du lot, soit à posteriori si le projet est créé après le lot)

- Si nécessaire, redéfinir au niveau du lot les composants hérités du projet et nécessaires au bon déroulement de celui-ci (en fonction des besoins) :
  - Prestataire
  - Workflow
  - Configuration FTP
  - Configuration des contrôles automatiques
  - Collection Internet Archive
  - Plan de classement PAC
  - Collection Omeka
  - Type d’item Omeka

### Unités documentaires
- Importer les notices afin de créer les unités documentaires Si le projet et le lot existent au moment de l’import, il est possible de les importer directement dans le lot concerné
-  Ou créer les notices et les unités documentaires
- Associer les unités documentaires dans le lot si cela n’a pas été effectué au moment de l’import



## Etapes du workflow


| Étape                                      | Type               | Description                                                                                                                                                                                                                     | Validation                                                                                     |
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
