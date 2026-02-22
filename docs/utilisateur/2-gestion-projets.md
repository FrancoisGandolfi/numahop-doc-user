---
title: Gestion des projets
sidebar_label: Gestion des projets
sidebar_position: 1
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "diagram-project"]} /> Gestion des projets


Vous pouvez créer des trains associés aux projets et y associer des
documents physiques dans le menu  &gt; Projets.

 Un projet de numérisation correspond à un ensemble de documents
physiques (répartis dans des lots et des trains) pouvant être numérisés
par plusieurs prestataires et dans une même continuité (ayant donc une
date de début et une date de fin).

Un projet doit être porté par une bibliothèque principale mais peut être
en coopération avec d’autres bibliothèques. Il est défini par un nom,
une description, une date de début et une date de fin prévue. Il est
rattaché à une  bibliothèque principale portant le projet.  
Le statut du projet est par défaut « Créé » et il est actif.  
La configuration FTP est par défaut celle de la bibliothèque principale
mais peut être modifiée.  
Le statut est mis à jour automatiquement ou manuellement en fonction de
l’avancement du projet :

 

Il est possible de modifier ( ), voir le détail ( ) ou effectuer
d’autres actions ( ) sur un projet. Vous pouvez également mettre en
attente, le projet est suspendu, aucune livraison ne pourra être
effectuée. Le projet pourra reprendre, en cliquant sur Reprendre le
projet dans les actions du projet Annuler le projet, toutes les étapes
de workflow des unités documentaires du projet seront annulées, les lots
appartenant au projet passeront au statut Annulé.

Le détail d’un projet permet de visualiser :


# Créer un projet

Un projet de numérisation correspond à un ensemble de documents
physiques (répartis dans des lots et des trains) pouvant être numérisés
par plusieurs prestataires et dans une même continuité (ayant donc une
date de début et une date de fin).

Un projet doit être porté par une bibliothèque principale mais peut être
en coopération avec d’autres bibliothèques. Il  
est défini par un nom, une description, une date de début et une date de
fin prévue. Il est rattaché à une  
bibliothèque principale portant le projet

Le projet est l’entité la plus haute sur NumaHOP. La hiérarchie est la
suivante : Projet &gt; Lot &gt; Unité documentaire

Pour créer un projet, il faut tout d’abord accéder à la page « projet »
via le menu de droite

Cliquer sur l’icone « + » pour créer un nouveau projet

Renseigner les champs de la fiche « Projet » :

Pour les exports choisir selon les modalités de votre établissement :
export CINES, Internet archive, Omeka. A chaque fois indiquer le plan de
classement et/ou la collection dans lesquelles les Unités documentaires
seront versées.

A noter : Les configurations doivent avoir été créées préalablement dans
le module Administration.  

A la fin cliquer sur « Enregistrer ». 

Le nom du nouveau projet apparaîtra dans la colonne de gauche.

## Les projets multi-bibliothèques

Configurer un projet multi-bibliothèques

<u>Prérequis</u>

L’habilitation ADMINISTRATION-LIB (Administration : visualisation
inter-bibliothèque) permet l’accès à toutes les données de toutes les
bibliothèques du serveur. Par défaut, cette habilitation est donnée au
profil « administrateur général ».

Chaque bibliothèque autorisée à faire des projets indépendants doit
avoir un espace disque dédié : la création d’une nouvelle bibliothèque
doit donc être demandée à l’administrateur du serveur.

Chacune des bibliothèques partenaires dans un projet doit posséder un
administrateur avec l’habilitation ADMINISTRATION-LIB.

<u>Fonctionnement d’un projet multi-bibliothèques</u>

Pour créer un projet, se reporter à la documentation « Créer un
projet ».

Lorsqu’on ajoute une bibliothèque partenaire au projet, l’ensemble des
utilisateurs de la bibliothèque partenaire pourra intervenir sur le
projet en fonction de leurs profils et de leurs groupes de workflow. En
cas de projets multi-bibliothèques, l’administrateur de la bibliothèque
partenaire doit ajouter les utilisateurs de sa bibliothèque dans les
groupes de workflow de la bibliothèque principale du projet.

Lorsqu’on ajoute des intervenants d’une bibliothèque partenaire à un
projet, seuls ces utilisateurs auront accès au projet en plus des
utilisateurs de la bibliothèque principale du projet. Les autres
utilisateurs ne voient ni ne peuvent modifier aucun des éléments des
projets pour lesquels ils ne sont ni partenaires ni intervenants.

Les utilisateurs de la bibliothèque partenaire ou les utilisateurs
intervenants ajoutés dans un projet multi-bibliothèques peuvent :

Note : les fichiers sont livrés sur l’espace disque dédié à la
bibliothèque de la configuration du contrôle du lot.  
