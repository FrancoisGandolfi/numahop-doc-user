---
title: Erreurs et anomalies
sidebar_label: Erreurs et anomalies
sidebar_position: 5
description: Comment interpreter et resoudre les erreurs et anomalies rencontrées?
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "circle-xmark"]} /> Erreurs et anomalies

# Introduction

Ce document a pour but d'éclairer la qualification des fiches support saisies sous la plateforme dédiée à cet usage, OpenProject.

Il explicite et illustre d'exemples les cas de maintenance corrective, objet du contrat de maintenance applicative et hébergement :
- Anomalies bloquantes (prioritaires)
- Anomalies graves (non prioritaires)
- Anomalies mineures (non prioritaires)

# Anomalies bloquantes

## Définition

Les anomalies bloquantes concernent les dysfonctionnements empêchant la poursuite du workflow nominal de traitement du flux de numérisation de NumaHOP.

| Unité documentaire | Notice | Métadonnées | Document numérique | Diffusion | Archivage | Relations | Constat d'état | Workflow |
|---------------------|--------|-------------|--------------------|-----------|-----------|-----------|---------------|----------|
| Etape de workflow    |        |             | Statut             | Date de début | Date d'échéance | Date de fin | Validé par | Actions |
| Initialisation      |        |             | Terminé            | 27 juin 2023 15:25:27 | Aucune échéance précisée | 27 juin 2023 15:25:27 | system | |
| Génération du bordereau |    |             | Ignoré             | 27 juin 2023 15:25:27 | Aucune échéance précisée | 27 juin 2023 15:25:27 | system | |
| Réalisation et validation du constat d'état par la bibliothèque | | | Terminé | 27 juin 2023 15:25:27 | Aucune échéance précisée | 27 juin 2023 15:36:07 | abatalier | |
| Validation bordereau et constat d'état par le prestataire | | | Ignoré | 27 juin 2023 15:36:07 | Aucune échéance précisée | 27 juin 2023 15:36:07 | system | |
| Réalisation d'un constat d'état avant numérisation par le prestataire | | | Ignoré | 27 juin 2023 15:36:07 | Aucune échéance précisée | 27 juin 2023 15:36:07 | system | |
| En attente de numérisation | | | Terminé | 27 juin 2023 15:36:07 | Aucune échéance précisée | 6 oct. 2023 10:27:04 | system | |
| Réalisation d'un constat d'état après numérisation par le prestataire | | | Ignoré | 27 juin 2023 15:36:07 | Aucune échéance précisée | 27 juin 2023 15:36:07 | system | |
| Livraison des documents numérisés | | | Terminé | 27 juin 2023 15:36:07 | Aucune échéance précisée | 6 oct. 2023 10:27:04 | abatalier | |
| Contrôles automatiques | | | Terminé | 6 oct. 2023 10:27:04 | Aucune échéance précisée | 6 oct. 2023 10:28:05 | system | |
| Contrôles qualité | | | Terminé | 6 oct. 2023 10:28:05 | Aucune échéance précisée | 9 oct. 2023 11:17:02 | livicart | |
| Pré-rejet du document | | | Annulé | 9 oct. 2023 11:17:02 | Aucune échéance précisée | 9 oct. 2023 11:17:02 | system | |
| Pré-validation du document | | | Terminé | 9 oct. 2023 11:17:02 | Aucune échéance précisée | 9 oct. 2023 11:17:02 | livicart | |
| Validation du document | | | Terminé | 9 oct. 2023 11:17:02 | Aucune échéance précisée | 10 oct. 2023 08:45:16 | abatalier | |
| Validation de la notice du document | | | Terminé | 27 juin 2023 15:25:27 | Aucune échéance précisée | 13 oct. 2023 15:06:45 | livicart | |
| Rapport de contrôles pour le prestataire | | | Terminé | 10 oct. 2023 08:45:16 | Aucune échéance précisée | 18 oct. 2023 10:12:34 | system | |
| Archivage du document (export CINES) | | | Terminé | 16 oct. 2023 10:12:34 | Aucune échéance précisée | 17 oct. 2023 02:20:01 | system | |
| Diffusion IA du document | | | Ignoré | 16 oct. 2023 10:12:34 | Aucune échéance précisée | 16 oct. 2023 10:12:34 | system | |
| Diffusion Omeka du document | | | Ignoré | 16 oct. 2023 10:12:34 | Aucune échéance précisée | 16 oct. 2023 10:12:34 | system | |
| Diffusion du document sur une bibliothèque numérique | | | Terminé | 16 oct. 2023 10:12:34 | Aucune échéance précisée | 17 oct. 2023 00:00:04 | system | |
| Diffusion locale du document | | | Terminé | 16 oct. 2023 10:12:34 | Aucune échéance précisée | 17 oct. 2023 05:00:07 | system | |
| Fin | | | Terminé | 17 oct. 2023 05:00:07 | Aucune échéance précisée | 17 oct. 2023 05:00:07 | system | |

Ces anomalies, selon leur cause, seront traitées et résolues en priorité soit :
- Par une action de support permettant de lever le blocage sans nécessité de correctif dans le code source de l'application.
- Par une action corrective dans le code source de l'application et occasionnant le déploiement d'un patch hotfix sur l'instance concernée.

Dans l'attente de la résolution totale de l'anomalie bloquante, une solution temporaire de contournement peut éventuellement être proposée par les équipes support.

## Exemples

| Fiche | Intitulé | Explication |
|-------|----------|-------------|
| #10781 | Rapport de contrôle en attente - workflow bloqué | L'impossibilité de poursuivre le workflow par la mise en attente de l'une de ses étapes relève d'une anomalie bloquante empêchant la suite des travaux. Une première intervention a permis de débloquer les UD concernées par une intervention de support ciblée. |
| #10778 | Livraison impossible | L'impossibilité d'effectuer une livraison, étape constitutive du workflow nominal de NumaHOP, relève d'une anomalie bloquante empêchant la poursuite des travaux. Un patch correctif (hotfix) a été déployé pour corriger le dysfonctionnement révélé par la fiche. |
| #10584 | Connexion impossible à NumaHOP ce matin | L'impossibilité de se connecter à l'application relève d'une anomalie bloquante empêchant la poursuite du workflow nominal de NumaHOP. Une intervention de support d'augmentation de l'espace de stockage a permis de résoudre le problème. |
| #10578 | Pas d'export CINES ces 2 derniers jours | L'impossibilité d'effectuer l'archivage au CINES relève d'une anomalie bloquante empêchant la poursuite des travaux. Un patch correctif (hotfix) a été déployé pour corriger le dysfonctionnement révélé par la fiche. |


# Anomalies graves

## Définition

Les anomalies graves concernent les dysfonctionnements n'empêchant pas la poursuite du workflow nominal de traitement du flux de numérisation de NumaHOP, mais impactant des fonctionnalités importantes dans la gestion des travaux.

Ces anomalies, selon leur cause, seront traitées et résolues dans les meilleurs délais soit :
- Par une action de support permettant leur résolution sans nécessité de correctif dans le code source de l'application.
- Par une action corrective dans le code source de l'application.

Dans l'attente de la résolution totale de l'anomalie grave, une solution temporaire de contournement peut éventuellement être proposée par les équipes support.

## Exemples

| Fiche | Intitulé | Explication |
|-------|----------|-------------|
| #10664 | Problème de téléchargement des PDF | Liée à la volumétrie des données traitées, cette anomalie n'empêche pas le déroulement du workflow nominal de NumaHOP. Son correctif fut inclus dans le déploiement d'un patch hotfix d'une anomalie bloquante. |
| #10156 | PDF généré trop faible en qualité (compression trop importante) | Cette anomalie n'empêche pas le déroulement du workflow nominal de NumaHOP. Son correctif fut inclus dans le déploiement d'une version majeure. |
| #9288 | Export CSV des UD groupées ne fonctionne pas | Cette anomalie n'empêche pas le déroulement du workflow nominal de NumaHOP. Son correctif fut inclus dans le déploiement d'une version mineure. |

# Anomalies mineures

## Définition

Les anomalies mineures concernent les dysfonctionnements n'empêchant pas la poursuite du workflow nominal de traitement du flux de numérisation de NumaHOP, et n'impactant que des fonctionnalités périphériques dans la gestion des travaux.

Ces anomalies, selon leur cause, seront traitées et résolues dans le cadre de la roadmap soit :
- Par une action de support permettant leur résolution sans nécessité de correctif dans le code source de l'application.
- Par une action corrective dans le code source de l'application.

Dans l'attente de la résolution totale de l'anomalie mineure, une solution temporaire de contournement peut éventuellement être proposée par les équipes support.

## Exemples

| Fiche | Intitulé | Explication |
|-------|----------|-------------|
| #10366 | Notices : vue groupée / Tooltip | Cette anomalie mineure ne constituait pas un frein à l'utilisation de l'outil. Sa correction fut intégrée dans une version majeure de NumaHOP. |
| #10304 | Détail Projet : UD / Suppression | Cette anomalie mineure ne constituait pas un frein à l'utilisation de l'outil. Sa correction fut intégrée dans une version majeure de NumaHOP. |
| #10009 | Fichiers master : impossible à télécharger en export local | Cette anomalie ne constitue pas un frein à l'utilisation de l'outil. Une solution de contournement fut proposée. Sa correction sera intégrée dans la prochaine version mineure de NumaHOP. |
| #9888 | TDM : mention null lorsque champ vide | Cette anomalie mineure ne constitue pas un frein à l'utilisation de l'outil. Sa correction sera intégrée dans une version majeure ou mineure de NumaHOP. |
| #7822 | Actions dans le tableau de bord : affichage des résultats limité à 500 | Cette anomalie mineure ne constituait pas un frein à l'utilisation de l'outil. Une correction et une optimisation ont été intégrées dans une version mineure de NumaHOP. |


Cycle de contrôle & inconsistance des statuts
Un certain nombre de fiches support a mis en évidence des situations d'inconsistance et d'incohérence des statuts des unités documentaires suite à des phases de contrôle qualité visuel.
Indiquées dans un certain statut, par exemple Validé, à un certain endroit de l'application, et dans un autre, par exemple En cours de contrôle, dans une autre fonctionnalité de l'application.
Il s'agit notamment des fiches #10781, #10007, #9932.
Anomalies difficiles à reproduire, des tests poussés ainsi que des discussions avec les utilisateurs sur leur mode opératoire ont toutefois permis d'identifier une séquence mettant en lumière un problème d'accès concurrents qui occasionne des enregistrements multiples et conflictuels pour une même opération.
Dans l'attente de la correction définitive de ces anomalies, nous préconisons :
•	De ne pas utiliser le bouton validation disponible dans l'onglet Workflow du détail de l'unité documentaire :
  
•	De ne pas ouvrir plusieurs onglets en cascade depuis le tableau de bord pour le contrôle des unités documentaires listées dans l'encart Documents à contrôler ou en cours de contrôle : 

  

