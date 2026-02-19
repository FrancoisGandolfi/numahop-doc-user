---
title: Tableau de bord
sidebar_label: Tableau de bord
sidebar_position: 2
---

import Icon from '@site/src/components/Icon';

# Tableau de bord <Icon icon={["fa", "chalkboard-user"]} />

Le logo NumaHOP situé en haut à droite lpermet d'acceder directement au tableau de bord (_Dashbord_).
Il présente à l’utilisateur connecté les **actions à effectuer** et les **données de l'insatnce**.

- les **actions à effectuer** et pour lesquelles il est habilité : elles sont affichées automatiquement en fonction des contrôles réalisés et des étapes du
  workflow ;
- les **indicateurs** préalablement organisés par l'utilisateur, qui définit les **_widgets_** de son propre tableau de bord.

## Actions

Les actions apparaissent uniquement si elles existent. Par défaut, les actions sont listées en indiquant le nombre de documents accessibles à l’utilisateur
connecté et sont regroupées par étape de workflow. En cliquant sur un des bandeaux d’étape, celui-ci se déplie et affiche les éléments concernés.

## _Widgets_

### Ajouter un _widget_

Les widgets sont paramétrables pour chaque utilisateur, par l’utilisateur lui-même afin que chacun puisse bénéficier des informations qu’il juge pertinentes. Ils n'impactent donc pas le tableau de bord des autres utilisateurs.

La personalisation des widgets du tableau de bord se fait grâce au bouton le bouton <Icon icon={["fa", "pen-to-square"]} /> **Editer** situé en haut à droite de l’écran d’accueil. Plusieurs actions sont possibles.

- ajouter un _widget_ avec l'icône <Icon icon={["fa", "plus"]} /> ;
- sauvegarder les modifications avec l'icone <Icon icon={["fa", "floppy-disk"]} /> ;
- annuler les modifications avec l'icone <Icon icon={["fa", "left-long"]} /> ;

Le widget à intégrer s’implémente dans le tableau de bord.

- l'icone <Icon icon={["fa", "arrows-up-down-left-right"]} /> permet de déplacer le _widget_ sur la grille ;
- l'icone <Icon icon={["fa", "x"]} /> permet de supprimer un _widget_ du tableau de bord.

:::tip
Selon les habilitations de l’utilisateur dans le workflow, certains _widgets_ seront plus utiles que d’autres. Par exemple, "Espace disque disponible" pour un pilote des projets, "Activité des contrôles" pour un contrôleur qualité.
::::

### Paramétrer un _widget_

Pour indiquer les données à afficher, le parametrage du _widget_ s'effectue depuis l'icone <Icon icon={["fa", "gear"]} />. Le modal propose différents champs à renseigner selon les données voulues.

- renommer le _widget_ ;
- choisir la bibliothèque concernée (_liste déroulante_);
- selectionner un projet, un lot, ou un train (_liste déroulante_);
- définir le statut de l'élément selectionné (_liste déroulante_);
- le nombre de jours à partir desquels recuperer des données.

### _Widgets_ disponibles

| **Widget**                          | Description                                                              | Paramétrages                                                                                                                                                                                      | Commentaires                                                   |
| :----------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Horloge**                        | Affichage de l’heure et de la date en temps réel.                        | Format d’affichage (24h/12h)                                                                                                                                                                      | Widget toujours visible en haut de l’interface.                |
| **Activité des projets**           | Dernières activités sur les projets (création, modification, statut).  | Titre : Nom du projet - Bibliothèque (selon autorisation) - Statuts (à afficher, colonne masquée si un seul statut) - Délai : Depuis x jours (filtre)                                             | Permet un suivi rapide des projets actifs ou en retard.        |
| **Activité des trains**            | Dernières activités sur les trains (progression, blocages, validations).| - Titre : Nom du train - Bibliothèque (selon autorisation) - Projet (selon autorisation) - Statuts (colonne masquée si un seul statut) - Délai : Depuis x jours (filtre)                          | Utile pour visualiser l’avancement des trains de livraison.    |
| **Activité des livraisons**        | Dernières activités sur les livraisons (en cours, terminées, en erreur).| - Titre : Nom de la livraison - Bibliothèque (selon autorisation) - Projet (selon autorisation) - Lot (selon autorisation) - Statuts (colonne masquée si un seul statut) - Délai : Depuis x jours | Permet de suivre les livraisons critiques ou en retard.        |
| **Activités des UD**               | Dernières activités sur les unités documentaires.                        | - Titre : Nom de l’UD - Bibliothèque (selon autorisation) - Projet (selon autorisation) - Lot (selon autorisation) - Statuts (colonne masquée si un seul statut) - Délai : Depuis x jours         | Suivi des modifications ou validations des UD.                 |
| **UD par statut**                  | Nombre d’unités documentaires par statut.                                | - Titre : Libellé du widget - Format : Anneau, camembert, histogramme, liste - Projet (selon autorisation) - Lot (selon autorisation) - Etape de workflow (si applicable)                         | Visualisation synthétique de la répartition des UD par statut. |
| **Unités documentaires**          | Liste des unités documentaires (filtre possible).                        | - Titre : Nom ou identifiant de l’UD - Projet (selon autorisation)                                                                                                                                | Permet une recherche ou un export des UD.                      |
| **UD archivées/diffusées**         | Liste des UD archivées ou diffusées, avec filtre sur les erreurs.        | - Titre : Nom de l’UD - Type : Archivée/Diffusée - En erreur : Oui/Non - Délai : Depuis x jours                                                                                                   | Suivi des UD finalisées ou en échec.                           |
| **Délai de contrôle restant**      | Délai restant pour le contrôle des livraisons.                           | - Titre : Nom de la livraison - Bibliothèque (selon autorisation) - Projet (selon autorisation) - Lot (selon autorisation) - Livraison (selon autorisation)                                       | Alertes visuelles pour les contrôles urgents.                  |
| **Détails d’un projet**            | Liste des documents de contrôle d’un projet.                             | - Titre : Nom du projet - Projet (obligatoire)                                                                                                                                                    | Accès direct aux documents associés à un projet.               |
| **Espace disque disponible**       | Espace disque utilisé/disponible par bibliothèque.                       | - Titre : Libellé du widget - Format : Camembert, histogramme, etc. - Bibliothèque (obligatoire)                                                                                                  | Surveillance de l’espace de stockage.                          |
| **Décompte des utilisateurs**      | Nombre d’utilisateurs par bibliothèque.                                  | - Titre : Libellé du widget - Format : Anneau, camembert, histogramme, liste - Bibliothèque (obligatoire)                                                                                         | Statistiques d’utilisation par bibliothèque.                   |
| **Activité des contrôles**         | Dernières unités documentaires contrôlées.                               | - Titre : Nom de l’UD contrôlée - Bibliothèque (selon autorisation) - Projet (selon autorisation) - Lot (selon autorisation) - Statut du document - Depuis : x jours                              | Suivi des contrôles récents et de leur statut.                 |
| **Contrôle des livraisons échantillonnées** | Contrôle des livraisons échantillonnées.                         | - Titre : Nom de la livraison - Bibliothèque (selon autorisation) - Projet (selon autorisation) - Lot (selon autorisation) - Depuis : x jours                                                     | Permet de cibler les livraisons à contrôler en priorité.       |
