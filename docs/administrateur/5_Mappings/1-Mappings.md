---
title: 'Mappings : généralités'
sidebar_label: 'Mappings : généralités'
sidebar_position: 1
description: Paramatrage des conversion des données bibliographiques vers le standard Dublin Core.
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "shuffle"]} /> Mappings: généralités

Les _mappings_ sont des **fichiers de configuration des correspondances** entre et les notices bibliographiques issues des systèmes d'information documentaire (SIGB) et de systèmes d'information archivistique (SIA) et les unités documentaires de l'application Numahop.

Ils sont employés au moement de l’**import de notices** dans l’application NumaHop, et permettent leur conversion vers le standard interopérable **Dublin Core**.

Trois types de mappings sont proposés :
- Mapping des **notices MARC** ;
- Mapping des **notices EAD** ;
- Mapping des **notices CSV**.

## Edition des _mappings_

L'édition des _mappings_ s’effectue depuis le menu applicatif <Icon icon={["fa", "gear"]} /> **Administration**, puis dans l'encard consacré. L'utilisateur peut configurer autant de _mappings_ que necessaire pour chaque bibliothèque.

Pour chaque type de mapping, il est possible de :
- <Icon icon={["fa", "square-plus"]} /> **Créer** un nouveau mapping personnalisé ;
- <Icon icon={["fa", "upload"]} /> **Importer** un nouveau mapping (uniquement pour les mappings MARC et EAD) ;
- <Icon icon={["fa", "floppy-disk"]} /> **Sauvegarder** un _mapping_ en cours d'édition ;
- <Icon icon={["fa", "clock-rotate-left"]} /> **Restaurer** la version antérieure d'un _mapping_ existant ;
- <Icon icon={["fa", "download"]} /> **Exporter** au format `json` un _mapping_ existant ;
- <Icon icon={["fa", "copy"]} /> **Dupliquer** un _mapping_ existant ;
- <Icon icon={["fa", "trash"]} /> **Supprimer** un _mapping_ existant.

## Créer un _mapping_

La création d'un _mappings_ s’effectue <Icon icon={["fa", "square-plus"]} /> **Créer** situé en haut à gauche de d'écran. L'utilisateur est invité à renseigner plusieurs champs.

- le **titre** du _mapping_ ;
- la **bibliothèque** à laquelle le _mapping_ est attribué ;
- l'**identifiant du parent** (uniquement pour les _mappings_ MARC et CSV).

Après avoir selectionné le type de correspondances, la création d'un nouveau _mapping_ se fait grâce au bouton <Icon icon={["fa", "square-plus"]} /> **Créer** situé en haut à gauche de d'écran. 




## Modifier un _mapping_

La modification ou l'édition d'un _mappings_ s’effectue depuis le menu applicatif <Icon icon={["fa", "gear"]} /> **Administration**, puis dans l'encard consacré.

Après avoir selectionné le type de correspondances, la modification d'un _mapping_ existant se fait grâce au bouton <Icon icon={["fa", "edit"]} /> **Modifier** situé en haut à gauche de d'écran.

Selon l’option choisie, un nouveau mapping sera créé ou le mapping
affiché sera remplacé. Pour ajouter des règles, cliquez sur + Ajouter
une règle en bas de la page, sous le tableau. Les règles peuvent
également être éditées
<img src="https://www.numahop.fr/wp-content/uploads/2022/10/editer.png"
class="alignnone wp-image-132" loading="lazy" decoding="async"
width="32" height="30" />, dupliquées <img
src="https://www.numahop.fr/wp-content/uploads/2022/10/duppliquer-2.png"
class="alignnone wp-image-352" loading="lazy" decoding="async"
width="28" height="25" />   ou supprimées
<img src="https://www.numahop.fr/wp-content/uploads/2022/10/suppr.png"
class="alignnone wp-image-353" loading="lazy" decoding="async"
width="25" height="24" />.

L’ordre de prise en compte des règles et d’affichage des éléments dans
la notice importée peut être modifié à l’aide des flèches situées à
gauche des lignes. Lorsqu’une règle est modifiée, elle apparaît en jaune
tant que le mapping n’a pas été enregistrée :

 

Tant que le mapping n’a pas été enregistré, il est possible de restaurer
la dernière version enregistrée grâce au bouton restaurer <img
src="https://www.numahop.fr/wp-content/uploads/2022/10/restaurer.png"
class="alignnone wp-image-354" loading="lazy" decoding="async"
width="32" height="28" />    situé dans le bandeau supérieur (ie.
annuler toutes les dernières modifications). Une fois le mapping créé ou
modifié, il faut l’enregistrer grâce au bouton sauvegarder <img
src="https://www.numahop.fr/wp-content/uploads/2022/10/sauvegarder.png"
class="alignnone wp-image-355" loading="lazy" decoding="async"
width="39" height="37" />  situé dans le bandeau supérieur. Même lorsque
le mapping a été enregistré, il est possible de restaurer une version
antérieure en choisissant la version souhaitée (date et heure). Vous
pouvez également possible exporter un mapping (<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/exporter.png"
class="alignnone wp-image-131" loading="lazy" decoding="async"
width="30" height="31" />), le dupliquer (<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/duppliquer.png"
class="alignnone wp-image-133" loading="lazy" decoding="async"
width="33" height="34" />) ou le supprimer (<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/supprimer.png"
class="alignnone wp-image-200" loading="lazy" decoding="async"
width="33" height="32" />).

## Editer les règles d'un mapping

Il est possible d’avoir plusieurs lignes d’instruction dans les
différentes zones. Elles seront alors interprétées dans l’ordre
d’écriture.

Certaines données de l’unité documentaire contiennent des valeurs
spécifiques à renseigner dans les règles de mapping (texte à indiquer en
tant que chaîne de caractères) :

### Syntaxe des expressions

Le langage utilisé pour les expressions de mapping et les conditions est
basé sur le langage Groovy (dérivé du Java). Attention, Groovy est
sensible à la casse.

#### Syntaxe de base

#### Collections

Lorsque des champs sont répétables, ils doivent être traités comme
collection d’éléments. Le cas échéant, seule la première occurrence sera
traitée.

#### Fonctions standard

Les fonctions standard Groovy peuvent être utilisées.


### Champs à valeur spécifique
   Champ de l’unité documentaire | Valeurs                          | Description                                      |
 |--------------------------------|----------------------------------|--------------------------------------------------|
 | Droits                          | `TO_CHECK`                       | Droits à vérifier                                |
 |                                 | `FREE`                           | Libre de droits                                  |
 |                                 | `RESTRICTED`                     | Sous droits                                      |
 |                                 | `RESTRICTED_WITH_AUTHORIZATION`  | Sous droits avec l’accord de l’auteur            |
 | Archivable                      | `TRUE`                           |                                                  |
 |                                 | `FALSE`                          |                                                  |
 | Type de constat d’état          | `MONO_PAGE`                      | Constat d’état mono-feuillet                     |
 |                                 | `MULTI_PAGE`                     | Constat d’état multi-feuillets                   |

---

### Syntaxe des expressions

#### Syntaxe de base
 | Syntaxe | Description                                                                                     | Exemples                                                                 |
 |---------|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
 | `" "`   | Chaînes de caractères                                                                           | R / C `1 "texte"` ou `'texte'`                                          |
 | `+`     | Concaténation de plusieurs chaînes de caractères ou de champs / sous-champs avec des chaînes de caractères | R / C `"a " + "b"`<br />`"source, " + \930$a`<br />`"source, $\930$a"` |
 | `==`    | "égal"                                                                                           | C `\607$2 == 'rameau'`                                                  |
 | `>`     | "supérieur"                                                                                     |                                                                          |
 | `<`     | "inférieur"                                                                                     |                                                                          |
 | `>=`    | "supérieur ou égal"                                                                             |                                                                          |
 | `<=`    | "inférieur ou égal"                                                                             |                                                                          |
 | `&&`    | ET                                                                                              | C `\200 && \210`                                                        |
 | `\|\|`  | OU                                                                                              | `\200 \|\| \210`                                                       |
 | `!`     | NON (négation)                                                                                 | `\607$2 != 'rameau'`<br />`!\410`                                        |

---

#### Collections
 | Syntaxe                          | Description                                                                                     | Exemples                                                                 |
 |----------------------------------|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
 | `[ , ]`                          | Collection d’éléments                                                                          | R / C `[\600$x, \600$y, \600$z]`                                        |
 | `grep().join('chaîne')`          | Parcours des éléments d'une collection et concaténation des éléments d'une collection dans une chaîne de caractères | R `[\600$x, \600$y, \600$z].grep().join(' - ')`                        |
 | `in`                             | Recherche dans une collection                                                                  | C `\702$4 in ['160', '610', '650'] : 704$4 = '160' ou '610' ou '650'` |

---

#### Fonctions standard
 | Syntaxe                          | Description                                                                                     | Exemple                                                                 |
 |----------------------------------|-------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
 | `capitalize()` / `uncapitalize()` | Majuscule / minuscule le 1er caractère d'une chaîne.                                           | R `"texte".capitalize()`<br />`"Texte".uncapitalize()`                   |
 | `toUpperCase()` / `toLowerCase()` | Majuscules / minuscules toute la chaîne de caractères.                                         | R `"texte".toUpperCase()`<br />`"TeXTe".toLowerCase()`                   |
 | `padLeft(nbDeCaractères)` / `padRight(nbDeCaractères)` | Ajoute des blancs au début ou à la fin de la chaîne de caractère. | R `"texte".padLeft(5)`<br />`"texte".padRight(5)`                        |
 | `trim()`                         | Supprime les espaces au début et à la fin d'une chaîne de caractères.                          | R / C `"     texte     ".trim()`                                |
 | `substring(posDébut, posFin)`    | Sous-chaîne de la chaîne de caractère                                                          | R / C `"texte".substring(2,4) : "xt"`                           |
 | `replaceAll(recherche, remplacement)` | Remplace une partie d'une chaîne de caractères par une autre.                          | R `\035$a.replaceAll('^ppn', '')`                               |
 | `length()`                       | Longueur de la chaîne de caractères                                                            | C `"texte".length()`<br />`\100$a.length()`                        |
 | `startsWith(prefixe)` / `endsWith(suffixe)` | Vrai ou faux selon si la chaîne de caractère commence / se termine par le préfixe / suffixe mentionné | C `\035$a.startsWith('ppn')`                                   |