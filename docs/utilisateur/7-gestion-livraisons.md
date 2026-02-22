---
title: Gestion des livraisons
sidebar_label: Gestion des livraisons
sidebar_position: 1
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "dolly"]} /> Gestion des livraisons


# Guide de livraison

### Créer une livraison

Une livraison est toujours rattachée à un lot, lui-même rattaché à un
projet. Un lot peut donc contenir plusieurs livraisons.

Créer une livraison : cliquer sur l’icône bibliothèque <img
src="https://www.numahop.fr/wp-content/uploads/2022/10/autres-actions.png"
class="alignnone wp-image-144" decoding="async" width="42"
height="40" /> puis sur « Livraisons ».

Cliquer sur l’icône “+” et remplir le formulaire de livraison.

Rattacher la livraison au bon lot.

Il est très important de remplir correctement le champ “dossier de
livraison” : c’est là qu’est indiqué [le chemin vers le
FTP](https://www.numahop.fr/2022/10/19/guide-de-depot-sur-un-ftp/) pour
accéder aux documents que vous souhaitez livrer.

 

Dans les paramétrages de NumaHOP, une partie du chemin vers le FTP est
déjà enregistrée.

 

Dans le champ “dossier de livraison”, c’est la suite qu’il faut
indiquer.

Ce chemin se trouve dans la barre supérieure du FTP.

Attention : les fichiers à livrer doivent se trouver dans un dossier
nommé suivant l’identifiant du document.

Une fois les champs remplis dans NumaHOP, cliquez sur Enregistrer.

### Livrer des documents

 

Cliquer sur le bouton “livrer” en haut à droite.

Dans un premier temps, NumaHOP va repérer tous les documents se trouvant
au niveau du chemin indiqué précédemment.

Par défaut, tous les documents trouvés sont inclus dans la livraison,
pour en exclure 1 ou plusieurs, cliquer sur le bouton “livrer” pour
qu’il bascule en “exclure”.

La plateforme va également indiquer si elle trouve des fichiers qu’elle
n’attendait pas.

Par exemple, dans cette livraison NumaHOP trouve des fichiers au format
.xls, .xml et .pdf. Il est possible d’indiquer que le fichier .xml
correspond au fichier METS, le .pdf au fichier PDF, et le fichier .xls à
la table des matières.

Une fois la livraison lancée, il est possible de suivre son avancement.

La livraison est terminée lorsque le statut indique “A contrôler” et que
l’icône permettant d’accéder au contrôle des documents est disponible
sous l’onglet “Action”.

Le chargement du rapport est possible, il est notamment utile lorsque la
livraison, ou certains documents de la livraison, n’ont pu aboutir.


---
title: Guide de dépôt sur un FTP
sidebar_label: Guide de dépôt sur un FTP
sidebar_position: 27
---

# Guide de dépôt sur un FTP

Page rédigée sur le modèle du FTP utilisé par Sciences Po Paris.

 

 

Ouvrir [FileZilla](https://fr.wikipedia.org/wiki/FileZilla) et se
connecter au FTPNumaHOP avec les identifiants présents dans le menu
Paramètres &gt; configurations FTP

 

 

Au niveau de l’écran de gauche, se positionner sur les documents à
envoyer sur le serveur FTP.

Au niveau de l’écran de droite, aller jusqu’au bon répertoire. Pour cet
exemple, il s’agit du répertoire :  
/disk/data-sciencespo/sftp/sciencespo/sciencespo

 

 

 

S’il n’existe pas, créer le répertoire dans lequel déposer les documents

Attention : les documents à livrer doivent être dans un dossier portant
le même identifiant.

 

 

 

 

 

 

On peut suivre le bon envoi des documents dans la partie basse de
l’écran

 

 

Lorsque l’opération est terminée, la liste doit être la même sur les
deux parties de l’écran.


Guide pratique créer et lancer une livraison

(numérisation interne)

Une livraison est toujours rattaché à un lot, lui-même rattaché à un projet.
Un lot peut donc contenir plusieurs livraisons.
Le choix du lot dépend de la nature des documents à livrer : Jean Longuet ; Archelec ; Thèses, etc.

Cliquer sur l’icône bibliothèque puis sur « Livraisons ».

Créer une livraison

Cliquer sur l’icône « + » et remplir le formulaire de livraison.
Rattacher la livraison au bon lot.
Il est très important de remplir correctement le champ « Dossier de livraison » : c’est là qu’est indiqué
le chemin vers le (S)FTP pour accéder aux documents que vous souhaitez livrer.

Créer une livraison

Dans les paramétrages de NumaHOP, une partie du chemin vers le (S)FTP est déjà enregistré.

Créer une livraison

Ainsi, dans le champs « dossier de livraison », c’est la suite qu’il convient d’indiquer.
Ce chemin se trouve dans la barre supérieure du (S)FTP :

Créer une livraison

Partie du chemin à indiquer dans
« Dossier de livraison »

Partie du chemin déjà enregistrée
dans NumaHOP

Attention : les fichiers à livrer doivent se trouver dans un dossier nommé suivant l'identifiant du document

Une fois les champs remplis, cliquer sur « enregistrer ».

Créer une livraison

Cliquer sur le bouton « Livrer » en haut à droite.

Créer une livraison

Dans un premier temps, NumaHOP va repérer tous les documents se trouvant au niveau du chemin indiqué précédemment.
Par défaut, tous les documents trouvés sont inclus dans la livraison, pour en exclure un ou plusieurs, cliquer sur le bouton « Livrer » pour
qu’il bascule sur « exclure ».
La plateforme va également indiqué si elle trouve des documents qu’elle n’attendaient pas : des documents en format JPEG2000 ont été
déclarés au moment de créer le lot et NumaHOP trouvent aussi dans cette livraison des .xml ou des .xsl. Il est possible d’indiquer que ces
mets correspondent aux métadonnées et ces .xsl aux tables des matières.

Créer une livraison

Une fois la livraison lancée, il est possible de suivre son avancement grâce à la diode.
Attention toutefois, celle-ci n’est pas forcément fiable en cours de livraison.

Créer une livraison

La livraison est terminée lorsque le statut indique « A contrôler » et que l’icône permettant d’accéder
au contrôle du document est accessible sous l’onglet « Action ».
Le chargement du rapport est possible, il est notamment utile lorsque la livraison ou certains
documents de la livraison n’ont pas pu aboutir.