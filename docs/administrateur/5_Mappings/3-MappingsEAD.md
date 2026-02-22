---
title: Mappings EAD
sidebar_label: Mappings EAD
sidebar_position: 3
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "file-code"]} /> Mappings EAD


# Créer un mapping EAD

### Syntaxe de base

La notation habituelle permet d’accéder à l’information située sur le
niveau le plus bas, en remontant l’arborescence jusqu’à trouver une
valeur (ex : text(\did.physdesc.dimensions))

\root permet d’accéder aux propriétés de l’élément de plus haut niveau
(ex : text(\root.did.physdesc. dimensions))

Préfixer le nom du champ par all: permet de récupérer toutes les valeurs
trouvées dans toute l’arborescence et de créer un champ Dublin Core par
élément trouvé (ex : text(\all:did.physdesc.dimensions))

### Fonctions de base

### Expressions : aide à la saisie

Les éléments les plus utiles sont accessibles via des menus programmés
(clic droit avec la souris dans la zone « Règle » ou « Conditions
d’application »)
