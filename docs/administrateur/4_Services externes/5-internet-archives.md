---
title: Configuration Internet Archive
sidebar_label: Configuration Internet Archive
sidebar_position: 5
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "boxes-stacked"]} /> Configuration Internet Archive

## Présentation

Cette page permet de configurer la diffusion automatique vers Internet Archive.

:::info Pré-requis
Avant de configurer NumaHOP, réalisez ces étapes sur Internet Archive :
- Créer un compte sur Internet Archive
- Téléverser 50 documents sur votre compte
- Demander la création d'une collection auprès des administrateurs
- Activer la diffusion vers Internet Archive dans le workflow NumaHOP
:::

## Étapes de configuration

### Configuration de la liaison vers Internet Archive

Allez dans <Icon icon={["fa", "gear"]} /> **Administration** > **Configurations Internet Archive**.  

Cliquez sur <Icon icon={["fa", "plus"]} /> pour créer une nouvelle configuration.

**Renseignez les informations suivantes :**

| **Libellé** | **Commentaires** | **Détails** |
|-------------|------------------|-------------|
| Libellé | Nom de votre bibliothèque numérique | 🔴 Obligatoire |
| Clé d'accès S3 | Clé d'accès de votre compte Internet Archive (voir astuce) | 🔵 Facultatif |
| Clé secrète S3 | Clé secrète de votre compte Internet Archive (voir astuce) | 🔵 Facultatif |
| Active | oui/non | 🔵 Facultatif |
| Bibliothèque | Établissement concerné par le dépôt | 🔴 Obligatoire |

:::tip Récupération des clés S3
Connectez-vous à Internet Archive puis allez sur : [https://archive.org/account/s3.php](https://archive.org/account/s3.php)
:::

### Configuration des collections

Ajoutez vos collections Internet Archive via le bouton <Icon icon={["fa", "plus"]} />.  
Sélectionnez la collection au niveau du projet, lot ou unité documentaire une fois la configuration réalisée.

### Ajout de champs personnalisés

Pour exporter des champs personnalisés vers Internet Archive :  
Allez dans <Icon icon={["fa", "gear"]} /> **Administration** > **Configuration** > **Types de propriété personnalisés** > <Icon icon={["fa", "plus"]} />.

*Exemple : Ajouter le champ "Format" s'il n'existe pas sur Internet Archive.*

### Diffusion des documents

**Diffusion automatique** : Chaque nuit, un cron lance la diffusion des documents en attente vers Internet Archive.


**Diffusion manuelle** :
  - Lancez un export manuel vers Internet Archive depuis votre unité documentaire
  - Une page s’ouvre pour modifier les métadonnées si nécessaire.
  - Cliquez sur **Enregistrer les données du formulaire**, puis sur **Exporter vers Internet Archive** si des modifications ont été apportées. Sinon, cliquez directement sur **Exporter vers Internet Archive**


### Résultat de la diffusion

Une fois le document diffusé sur Internet Archive, l’onglet **Diffusion** de chaque unité documentaire est mis à jour. Vous pouvez récupérer :
  - Le lien du document sur Internet Archive.
  - L’URL ARK.
  - L’historique de diffusion.

