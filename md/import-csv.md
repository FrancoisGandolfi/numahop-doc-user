---
title: Import de notice à partir d’un fichier CSV
sidebar_label: Import de notice à partir d’un fichier CSV
sidebar_position: 12
---

# Import de notice à partir d’un fichier CSV

### Mapping d'import csv dans NumaHOP

Pour configurer le mapping qui servira aux imports, il faut sélectionner
dans le menu de gauche l’icone « administrer »<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/administration-NumaHOP.png"
class="alignnone wp-image-138" decoding="async" width="32"
height="33" />

Puis sélectionner dans l’encadrement en bas à droite de l’écran :
Mapping des notices csv

Cliquer sur le +  pour ajouter un nouveau Mapping :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-2.png"
class="alignnone wp-image-315 size-full" loading="lazy" decoding="async"
width="257" height="49" />](https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-2.png)

Une fenêtre comme celle-ci-contre va s’afficher

Donner un nom au mapping et associé le à une bibliothèque.

Puis vous pouvez cliquer sur le bouton « Ajouter une règle » en bas à
droite. Le pop-up ci-dessous s’affiche :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-4-300x130.png"
class="aligncenter wp-image-317 size-medium" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-4-300x130.png 300w, https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-4-768x334.png 768w, https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-4.png 905w"
sizes="(max-width: 300px) 100vw, 300px" width="300" height="130" />](https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-4.png)

Exemple de mapping csv :

Certaines données de l’unité documentaire contiennent des valeurs
spécifiques à renseigner dans les règles  
de mapping (texte à indiquer en tant que chaîne de caractères),
notamment les droits qui est une données  
obligatoire :

|-----------------------|-----------------------------------|-----------------------|
| Champs de l’unité     | Valeurs                           | Description           |
| documentaire          |                                   |                       |
|-----------------------|-----------------------------------|-----------------------|
| Droits                | TO\_CHECK                         | Droits à vérifier     |
|                       | FREE                              | Libre de droits       |
|                       | RESTRICTED                        | Sous droits           |
|                       | RESTRICTED\_WITH\_AUTHORIZATION   | Sous droits avec      |
|                       |                                   | l’accord de l’auteur  |
|-----------------------|-----------------------------------|-----------------------|
| Archivable            | TRUE                              |                       |
|                       | FALSE                             |                       |
|-----------------------|-----------------------------------|-----------------------|
| Diffusable            | TRUE                              |                       |
|                       | FALSE                             |                       |
|-----------------------|-----------------------------------|-----------------------|
| Type de constat       | MONO\_PAGE                        | Constat d’état        |
| d’état                | MULTI\_PAGE                       | mono-feuillet         |
|                       |                                   | Constat d’état        |
|                       |                                   | multi-feuillets       |
|-----------------------|-----------------------------------|-----------------------|

Champs de l’unité documentaire

Valeurs

Description

Droits

TO\_CHECK  
FREE  
RESTRICTED  
RESTRICTED\_WITH\_AUTHORIZATION  
  

Droits à vérifier  
Libre de droits  
Sous droits  
Sous droits avec l’accord de l’auteur

Archivable

TRUE  
FALSE

 

Diffusable

TRUE  
FALSE

 

Type de constat d’état

MONO\_PAGE  
MULTI\_PAGE

Constat d’état mono-feuillet  
Constat d’état multi-feuillets

### Construction du fichier csv

Il est conseillé de faire ce fichier sous Calc d’OpenOffice et
d’enregistrer le fichier sous l’extension .CSV

Pour les propriétés Dublin Core définis dans Types de propriété
personnalisés (dans l’administration  
NumaHop), le nom de la colonne doit être
« dc:nom\_de\_la\_propriete\_dc », par exemple dc:title, dc:coverage,  
dc:publisher etc.  
Pour les propriétés hors Dublin Core, comme le PGCN Id, le radical, le
titre (notice et unité documentaire), les  
droits (par ailleurs ces propriétés sont obligatoire), elles doivent
être spécifiées dans le mapping d’import.

A l’enregistrement, il faut mettre comme séparateur de données une
virgule et mettre les données entre « »

### Import du fichier csv dans NumaHOP

Sélectionner dans le menu à gauche de l’écran  l’icône  Bibliothèque
<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/documents-numaHOP.png"
class="alignnone wp-image-134" loading="lazy" decoding="async"
width="27" height="32" />. Un menu apparaît, sélectionner « imports » :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-7-216x300.png"
class="alignleft wp-image-320 size-medium" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-7-216x300.png 216w, https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-7.png 225w"
sizes="(max-width: 216px) 100vw, 216px" width="216" height="300" />](https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-7.png)

Le formulaire des imports s’affiche sur la partie centrale de l’écran :

Zone paramétrage :

Type d’import : simple

Format de fichier : csv

Mapping CSV : nom de votre fichier csv à importer

Zone Import :

Projet : nom du projet

Si la vérification des unités documentaires ou la recherche de doublons
a été activé, NumaHop effectue alors  
un pré-import. A la fin du pré-import, l’utilisateur peut visualiser les
erreurs éventuelles, les doublons  
trouvés. L’import est au statut Validation utilisateur, à ce stade es
unités documentaires ne sont pas encore  
importées

Le pré import est fait, on peut visualiser les erreurs :
