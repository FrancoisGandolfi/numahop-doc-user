---
title: Guide de l’archivage au CINES
sidebar_label: Guide de l’archivage au CINES
sidebar_position: 9
---

# Guide de l’archivage au CINES

Pré-requis :

Attention : NumaHOP ne peut pas être utilisé pour effectuer des dépôts
sur la plateforme test du CINES. Avant d’effectuer les premiers dépôts
via NumaHOP, il faut au préalable avoir l’accord du CINES pour l’envoi
sur la plateforme de production.

Pour configurer l’archivage CINES, aller dans Administration  puis dans
Configurations CINES :

La page suivante s’ouvre, cliquer sur le bouton + pour enregistrer une
configuration CINES :

Indiquer dans :

Plans de classement PAC

Charger le plan de classement déclaré au CINES sur NumaHOP ou renseigner
le plan manuellement en cliquant sur l’icône +  :

Paramètres CINES : valeurs par défaut

Renseigner les valeurs qui seront renseignées par défaut si les
informations sont manquantes dans la notice.

 

**Codes langues à transposer :**

équivalence de la norme ISO 639-2 des notices en Dublin Core vers la
norme ISO 639-3 utilisée par le CINES.

Lorsque la configuration CINES est enregistrée, la branche du plan de
classement peut être sélectionnée au niveau du projet, du lot ou de
l’unité documentaire.

L’’unité documentaire doit être définie comme archivable.

 

Les fichiers mets.xml et sip.xml sont générés par la plateforme. Chaque
nuit, un cron lance l’envoi des paquets en attente d’archivage.

L’envoi vers la plateforme d’archivage peut également être lancé
manuellement :

Une fois le document archivé au CINES, l’onglet Archivage de chaque UD
se met à jour avec la possibilité de récupérer les fichiers sip.xml et
mets.xml, l’identifiant de versement et l’identifiant docPac. Une fois
les contrôles de validation effectués lors du versement, le sip.xml est
transformé en aip.xml pour être archivé (ajout des métadonnées
d’archivage ) : il est possible de récupérer ce fichier dans Numahop.
