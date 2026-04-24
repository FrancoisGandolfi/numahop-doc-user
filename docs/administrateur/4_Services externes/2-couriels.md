---
title: Configurations couriels
sidebar_label: Configurations couriels
sidebar_position: 2
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "at"]} /> Configurations couriels


## Présentation

Cette section permet de configurer le serveur de messagerie destiné à recevoir les courriels du CINES, afin de mettre à jour, dans la rubrique **Archivage**, les informations suivantes pour chaque unité documentaire :
- la date de réception par le CINES (courriel d’accusé de réception)
- la date d’archivage, le certificat, l’identifiant de versement et l’identifiant docPaC (courriel de certification d’archivage)


## Configuration

Ajouter un compte courriel à l'aide de l'icône <Icon icon={["fa", "plus"]} />.

Remplir les informations suivantes avec votre DSI ou votre fournisseur d'hébergement de NumaHOP :

| **Libellé**                  | **Commentaire**                                                                        | **Détails** |
|------------------------------|----------------------------------------------------------------------------------------|-------------|
| Actif                        | Oui/non                                                                                |🔵 Facultatif            |
| Libellé                      | Nom du service de mail                                                                 |🔴 Obligatoire|
| Serveur                      | Serveur de messagerie                                                                  |🔵 Facultatif            |
| Port                         | Port du serveur de messagerie                                                          |🔵 Facultatif             |
| Repertoire                   | Répertoire de réception des mails du CINES                                             |🔵 Facultatif             |
| Utilisateur                  | Mail de réception                                                                      |🔵 Facultatif             |
| Mot de passe                 | Mot de passe messagerie                                                                |🔵 Facultatif             |
| Bibliothèque                 | Nom de l'établissement recevant les certificats d'archivage                            |🔴 Obligatoire           |
| **_Configuration JavaMail_** | Ajouter à l'aide de l'icône <Icon icon={["fa", "plus"]} />  les propriétés et valeurs de votre serveur de messagerie |🔵 Facultatif             |






