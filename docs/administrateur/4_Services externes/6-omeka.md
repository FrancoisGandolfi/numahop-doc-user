---
title: Configuration Omeka
sidebar_label: Configuration Omeka
sidebar_position: 6
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "laptop-file"]} /> Configuration Omeka


## Présentation

Cette interface permet de régler les paramétrages vers Omeka :
- configuration de la connexion au serveur Omeka
- configuration des collections Omeka auquelles liées les unités documentaires
- configuration des types d'items auxquels liés les unités documentaires
- configuration des champs personnalisés Omeka. 
- diffusion des documents sur Omeka 


:::info Pré-requis 

Pour pouvoir configurer une sortie Omeka, il est nécessaire de disposer de droits de type « Administrateur » avec l’habilitation CONF-DIFFUSION-OMEKA-HAB1 (Administration – gestion des configurations Omeka: création/modification). 

Se référer à [Gestion des profils](docs/administrateur/1_Groupes%20&%20utilisateurs/4-profils.md)
:::


## Paramétrage de la sortie vers Omeka 

### Choix de la version d'Omeka

Pour configurer une sortie Omeka Classic ou Omeka S dans Numahop, aller dans <Icon icon={["fa", "plus"]} />  **Administration** > **Services externes** > **Configurations Omeka**

Dans la partie de gauche cochez la case correspondante à votre Omeka :
- Omeka pour Omeka Classic
- Omeka S pour Omeka S

### Ajout d'une configuration Omeka 


Cliquer ensuite sur le bouton <Icon icon={["fa", "plus"]} /> pour accéder au formulaire de configuration d'Omeka 

Les champs suivants sont à remplir :
| Libellé | Commentaires | Détails |
|---------|--------------|---------|
|Libellé         |  Permet de de distinguer les différentes configurations si nécessaire (par exemple pour distinguer une configuration de l’export vers une base de test et une base en production)             |🔴 Obligatoire         |
|OmekaS         |Choisir le bouton *oui* pour un Omeka S et *non* pour un Omeka Classic              |🔵 Facultatif         |
|Active         | oui/non             | 🔵 Facultatif        |
|Bibliothèque         |L'établissement auquel est rattaché la sortie Omeka à partir de la liste des bibliothèques créées dans Numahop              | 🔴 Obligatoire        |
|Serveur de stockage         |l’adresse du serveur de l’instance Omeka              |🔴 Obligatoire         |
|Port         |              |Le port du serveur         |🔴 Obligatoire
|Adresse de dépôt         | Indiquer le dossier dans lequel devront être déposés les fichiers exportés depuis NumaHOP sur le serveur Omeka.             | 🔵 Facultatif        |
|Login         | identifiant pour se connecter au serveur d'Omeka pour déposer les fichiers             |🔵 Facultatif         |
|Mot de passe         | mot de passerpour se connecter au serveur d'Omeka pour déposer les fichiers               | 🔵 Facultatif        |
|Connexion SFTP         | choisir le bouton *oui* pour une connexion SFTP et *non* pour une connexion FTP            | 🔵 Facultatif        |
|Url d'accès Omeka         | L’URL d’accès au logiciel Omeka             | 🔵 Facultatif        |
|Email         |Indiquer l’adresse mail qui recevra les fichiers de données CSV générés par NumaHOP et nécessaires à l’importation des unités documentaires dans Omeka             |🔵 Facultatif         |


### Ajout de collection Omeka 
Dans la rubrique du formulaire **Collections Omeka**, cliquer sur le bouton <Icon icon={["fa", "plus"]} />  pour ajouter les collections dans lesquelles seront
versées les unités documentaires provenant de NumaHOP

### Ajout de types d'items dans Omeka 

Dans la rubrique du formulaire **Types d'items**, cliquer sur le bouton <Icon icon={["fa", "plus"]} />  pour ajouter modèle de ressource correspondant aux inités documentaires dans Omeka.


### Ajout de champs personnalisés

Pour exporter des champs personnalisés vers Omeka  :  
Aller dans <Icon icon={["fa", "gear"]} /> **Administration** > **Configuration** > **Types de propriété personnalisés** > <Icon icon={["fa", "plus"]} />.

*Exemple : Ajouter le champ "Format" s'il n'existe pas.*


## Diffusion des documents

### Export automatique
 Chaque nuit, un cron lance l'exports des images en attente vers le serveur Omeka  et l'envoi du mail lié pour importer les images.


### Export manuel
  - Lancer un export manuel vers Omeka depuis votre unité documentaire
  - Une page s’ouvre pour modifier les métadonnées si nécessaire.
  - Cliquer sur **Enregistrer les données du formulaire**, puis sur **Exporter vers Omeka** si des modifications ont été apportées. Sinon, cliquer directement sur **Exporter vers Omeka**


  :::caution Pour finaliser l'import aller dans Omeka 

Une fois le transfert des fichiers réalisés et le mail reçu, il est nécessaire de se rendre dans Omeka pour finaliser l'import manuellement. Vous pouvez alors utiliser le moduel *csv import* par exemple pour importer les données dans Omeka.  
:::



