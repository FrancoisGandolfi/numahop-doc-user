---
title: 'Mappings : généralités'
sidebar_label: 'Mappings : généralités'
sidebar_position: 1
description: Paramatrage des fichiers de conversion de données bibliographiques en Dublin Core.
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "shuffle"]} /> Mappings: généralités

---
title: Créer un mapping
sidebar_label: Créer un mapping
sidebar_position: 13
---

# Créer un mapping

L’import des notices des différents SIGB dans l’application s’effectue
via des règles pré-définies.

Pour définir ces règles, aller dans « Administration » <img
src="https://www.numahop.fr/wp-content/uploads/2022/10/administration-NumaHOP.png"
class="alignnone wp-image-138" decoding="async" width="27"
height="28" /> &gt; Mapping.

Les mappings sont créés par bibliothèque. Il est possible d’en avoir
plusieurs par bibliothèque. Lors de l’import, l’utilisateur choisit le
mapping à appliquer selon les notices à importer (y compris pour un
import de notices Z39.50).

Pour créer un mapping, cliquer sur
:<img src="https://www.numahop.fr/wp-content/uploads/2022/10/mapping.png"
class="alignnone size-full wp-image-351" decoding="async" width="247"
height="98" />

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

### Editer les règles d'un mapping

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
