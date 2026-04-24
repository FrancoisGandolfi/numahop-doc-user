---
title: Configuration du serveur de livraison
sidebar_label: Configuration du serveur de livraison
sidebar_position: 3
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "server"]} /> Configuration du serveur de livraison


## Présentation

Cette page permet de configurer le serveur FTP de livraison des fichiers numérisés à livrer. C'est l'adresse sur laquelle livre le prestataire de numérisation ou votre service de numérisation interne livre les données. 

## Configuration

:::danger Configuration à réaliser uniquement sur les premières versions de NumaHOP

A partir de la version 2.3 de NumaHOP, l'authentification se fait par clé d'authentification. Les clés d'authentification sont à fournir à votre DSI ou à votre prestataire de service pour NumaHOP qui se chargera de réaliser directement les paramétrages de connexion sur le serveur SFTP. 
:::


Pour entrer l’adresse d’un serveur FTP pour le dépôt des fichiers numérisés à livrer, aller dans Administration <Icon icon={["fa", "gear"]} /> puis dans Configurations exports FTP.

Cliquer sur l’icône <Icon icon={["fa", "plus"]} /> pour ajouter une nouvelle adresse de serveur FTP pour la livraison des fichiers à livrer.

Remplir les configurations suivantes : 

| **Libellé**          | **Commentaire**                                       | **Détails** |
|----------------------|-------------------------------------------------------|-------------|
| Libellé              | Nom de votre serveur SFTP                             | 🔴 Obligatoire            |
| Adresse              | Adresse de votre serveur SFTP                         | 🔵 Facultatif            |
| Login                | Identifiant de votre serveur SFTP                     | 🔵 Facultatif             |
| Mot de passe         | Mot de passe de votre serveur SFTP                    | 🔵 Facultatif             |
| Dossier de livraison | Dossier de livraison de votre serveur SFTP            | 🔵 Facultatif             |
| Bibliothèque         | Etablissement auquel est rattaché ce serveur de livraison | 🔴 Obligatoire             |

Une fois la configuration faite, les livraisons peuvent être réalisées sur le serveur FTP. 


