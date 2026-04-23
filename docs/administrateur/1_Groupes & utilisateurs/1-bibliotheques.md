---
title: Gestion des bibliothèques
sidebar_label: Gestion des bibliothèques
sidebar_position: 1
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "building-columns"]} /> Gestion des bibliothèques


## Présentation

Dans l’onglet  <Icon icon={["fa", "user"]} /> **Utilisateurs**, l’un des sous-onglets permet de gérer informations suivantes des **établissements utilisateurs** : 

| **Libellé**                       | **Commentaire** | **Voir aussi** |
|-----------------------------------|-----------------|----------------|
| **_Fiche_**                       |                 |                |
| Nom                               | 🔴 Obligatoire                |                |
| Website                           | 🔵 Facultatif                 |                |
| Téléphone                         | 🔵 Facultatif                |                |
| Courriel                          | 🔵 Facultatif                |                |
| Préfixe                           | 🔵 Facultatif                  |                |
| Courriel                          | 🔵 Facultatif                  |                |
| Configuration FTP - Bibliothèque  | 🔵 Facultatif                  |                |
| Identifiant service versant Cines | 🔵 Facultatif                |                |
| Configuration contrôle            | 🔵 Facultatif                |                |
| Configuration langage OCR         | 🔵 Facultatif               |                |
| Configuration format images       | 🔵 Facultatif                |                |
| Actif                             | 🔵 Facultatif               |                |
| Profil par défaut                 | 🔵 Facultatif               |                |
| Institution                       | 🔵 Facultatif               |                |
| **_Adresse_**                     |                 |                |
| Appartement, escalier, étage      | 🔵 Facultatif                |                |
| Bâtiment                          | 🔵 Facultatif                |                |
| Numéro de la voie                 | 🔵 Facultatif                |                |
| Complément d'adresse              | 🔵 Facultatif                 |                |
| Code postal                       | 🔵 Facultatif                |                |
| Ville                             | 🔵 Facultatif                |                |
| Pays                              | 🔵 Facultatif                |                |
| **_Responsable bibliothèque_**    |                 |                |
| Nom                               | 🔵 Facultatif                |                |
| Tel                               | 🔵 Facultatif                |                |
| Email                             | 🔵 Facultatif                |                |


 Les bibliothèques sont un des éléments prioritaires à configurer pour mettre en place des projets de numérisation.


## Créer une bibliothèque

Renseigner les informations la fiche de bibliothèque divisées en plusieurs parties :
- La première contient des informations d’identification et de paramétrages techniques.
- Les trois suivantes portent sur des renseignements plus concrets : l’adresse, les coordonnées du responsable de la bibliothèque et le logo.


:::danger Pour les instances mutualisées de NumaHOP
La liste des bibliothèques se présente dans l’ordre alphabétique, elle peut être <Icon icon={["fa", "filter"]} />  filtrée par les initiales et en y intégrant ou cachant les bibliothèques inactives.

Les bibliothèques ont un espace disque associé : quand une nouvelle bibliothèque est ajoutée, il faut alors configurer le disque dans le fichier de configuration du démarrage qui n’est pas accessible directement dans NumaHOP. Afin d’effectuer cela, contacter votre prestataire de service ou, si NumaHOP est installée sur vos serveurs  votre administrateur système.
:::



