---
title: Export ALMA
sidebar_label: Export ALMA
sidebar_position: 1
description: Exporter des notices biblographiques depuis ALMA
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "arrow-up-from-bracket"]} /> Export ALMA

Contenu
1.	Création d’un Jeu de données dans Alma	2
1.1.	Créer un jeu de données	2
1.2.	Ajouter des données aux jeux de données	3
1.3.	Consulter son jeu de données	4
2.	Export du jeu de données dans ALMA	5
2.1.	Droit accès	5
2.2.	Executer l’export	5
3.	Récuperer votre fichier marc.xml	6
4.	Importer votre fichier dans numahop	7
4.1.	Imports Unimarc	8
4.2.	Imports EAD	8
4.2.1.	Notices sans composants	8
4.2.2.	Notices avec composants	9


Création d’un Jeu de données dans Alma
La première étape consiste à créer un jeu de données pour rassembler toutes les notices que vous souhaitez voir importer dans NumaHOP.
Créer un jeu de données
Pour cela, il vous faut créer un jeu de données. Allez dans Admin --> gérer les jeux.
La page suivant apparaît, cliquez sur Ajouter un jeu :

Sélectionnez ajouter un jeu exemplarisé :

La page suivante apparaît :

 La remplir avec les champs :
 Nom ensemble (ex : ésotérisme - réserve)
 Description avec le nom du  corpus et votre département (ex : ésotérisme – Réserve)
Choisir dans le menu déroulant Titres physiques
Privé choisi : non
Cliquez sur le bouton 
Ajouter des données aux jeux de données
Vous arrivez sur la suivante :

Cliquez sur  puis membres.
Vous arrivez sur la page suivante :

Cliquez sur ajouter des membres. Vous arrivez sur l’interface de recherche :

Vous pouvez lancer par exemple une recherche à la cote dans Alma à partir des documents sélectionnés (saisir votre cote dans les onglets suivants puis cliquer sur )
Vous arrivez sur la page suivante d’affichage de vos résultats. 

Pour enregistrer votre notice dans le jeu de données ; sélectionnez la bonne notice puis cliquez sur le bouton ajouter la sélection .
Une fois la donnée enregistrée, un pop-up apparait avec le message suivant :

Vous pouvez ainsi comme précédemment relancer une recherche au catalogue puis ajouter les exemplaires dans votre jeu de données etc.
Vous recommencez l’opération jusqu’à avoir sélectionné tous vos documents.
Consulter son jeu de données
Pour vérifier votre jeu de données et les exemplaires dedans, vous pouvez aller dans Admin --> gérer les jeux.
Vous arrivez sur la suivante :

Cliquez sur  puis sélectionner membres.
Votre liste de documents dans votre jeu de données apparaît :



Export du jeu de données dans ALMA
Droit accès
Cette partie est réalisable à l’ouverture d’Alma par les personnes suivantes :
Numérisation : Pauline Rivière 
Nordique : Lina Diamant, Florence Chapuis
Politique documentaire : Sophie Ighoud, Nadia Pizanias et Stéphane Dufournet
Réserve : Jocelyn Bouquillard, Agnès Calza, Marine Majchrzak, Nathalie Rollet-Bricklin
Les droits seront a priori étendus aux autres collègues participant aux opérations de numérisation dans les mois suivants. Merci de vous adresser à eux si vous n’avez pas les droits.
Executer l’export
Allez dans Ressources --> publication --> profils de publication
La liste des profils apparait, Choisir le vôtre et cliquez sur  puis Modifier


Changer le nom de l’ensemble pour récupérer votre jeu de données à exporter à l’aide du menu déroulant  :

Puis cliquez sur Enregistrer.
Cliquez à nouveau sur  puis Exécuter pour lancer le profil.

Récuperer votre fichier marc.xml
Ouvrir Filezilla. Entrer les informations suivantes en haut selon l’exemple :
adresse :  
login : 
mot de passe :
port :

Puis cliquez sur connexion rapide 

Vous allez vous retrouver sur l’interface ci-dessous :
A gauche en orange se trouve votre ordinateur où vous devrez transférer vos fichiers. Comme dans un explorateur de fichiers windows, sélectionnez l’endroit où vous voulez voir vos fichiers.
A droite se trouve le serveur où vous devrez récupérer votre fichier. Comme dans un explorateur de fichiers, pour accéder à votre fichier, vous devez cliquez sur home puis sur NumaHOP alma


Faites
 un clic droit sur le fichier à transférer puis télécharger.
Le fichier va se retrouver sur votre ordinateur à l’endroit indiqué plus haut.
Importer votre fichier dans numahop
Allez dans Gestion unitaire --> Imports

La fenêtre suivante apparaît :

Imports Unimarc
Choisir :
 votre type d’import selon s’il s’agit de monographies ou de périodiques. Pour les monographies (cas le plus courant) : choisir simple
Votre format de fichier : Marc.xml
Votre mapping (exemple mapping BSG fonds ancien pour les documents postérieurs à 1830 etc.)
Cliquez sur parcourir pour récupérer votre fichier
Choisir ensuite votre projet
Une fois le projet choisi, choisir le lot où importer les notices

Cliquez sur 
Les notices sont d’abord pré-importées. 

En cas de notices avec plusieurs exemplaires reliés, pensez bien à ignorer l’unité documentaire ne correspondant pas au document à  numériser à l’aide du menu déroulant. 


En cas d’écrasement de notices déjà importées, pensez bien à remplacer l’unité documentaire par celle du fichier trouvé si vous voulez écraser les notices (sinon notez ignorer l’unité doucmentaire) :


Une fois ces vérifications faites, cliquez sur 
Imports EAD
Notices sans composants
Pour les notices sans composants, choisir le mapping suivant :
Type d’import simple
EAD
Mapping BSG – EAD MAJ20181801 (D .7)


Cliquez sur parcourir pour récupérer votre fichier
Choisir ensuite votre projet
Une fois le projet choisi, choisir le lot où importer les notices

Cliquez sur 
Les notices sont d’abord pré-importées. 

En cas de notices avec plusieurs exemplaires reliés, pensez bien à ignorer l’unité documentaire ne correspondant pas au document à  numériser à l’aide du menu déroulant. 


En cas d’écrasement de notices déjà importées, pensez bien à remplacer l’unité documentaire par celle du fichier trouvé si vous voulez écraser les notices (sinon notez ignorer l’unité doucmentaire) :


Une fois ces vérifications faites, cliquez sur 



Notices avec composants
Pour les notices sans composants, choisir le mapping suivant :
Hierarchies de composants dans une seule notice
EAD
Mapping Bulac test BSG
Mapping Bulac test BSG


Cliquez sur parcourir pour récupérer votre fichier
Choisir ensuite votre projet
Une fois le projet choisi, choisir le lot où importer les notices

Cliquez sur 
Les notices sont d’abord pré-importées. 

En cas de notices avec plusieurs exemplaires reliés, pensez bien à ignorer l’unité documentaire ne correspondant pas au document à  numériser à l’aide du menu déroulant. 


En cas d’écrasement de notices déjà importées, pensez bien à remplacer l’unité documentaire par celle du fichier trouvé si vous voulez écraser les notices (sinon notez ignorer l’unité doucmentaire) :


Une fois ces vérifications faites, cliquez sur 

---

Création d’un Jeu de données dans Alma
La première étape consiste à créer un jeu de données pour rassembler toutes les notices que vous souhaitez voir importer dans NumaHOP.
Créer un jeu de données
Pour cela, il vous faut créer un jeu de données. Se localiser dans Département Patrimoine puis allez dans Admin --> gérer les jeux.
La page suivant apparaît, cliquez sur Ajouter un jeu :

Sélectionnez ajouter un jeu exemplarisé :

La page suivante apparaît :

 La remplir avec les champs :
 Nom ensemble (ex : mémoires ELSP)
Choisir dans le menu déroulant Titres physiques
Privé choisir : non
Cliquez sur le bouton Ajouter des contenus au jeu

Ajouter des contenus au jeu de données
Vous arrivez sur une page avec la barre de recherche :


Vous pouvez lancer une recherche à la cote, au titre, à l’auteur, au numéro PPN etc. dans Alma Vous arrivez sur la page suivante d’affichage de vos résultats. 

Pour enregistrer votre notice dans le jeu de données ; sélectionnez la bonne notice puis cliquez sur le bouton ajouter la sélection .
Une fois la donnée enregistrée, un pop-up apparait avec le message suivant :

Vous pouvez ainsi comme précédemment relancer une recherche au catalogue puis ajouter les exemplaires dans votre jeu de données etc.
Vous recommencez l’opération jusqu’à avoir sélectionné tous vos documents.
Consulter son jeu de données
Pour vérifier votre jeu de données et les exemplaires dedans, vous pouvez aller dans Admin --> gérer les jeux.
Vous arrivez sur la page suivante :

Cliquez sur  puis sélectionner membres.
Votre liste de documents dans votre jeu de données apparaît :



Export du jeu de données dans ALMA

Allez dans Admin --> Exécuter un traitement. 
La page suivante apparait :

Choisir le traitement exporter les notices bibliographiques puis cliquez sur 

Une nouvelle fenêtre apparaît : 

Sélectionnez votre jeu de données puis cliquez sur  

La fenêtre suivante apparaît :

 La remplir avec les menus déroulants :
Format physique : XML
Format de sortie : Unimarc Bibliographique
Nombre de notices dans le fichier : unfichier
Puis cliquez sur 

Une fenêtre de synthèse de votre demande apparaît. Si tout est bon, cliquez sur Soumettre  :

Le traitement passe en attente :


Récuperer votre fichier marc.xml
Allez dans Admin --> gérer les exports 
La liste des exports apparaît. Choisir le vôtre et cliquez sur  puis Consulter les fichiers :

Une nouvelle fenêtre apparaît, cliquez sur  puis sur Télécharger :

La fenêtre suivante apparaît. 

Cliquez sur enregistrer le fichier puis ok.
Enregistrez ensuite votre document de manière à le retrouver.

Importer votre fichier dans numahop
Allez dans Gestion unitaire --> Imports

La fenêtre suivante apparaît :

Choisir :
 votre type d’import selon s’il s’agit de monographies ou de périodiques. Pour les monographies (cas le plus courant) : choisir simple
Votre format de fichier : Marc.xml
Votre mapping 
Cliquez sur parcourir pour récupérer votre fichier
Choisir ensuite votre projet
Une fois le projet choisi, choisir le lot où importer les notices

Cliquez sur 
Les notices sont d’abord pré-importées. 

En cas de notices avec plusieurs exemplaires reliés, pensez bien à ignorer l’unité documentaire ne correspondant pas au document à  numériser à l’aide du menu déroulant. 


En cas d’écrasement de notices déjà importées, pensez bien à remplacer l’unité documentaire par celle du fichier trouvé si vous voulez écraser les notices (sinon notez ignorer l’unité doucmentaire) :


Une fois ces vérifications faites, cliquez sur 
