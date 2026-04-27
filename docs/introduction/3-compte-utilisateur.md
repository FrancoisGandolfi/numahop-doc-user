---
title: Compte utilisateur
sidebar_label: Compte utilisateur
sidebar_position: 3
description: Présentation du compte de l'utilisateur.
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "user"]} /> Compte utilisateur

## Connexion & deconnexion

La connexion nécessite un identifiant, ou _login_, et un mot de passe.
- l’**identifiant** est fonction des règles de nommage adoptées par l'administrateur ;
- le **mot de passe** est transmis lors de l’inscription à l'application.

:::warning
Le mot de passe doit contenir _a minima_ douze caractères, dont une majuscule, une minuscule, un chiffre, et un caratère spécial.
:::

Les actions possibles sur le compte de l'utilisateur connecté sont accessibles via le menu dérroulant du bandeau d'en-tête de Numahop **Prénom** <Icon icon={["fa", "caret-down"]} />.

- <Icon icon={["fa", "wrench"]} /> **Profil** ;
- <Icon icon={["fa", "lock"]} /> **Mot de passe** ;
- <Icon icon={["fa", "arrow-right-from-bracket"]} /> **Déconnexion**.

## Profil de l'utilisateur

Le détail du profil de l'utilisateur connecté est accessible via le menu derroulant du bandeau d'en-tête de Numahop **Prénom** <Icon icon={["fa", "caret-down"]} />.

L'utilisateur peut modifier certaines informations le concernant en fonction de ses habilitations directement depuis le menu derroulant du bandeau d'en-tête de Numahop, en cliquant sur le compte utilisateur **Prénom** <Icon icon={["fa", "caret-down"]} />, puis en selectionnant l'option <Icon icon={["fa", "wrench"]} /> **Profil**. Il est alors possible de modifier les champs disponibles.

|      Champ       | Statut         | Détails                   |                                                                     _Voir aussi_ |
| :--------------- | :------------- | :------------------------ | -------------------------------------------------------------------------------: |
|    **Login**     | 🔴 Obligatoire | Texte libre               |                                                                                  |
|     **Nom**      | 🔴 Obligatoire | Texte libre               |                                                                                  |
|    **Prénom**    | 🔴 Obligatoire | Texte libre               |                                                                                  |
|    **Actif**     | ⚪ Par défaut  | Oui / Non                 |                                                                                  |
|   **Fonction**   | 🔵 Facultatif  | Texte libre               |                                                                                  |
|  **Téléphone**   | 🔵 Facultatif  | Texte libre               |                                                                                  |
|   **Courriel**   | 🔴 Obligatoire | Email @                   |                                                                                  |
|  **Catégorie**   | 🔵 Facultatif  | Utilisateur / Prestataire |  [_Gestion des Utilisateurs_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() |
| **Bibliothèque** | 🔴 Obligatoire | Liste fermée              | [_Gestion des Bibliothèques_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() |
|    **Profil**    | 🔴 Obligatoire | Liste fermée              |       [_Gestion des Profils_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() |

## Modification du mot de passe

### Par l'utilisateur

Un utilisateur peut changer lui-même son mot de passe directement depuis le menu derroulant du bandeau d'en-tête de Numahop, en cliquant sur le nom de l'utilisateur **Prénom** <Icon icon={["fa", "caret-down"]} />, puis en selectionnant l'option <Icon icon={["fa", "lock"]} /> **Mot de passe**.

En cas d’oubli de son mot de passe, un utilisateur peut le réinitialiser, sans passer par un administrateur, depuis l’écran de connexion, en cliquant sur **"Mot de passe oublié ?"**. L’utilisateur saisit alors son login et le nouveau mot de passe est envoyé à l'email renséigné sur son compte.

### Par l'administrateur

En cas de perte, un nouveau mot de passe peut être généré par un administrateur, depuis le menu applicatif <Icon icon={["fa", "user"]} /> **Utilisateurs**, puis en selectionnant l'utilisateur concerné. Dans le menu déroulant <Icon icon={["fa", "bars"]} /> **Autres actions**, l'option  **"Nouveau mot de passe"** permet de générer un nouveau mot de passe qui s'affiche alors dans un volet à droite <Icon icon={["fa", "circle-info"]} /> **Information**.
