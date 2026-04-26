---
title: Utilisateurs
sidebar_label: Utilisateurs
sidebar_position: 2
description: Gestion des utilisateurs
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "user-gear"]} /> Gestion des utilisateurs

Pour pouvoir créer des utilisateurs, il est nécessaire de disposer de
l’habilitation USER-HAB1 (Gestion des utilisateurs : création).

## Créer un utlisateur

Pour créer des utilisateurs dans NumaHOP, cliquer sur l'icône <Icon icon={["fa", "user"]} /> **Utilisateurs** dans le menu latéral de gauche, puis choisir **Utilisateurs** dans le sous-menu.

Cliquer ensuite sur le bouton <Icon icon={["fa", "square-plus"]} /> situé à droite de la fenêtre de recherche. Un
formulaire de création d’utilisateur s’affiche dans la partie droite de
l’écran.

Remplir le formulaire. Les champs obligatoires sont :

- Le login : l’identifiant qui permet à l’utilisateur de se connecter
- Le nom de l’utilisateur
- Le prénom de l’utilisateur
- Le mot de passe : il sert à la 1ère connexion et pourra ensuite être modifié par l’utilisateur
- Le courriel
- La bibliothèque : à partir de la liste des [bibliothèques créées dans Numahop](docs/administrateur/1_Groupes%20&%20utilisateurs/1-bibliotheques.md)
- Le profil : dans la liste [des profils créés dans Numahop](docs/administrateur/1_Groupes%20&%20utilisateurs/4-profils.md)

Pour le champ **Actif**, cocher le bouton **oui** pour permettre à
l’utilisateur créé de pouvoir agir dans Numahop.

Cliquer ensuite sur le bouton **Enregistrer**. Le nouvel utilisateur est
créé et reçoit un mail l’informant de la création de son compte et lui
indiquant ses identifiant et mot de passe de connexion à NumaHOP.

## Rattacher l'utilisateur à un groupe

Pour compléter la création de l’utilisateur,il est nécessaire de l'[ajouter à un/des groupe(s) de workflows](docs/administrateur/1_Groupes%20&%20utilisateurs/3-groupes.md).

La rubrique **Utilisateurs** donne aussi accès à la liste des
utilisateurs créés avec des possibilités de recherche et de filtrage (<Icon icon={["fa", "filter"]} />).

## Modifier ou supprimer un utilisateur

Pour pouvoir modifier ou supprimer des utilisateurs, il est nécessaire de disposer des habilitations USER-HAB2 (Gestion des
utilisateurs : modification) et USER HAB3 : (Gestion des utilisateurs :
suppression) :

Pour modifier un utilisateur, cliquer sur nom de l’utilisateur à
modifier puis cliquer sur l'icône <Icon icon={["fa", "pen-to-square"]} /> **Modifier** en haut à droite. Enregistrer les
modifications.

Le bouton <Icon icon={["fa", "bars"]} /> **Autres actions** permet de :
- Supprimer un utilisateur
- Dupliquer un utilisateur 
- Configurer un nouveau mot de passe 

