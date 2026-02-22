---
title: Configuration du serveur d'export
sidebar_label: Configuration du serveur d'export
sidebar_position: 4
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "server"]} /> Configuration du serveur d'export

**Objectif** : Entrer sur NumaHOP l’adresse du serveur FTP local où seront envoyés les fichiers à la clôture du lot ou du projet.

---

### Étapes de configuration

1. **Accéder à la page de configuration**
   Pour configurer l’adresse d’export des fichiers à la clôture du lot ou du projet :
   - Allez dans **Administration**, puis dans **Configurations FTP**.

2. **Ajouter un nouveau serveur FTP**
   - Sur la page qui s’ouvre, cliquez sur le bouton d’ajout pour créer un nouveau serveur FTP de livraison.

3. **Remplir les informations du serveur**
   Une nouvelle page s’affiche. Renseignez les champs suivants :
   - **Libellé** : Le nom de votre serveur FTP local de stockage. Ce nom apparaîtra dans la définition du projet et du lot.
   - **Serveur de stockage** : L’adresse du serveur FTP, fournie par votre DSI.
   - **Port** : Le port du serveur FTP, fourni par votre DSI.
   - **Login** : L’identifiant de connexion au serveur FTP, fourni par votre DSI.
   - **Mot de passe** : Le mot de passe de connexion au serveur FTP, fourni par votre DSI ou votre prestataire en charge de l’hébergement de NumaHOP.
   - **Bibliothèque** : La bibliothèque concernée par la livraison.

4. **Sélectionner les types de fichiers à exporter**
   - Cochez les types de fichiers à exporter sur votre serveur local.
   - Pour la définition des formats (vignettes, vues, master), reportez-vous à la procédure « Configuration du format des vues ».

5. **Configurer les dossiers de livraison**
   - Dans **Configurations des dossiers de livraison**, indiquez le nom (ou les noms) du ou des dossiers sur le FTP où seront déposés les fichiers à exporter.

---

### Exemple de configuration remplie

Une fois la configuration terminée, l’écran rempli peut ressembler à ceci :
*(Insérer ici une capture d’écran ou une description visuelle si nécessaire.)*
