---
title: Configuration Internet Archives
sidebar_label: Configuration Internet Archives
sidebar_position: 5
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "boxes-stacked"]} /> Configuration Internet Archives

Configuration de la diffusion vers Internet Archive

**Objectif** : Configurer la diffusion automatique vers Internet Archive.

---

### Pré-requis

- Création d’un compte sur Internet Archive.
- Uploader 50 documents sur votre compte.
- Demander la création d’une collection auprès des administrateurs d’Internet Archive.
- Dans NumaHOP, activer la diffusion vers Internet Archive dans le workflow.

---

### Étapes de configuration

1. **Accéder à la page de configuration**
   Pour configurer la diffusion des fichiers sur Internet Archive :
   - Allez dans **Administration**, puis dans **Configurations Internet Archive**.
   - Cliquez sur le bouton pour créer une nouvelle configuration.

2. **Remplir les informations de configuration**
   Renseignez les champs suivants :
   - **Libellé** : Le nom de votre bibliothèque numérique.
   - **Clé d’accès S3** : La clé d’accès de connexion à votre compte Internet Archive. À récupérer après vous être connecté à votre compte IA.
   - **Clé secrète S3** : La clé secrète de connexion à votre compte. À récupérer après vous être connecté à votre compte IA.
   - **Active** : Oui.
   - **Bibliothèque** : La bibliothèque concernée par la livraison.
   - **Collections Internet Archive** : Ajoutez toutes vos collections.

3. **Sélectionner les collections**
   Une fois la configuration enregistrée, vous pouvez sélectionner la collection sur Internet Archive au niveau du projet, du lot ou de l’unité documentaire.

---

### Ajout des champs personnalisés

Pour ajouter des champs personnalisés afin qu’ils soient exportés vers Internet Archive :
- Allez dans **Administration > Configuration > Types de propriété personnalisés**.
- Cliquez sur **+** pour ajouter un nouveau champ personnalisé.

**Exemple** : Si le champ *Format* n’existe pas dans Internet Archive, ajoutez-le dans les champs personnalisés pour qu’il apparaisse dans les métadonnées de la bibliothèque numérique.

---

### Diffusion des documents

- **Diffusion automatique** : Chaque nuit, un cron lance la diffusion des documents en attente vers Internet Archive.
- **Diffusion manuelle** :
  - Lancez un export manuel vers Internet Archive.
  - Une page s’ouvre pour modifier les métadonnées si nécessaire.
  - Cliquez sur **Enregistrer les données du formulaire**, puis sur **Exporter vers Internet Archive** si des modifications ont été apportées. Sinon, cliquez directement sur **Exporter vers Internet Archive**.

---

### Résultat de la diffusion

Une fois le document diffusé sur Internet Archive :
- L’onglet **Diffusion** de chaque unité documentaire est mis à jour.
- Vous pouvez récupérer :
  - Le lien du document sur Internet Archive.
  - L’URL ARK.
  - L’historique de diffusion.
