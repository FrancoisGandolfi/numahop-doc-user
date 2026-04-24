---
title: Configuration du serveur d'export
sidebar_label: Configuration du serveur d'export
sidebar_position: 4
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "server"]} /> Configuration du serveur d'export FTP

## Présentation

Cette page permet de configurer l’adresse du serveur FTP local où NumaHOP enverra les fichiers traités à la clôture du lot ou du projet.

## Configuration

### Déclaration du serveur FTP

Pour configurer l’adresse d’export des fichiers à la clôture du lot ou du projet, allez dans <Icon icon={["fa", "gear"]} /> **Administration** > **Configurations FTP**.

**Ajouter un nouveau serveur FTP** : Cliquez sur le bouton <Icon icon={["fa", "plus"]} /> pour créer un nouveau serveur FTP de livraison.

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


### Confuguration du dossier de livraison des fichiers 






