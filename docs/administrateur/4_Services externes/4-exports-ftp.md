---
title: Serveur d'export
sidebar_label: Serveur d'export
sidebar_position: 4
description: Configuration du serveur d'export
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "server"]} /> Configuration du serveur d'export FTP

## Présentation

Cette page permet de :
- configurer l’adresse du serveur FTP local où NumaHOP enverra les fichiers traités à la clôture du lot ou du projet.
- choisir les fichiers à exporter à la clôture du lot ou du projet
- indiquer le dossier de livraison de ces fichiers

## Configuration

### Déclaration du serveur FTP

Aller dans <Icon icon={["fa", "gear"]} /> **Administration** > **Services externes** >  **Configurations exports FTP**.

Cliquer sur le bouton <Icon icon={["fa", "square-plus"]} /> pour créer un **nouveau serveur FTP de livraison**.

**Remplir les informations du serveur** :

| Libellé | Commentaires | Détails |
|---------|--------------|---------|
| Libellé | Le nom de votre serveur FTP local de stockage. Ce nom apparaîtra dans la définition du projet et du lot. | 🔴 Obligatoire |
| Serveur de stockage | L’adresse du serveur FTP, fournie par votre DSI. | 🔴 Obligatoire |
| Port | Le port du serveur FTP, fourni par votre DSI. | 🔴 Obligatoire |
| Login | L’identifiant de connexion au serveur FTP, fourni par votre DSI. | 🔵 Facultatif |
| Mot de passe | Le mot de passe de connexion au serveur FTP, fourni par votre DSI ou prestataire. | 🔵 Facultatif |
| Bibliothèque | La bibliothèque concernée par la livraison. | 🔴 Obligatoire |

Une fois la configuration réalisée, l’export des fichiers vers le serveur FTP sera disponible à la clôture des lots ou projets.

### Choix des fichiers à exporter
**Cocher les fichiers à exporter** sur votre serveur local à la clôture du lot parmi les suivants :
- METS
- AIP/SIP
- Masters
- Views
- Vignettes
- PDF
- Alto

### Configuration du dossier de livraison des fichiers 

A l'aide du bouton <Icon icon={["fa", "square-plus"]} /> **entrer l'adresse du dossier** où vous souhaitez récupérer vos données sur votre serveur local.





