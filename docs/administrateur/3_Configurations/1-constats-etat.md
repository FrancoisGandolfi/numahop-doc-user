---
title: Configuration des constats d'état
sidebar_label: Configuration des constats d'état
sidebar_position: 1
description: Configuration des constats d'état
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "list-check"]} /> Configuration des constats d'état

#### Le template de constat d'état dans NumaHOP

Paramétrer la grille de constat d’état pour la simplifier ou l’adapter à
ses besoins est possible. Cependant, il est important de noter que
certaines modifications impacteront toutes les instances NumaHop
partageant un même serveur.

Il n’est pas possible de faire plusieurs templates de constats d’état.
Il faut donc que le template créé soit le plus large possible compte
tenu des différentes typologies de documents qui seront concernés.

Une fois le template créé, il faut qu’il soit enregistré dans le menu
« Template » de l’interface NumaHop. Indiquer à Tech’Advantage que des
modifications ont été apportées au template, de manière à ce que les
techniciens puissent enregistrer ce template comme modèle dans la base,
et l’appliquer pour les lots à venir.

Il est également possible de leur transmettre une signature de
l’institution pour intégrer celle-ci au template, de manière à sortir de
NumaHop des constats d’état signés et validés par l’institution.

Ouvrir la configuration du template

Dans le menu « Administration », puis « Constats d’état » dans l’encart
« Configuration » :

La liste des propriétés apparaît. Ci-dessous, un exemple de template de
constat d’état.

Les différentes propriétés sont réparties par catégories, que l’on
retrouve dans le constat.

#### Modifier une propriété

Il est possible de modifier une propriété, de modifier ses valeurs
correspondantes, et de la supprimer. Ces modifications impactent tous
les établissements qui partagent un serveur NumaHop commun.

Il est également possible de rendre une propriété obligatoire ou non et
de lui assigner un champ commentaire. Ces modifications n’impactent que
l’établissement concerné.

En revanche, les catégories ne sont pas modifiables, ni renommables.

 

##### Les modifications communes

Cliquer sur la propriété à modifier. Cela ouvre ses détails à droite.

Pour entrer en mode édition, cliquer sur le petit bouton « Modifier » en
haut à droite. Il est également possible de cliquer sur un des champs en
bleu pour ouvrir la propriété en mode édition :

Il est possible :

Il est également possible de configurer les différentes valeurs à
accoler aux propriétés. En mode édition, on peut renommer une valeur, la
supprimer ou en rajouter une en cliquant sur le +.

##### Les modifications locales

En cas de partage d’un serveur NumaHop par plusieurs établissements, un
encart permet de procéder à des modifications strictement locales,
c’est-à-dire uniquement visibles pour l’établissement concerné.

Il s’agit de l’encart du milieu, intitulé au nom de l’institution :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/Template-constat-etat-6-300x105.png"
class="alignnone wp-image-561 size-medium" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/Template-constat-etat-6-300x105.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/Template-constat-etat-6.png 613w"
sizes="(max-width: 300px) 100vw, 300px" width="300" height="105" />](https://www.numahop.fr/wp-content/uploads/2022/11/Template-constat-etat-6.png)

Chaque institution peut donc décider de rendre cette propriété active et
existante dans le constat d’état (« création »). En cliquant sur non, la
propriété ne s’affichera pas dans le constat d’état. De la même façon,
un établissement peut choisir de la rendre obligatoire ou non
(« obligatoire »).

Enfin, « commentaire » permet d’apposer un champ de commentaire en texte
libre en plus des valeurs à assigner à la propriété.

Ne pas oublier de cliquer sur le bouton Enregistrer une fois les
modifications terminées.

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/Template-constat-etat-7.png"
class="alignnone size-full wp-image-562" loading="lazy" decoding="async"
width="241" height="65" />

 

##### Changer une propriété de place

Une fois une propriété enregistrée dans sa catégorie, il n’est plus
possible de la déplacer dans une autre. Dans ce cas, il faut la
supprimer et la recréer dans la catégorie souhaitée.

Par contre, il est possible de changer de place une propriété dans une
catégorie. Pour cela, il faut changer l’ordre des propriétés de la
catégorie.

 

 

Sur l’exemple ci-contre, on voit que cette propriété est au
5<sup>ème</sup> rang. Cela veut dire que ce sera la 5<sup>ème</sup>
propriété affichée dans le constat pour cette catégorie.

Pour la faire passer au 4<sup>ème</sup> rang, indiquer 4 dans le champ
« ordre ».

Attention, il faudra alors penser à modifier aussi le rang de la
4<sup>ème</sup> propriété, ce n’est pas automatique.

#### Ajouter une propriété

Dans le panneau de configuration du constat, cliquer sur +. La liste
déroulante des différentes catégories s’affiche. Cliquer sur la
catégorie dans laquelle la propriété doit s’intégrer.

Si la propriété doit s’intégrer dans « Description du document »,
cliquer dessus dans le menu déroulant. La configuration de la propriété
s’ouvre. Dans la barre supérieure, on voit le rattachement de la
propriété à la catégorie.

Remplir ensuite la grille et paramétrage et cliquer sur Enregistrer.

La nouvelle propriété apparaît dans la liste des propriétés du constat,
dans la position indiquée (ici 5<sup>ème</sup>) :

#### Supprimer une propriété

Dans la liste des propriétés affichées dans le panneau de configuration
du constat, cliquer sur la propriété à supprimer :

Une fenêtre s’affiche pour demander confirmation, cliquer sur
« Supprimer » :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/Template-constat-etat-13-300x100.png"
class="alignnone wp-image-568 size-medium" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/Template-constat-etat-13-300x100.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/Template-constat-etat-13.png 617w"
sizes="(max-width: 300px) 100vw, 300px" width="300" height="100" />](https://www.numahop.fr/wp-content/uploads/2022/11/Template-constat-etat-13.png)

La propriété disparait de la liste.


---

---
title: Gestion des champs des constats d’état
---

# Gestion des champs des constats d’état par bibliothèque

Il est possible de gérer les champs des constats d’état par bibliothèque. Les champs sont classés par catégorie.

---

## Catégories et champs disponibles

### Description du document
- Cahiers
- Conditionnement de conservation
- Corps d’ouvrage
- Dimensions du document (H/L/P, mm)
- État général
- Format
- Papier
- Planches hors-format (H/l)
- Sens de lecture
- Type de documents

### Numérotation
- Numérotation
- Autres pièces

### Reliure
- État de la reliure
  - Angles d’ouvertures
  - Autres informations
  - Charnières
  - Coiffe de queue
  - Coiffe de tête
  - Dos
  - Déformations
  - Griffures, éraflures
  - Lacunes
  - Manques
  - Mors
  - Mors fendus
  - Plat inférieur
  - Plat supérieur
  - Titrage des tranches
  - Traces de réparations / restauration
  - Éléments détachés
  - Éléments mobiles
  - État général
  - Points de vigilance

---

## Paramétrage des champs par bibliothèque

Chaque bibliothèque peut décider pour chaque champ s’il :
- Est **obligatoire** ou non.
- Nécessite l’affichage d’une **zone de commentaires complémentaire** ou non.
- S’affiche **par défaut** à la création d’un constat d’état ou non.
- Est affiché pour les types de constat d’état suivants :
  - Multifeuillet
  - Monofeuillet
