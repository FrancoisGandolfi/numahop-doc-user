---
title: Interface de NumaHop
sidebar_label: Interface de NumaHop
sidebar_position: 1
---

import Icon from '@site/src/components/Icon';

# Interface de NumaHop <Icon icon={["fa", "display"]} />

## Pré-requis techniques

NumaHOP est certifiée pour fonctionner sur les navigateurs Web suivants :

- **Google Chrome**, version 50 et supérieures ;
- **Mozilla Firefox**, version 47 et supérieures ;

Le fonctionnement sur **Microsoft Edge** ou **Internet Explorer** n’est pas garanti, du fait du mauvais affichage des langues sinistroverses sur ces navigateurs et de la non prise en charge de la visionneuse _Mirador_.

## Ergonomie générale de l'application

### Boutons d'actions

Dans toutes les interfaces, les différentes actions possibles sont associées à des icônes et une info-bulle. Ils sont cohérents dans tout l’outil.

D’autres icônes de fonctionnalités peuvent exister en fonction des modules sollicités. Ces nouveaux boutons d'action sont généralement situés en haut à droite de la fenetres dans les interfa, en haut à droit de la barre d’en-tête des tables, ou à la suite de la données qu'ils complètent.

- <Icon icon={["fa", "plus"]} /> **Ajouter** ;
- <Icon icon={["fa", "trash"]} /> **Supprimer** ;
- <Icon icon={["fa", "pen-to-square"]} /> **Modifier** ;
- <Icon icon={["fa", "floppy-disk"]} /> **Sauvegarder** ;
- <Icon icon={["fa", "square-poll-horizontal"]} /> **Détails** ;
- <Icon icon={["fa", "up-right-from-square"]} /> **Ouvrir** ;
- <Icon icon={["fa", "eye"]} /> **Contrôler** ;
- <Icon icon={["fa", "share"]} /> **Télécharger** ;
- <Icon icon={["fa", "bars"]} /> **Autres actions** ;
- <Icon icon={["fa", "filter"]} /> **Filtrer**
- <Icon icon={["fa", "arrows-up-down-left-right"]} /> **Déplacer** ;
- <Icon icon={["fa", "gear"]} /> **Parametrer** ;
- <Icon icon={["fa", "x"]} /> **Supprimer** ;
- <Icon icon={["fa", "handshake"]} /> ;

### Menus applicatifs

Le menu lateral permet d’accéder aux libellés complets des menus et sous-menus. Ce menu s’affiche par-dessus l’interface en cours de visualisation, et se
rétracte automatiquement à la sélection d’un menu pour conserver l’affichage maximal de l’écran applicatif.

La liste des menus disponibles est fonction des habilitations de l’utilisateur connecté.

| Menus / Modules                                          | Description                                                          | _Voir aussi_ |
| :------------------------------------------------------- | -------------------------------------------------------------------- | -----------: |
| <Icon icon={["fa", "lines-leaning"]} /> **Documents**             | Gestion des Unités documentaires, Notices, Constats d'état, Imports. |              |
| <Icon icon={["fa", "magnifying-glass"]} /> **Recherche** | Recherche avancée dans l'instance                                    |              |
| <Icon icon={["fa", "user"]} /> **Utilisateurs**          | Gestion des Bibliothèques, Profils, Utilisateurs                     |              |
| <Icon icon={["fa", "book"]} /> **Projets**               | Gestion des Projets, Lots, Trains, Livraisons                        |              |
| <Icon icon={["fa", "square-check"]} /> **Contrôles**     | Contrôle des documents numériques                                    |              |
| <Icon icon={["fa", "chart-pie"]} /> **Statistiques**     | Statistiques                                                         |              |
| <Icon icon={["fa", "gear"]} /> **Administration**        | Parametrage des configurations                                       |              |
| <Icon icon={["fa", "circle-question"]} /> **Aide**       | _Module inactif_                                                     |              |

### Informations NumaHop

NumaHOP propose sur l’ensemble de ses interfaces une colonne "Informations" dépliable sur la droite de chaque interface. Elle correspond à la zone de communication entre NumaHOP et l'utilisateur : tous les messages émis par la plateforme s’y afficheront.

La gestion des messages applicatifs a été conçue pour interpeller immédiatement et visuellement l'utilisateur avec une apparition du message associé à un code couleur par niveau d’alert,e et un positionnement différent dans la colonne d’information.

:::tip Vert : action validée
Le message s’affiche en bas de la colonne d’information et disparaît au bout de quelques secondes, soit toute action effectuée par l'utilisateur et enregistrée par NumaHOP.
:::

:::info Bleu : informatif
Le message s’affiche en haut de la colonne d’information et reste toujours visible.
:::

:::caution Jaune : action non validée et non bloquante
Le message s’affiche en haut de la colonne d’information et reste toujours visible : il s'agit d'une erreur mineure détectée.
:::

:::danger Rouge : action non validée et bloquante
Le message s’affiche en haut de la colonne d’information et reste toujours visible pour informer l'utilisateur du problème rencontré ne permettant pas d’effectuer
l’action en cours : il s'agit d'une erreur bloquante.
:::
