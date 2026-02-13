---
title: Import de notice bibliographique à partir d’un fichier MARC XML
sidebar_label: Import de notice bibliographique à partir d’un fichier MARC XML
sidebar_position: 16
---

# Import de notice bibliographique à partir d’un fichier MARC XML

#### Mapping d'import dans NumaHOP

Pour configurer le mapping qui servira aux imports, il faut sélectionner
dans le menu de gauche l’icone Administration <img
src="https://www.numahop.fr/wp-content/uploads/2022/10/administration-NumaHOP.png"
class="alignnone wp-image-138" decoding="async" width="35"
height="37" />

Puis sélectionner dans l’encadrement en bas à droite de l’écran :
Mapping des notices MARC.

<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/import-notices-marc-1-300x80.png"
class="alignnone size-medium wp-image-403" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/10/import-notices-marc-1-300x80.png 300w, https://www.numahop.fr/wp-content/uploads/2022/10/import-notices-marc-1-768x204.png 768w, https://www.numahop.fr/wp-content/uploads/2022/10/import-notices-marc-1.png 787w"
sizes="(max-width: 300px) 100vw, 300px" width="300" height="80" />

Cliquez sur le +  pour ajouter un nouveau Mapping. <img
src="https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-2.png"
class="alignnone wp-image-315" loading="lazy" decoding="async"
width="143" height="27" />

Une fenêtre comme celle-ci-dessous va s’afficher

Donner un nom au mapping et associé le à une bibliothèque.

Puis vous pouvez cliquer sur le bouton « Ajouter une règle » en bas à
droite. Le pop-up ci-dessous s’affiche :

 

 

 

Exemple tronqué de mapping MARC ci-contre

Correspondance entre le Dublin Core et le format MARC du SIGB.

 

 

 

 

 

 

 

 

Exemple d’un fichier MARC XML : 1 enregistrement

#### Import du fichier MARC XML dans NumaHOP

Sélectionner dans le menu à gauche de l’écran  l’icône Bibliothèque :
<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/documents-numaHOP.png"
class="alignnone wp-image-134" loading="lazy" decoding="async"
width="24" height="29" />

Un menu apparait :  sélectionner « imports »

<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/import-notices-marc-6-216x300.png"
class="alignnone size-medium wp-image-408" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/10/import-notices-marc-6-216x300.png 216w, https://www.numahop.fr/wp-content/uploads/2022/10/import-notices-marc-6.png 225w"
sizes="(max-width: 216px) 100vw, 216px" width="216" height="300" />

Le formulaire des imports s’affiche sur la partie centrale de l’écran  :

Zone paramétrage :

Type d’import : simple

Format de fichier : MARC XML

Mapping MARC : nom de votre fichier MARC XML à importer

Zone Import :

Projet : nom du projet

Si la vérification des unités documentaires ou la recherche de doublons
a été activé, Numahop effectue alors  
un pré-import. A la fin du pré-import, l’utilisateur peut visualiser les
erreurs éventuelles, les doublons  
trouvés. L’import est au statut Validation utilisateur, à ce stade les
unités documentaires ne sont pas encore  
importées.

Visualisation du pré import :

Une fois la vérification faite, on peut cliquer sur Importer :

Dans la liste des notices importées, pour chaque notice, il y a un
raccourci pour accéder à l’unité documentaire créée automatiquement lors
de l’import.
