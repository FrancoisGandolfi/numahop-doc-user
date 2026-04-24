---
title: Configuration Omeka
sidebar_label: Configuration Omeka
sidebar_position: 6
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "laptop-file"]} /> Configuration Omeka


## Présentation

Cette interface permet de régler les paramatrages vers Omeka :


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
Dans la rubrique du formulaire « Collections Omeka », cliquer sur le
bouton + (plus) pour ajouter les collections dans lesquelles seront
versées les unités documentaires provenant de Numahop.

Dans la rubrique « Types d’items Omeka », cliquer sur le bouton +  
(<img src="https://www.numahop.fr/wp-content/uploads/2022/10/Ajouter.png"
class="alignnone wp-image-202" loading="lazy" decoding="async"
width="24" height="21" />) pour ajouter modèle de ressource
correspondant dans Omeka.

Cliquer ensuite sur le bouton « Enregistrer ».

Le menu « Configuration OMEKA » donne aussi accès à la liste des sorties
Omeka créées avec des possibilités de recherche et de filtrage par
bibliothèque.

Pour modifier une sortie Omeka, cliquer sur le libellé de la
configuration à modifier puis sur le bouton « Modifier »
(<img src="https://www.numahop.fr/wp-content/uploads/2022/10/editer.png"
class="alignnone wp-image-132" loading="lazy" decoding="async"
width="27" height="25" />) en haut à droite. Enregistrer les
modifications.

 

 

A noter :

Configuration d’une sortie Omeka

**Pré-requis** : Disposer de droits de type « administrateur » avec l’habilitation **CONF-DIFFUSION-OMEKA-HAB1** (Administration - gestion des configurations Omeka : création/modification).

---

### Accéder à la configuration

1. Allez dans **Administration** (roue dentée).
2. Dans l’encadré **Services externes**, cliquez sur **Configurations OMEKA**.
3. Cliquez sur le bouton **+** (plus) situé à droite de la fenêtre de recherche pour afficher le formulaire de configuration.

---

### Remplir le formulaire

#### Champs obligatoires
- **Libellé** : Permet de distinguer les différentes configurations (exemple : configuration pour une base de test et une base en production).
- **Configuration vers un Omeka S** : Choisissez « oui » pour Omeka S ou « non » pour Omeka Classic.
- **Bibliothèque** : Sélectionnez la bibliothèque concernée dans la liste des bibliothèques créées dans NumaHOP.
- **Serveur de stockage** : Indiquez l’adresse du serveur de l’instance Omeka.
- **Port du serveur** : Indiquez le port du serveur.

#### Champs optionnels
- **Adresse de dépôt** : Spécifiez le dossier où seront déposés les fichiers exportés depuis NumaHOP sur le serveur Omeka.
- **Login et mot de passe** : Identifiants de connexion au serveur NumaHOP pour le dépôt des fichiers sur le serveur Omeka.
- **Connexion SFTP** : Choisissez « oui » ou « non ».
- **URL d’accès au logiciel Omeka** : L’adresse pour accéder à Omeka.
- **Adresse mail** : Adresse qui recevra les fichiers de données CSV générés par NumaHOP pour l’importation des unités documentaires dans Omeka.

---

### Configurer les collections et types d’items

1. Dans la rubrique **Collections Omeka**, cliquez sur **+** pour ajouter les collections où seront versées les unités documentaires provenant de NumaHOP.
2. Dans la rubrique **Types d’items Omeka**, cliquez sur **+** pour ajouter le modèle de ressource correspondant dans Omeka.

---

### Enregistrer et gérer les configurations

1. Cliquez sur **Enregistrer** pour sauvegarder la configuration.
2. Le menu **Configuration OMEKA** permet d’accéder à la liste des sorties Omeka créées, avec des options de recherche et de filtrage par bibliothèque.

---

### Modifier une configuration

1. Cliquez sur le libellé de la configuration à modifier.
2. Cliquez sur le bouton **Modifier** (crayon) en haut à droite.
3. Enregistrez les modifications.

**Pré-requis** : Habilitation **CONF-DIFFUSION-OMEKA-HAB2** (Administration - gestion des configurations Omeka : suppression).

---

### Supprimer une configuration

1. Cliquez sur le libellé de la configuration à supprimer.
2. Cliquez sur le bouton **Supprimer** (poubelle).
3. Confirmez la suppression en cliquant de nouveau sur **Supprimer**.

---

### Choisir la configuration de sortie Omeka

La configuration de la sortie Omeka pour la diffusion se fait au niveau de chaque **projet**, **lot** ou **unité documentaire**, dans la rubrique **Configurations Omeka**.

