---
title: Configuration CINES
sidebar_label: Configuration CINES
sidebar_position: 1
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "folder-tree"]} /> Configuration CINES

## Présentation

Cette interface permet de régler les paramétrages du CINES :
- Serveur SFTP
- Plan de classement PAC
- Paramètres Cines: valeurs par défaut
- Codes langues à transposer 

## Renseignements globaux

AlleR dans <Icon icon={["fa", "gear"]} /> **Administration** > **Services externes** >  **Configurations CINES**.

Pour verser au CINES, il convient de renseigner les champs suivants en cliquant sur <Icon icon={["fa", "pen-to-square"]} /> :  

| Libellé                   | Commentaires                                    | Détails  |
|---------------------------|-------------------------------------------------|----------|
| Libellé                   | Nom de la configuration                         |   🔴 Obligatoire        |
| Nom d'utilisateur         | Nom d'utilisateur dans VITAM                    |   🔵 Facultatif       |
| Mot de passe              | Mot de passe d'accès VITAM                      |   🔵 Facultatif      |
| Hôte                      | Adresse du serveur VITAM                        |   🔵 Facultatif       |
| Port                      | Port d'accès au serveur VITAM                   |   🔵 Facultatif       |
| Répertoire de destination | Répertoire de versement dans VITAM              |   🔵 Facultatif      |
| Active                    | Statut de la configuration : active ou inactive |   🔵 Facultatif      |
| Bibliothèque             | Nom de l'établissement versant                  |   🔴 Obligatoire       |


## Plans de classement PAC

Cette section sert à entrer votre Plans de classement dans VITAM.

Vous pouvez soit :
- entrer chaque branche de votre plan de classement manuellement à l'aide de l'icône <Icon icon={["fa", "square-plus"]} />
- charger directement votre PPDI pour implémenter votre plan de classement en le récupérant à l'aide du bouton parcourir.


## Paramètres CINES: valeurs par défaut

Au CINES les champs suivants sont obligatoires lors du versement de vos données :
- Language 	
- Format 	
- Type 	
- Description 	
- Publisher 	
- Sujet 	
- Créateur 	
- Titre 	
- Droit

Vous devez donc associer à chacun de ces champs une valeur par défaut qui sera remplie automatiquement, lors du versement au CINES, si jamais cette information n'était pas renseignée dans la notice bibliographique de l'unité documentaire.


## Codes langues à transposer 

:::danger Pour les instances mutualisées de NumaHOP
Les modifications de code de langue s'appliquent à tous les établissements de votre instance mutualisée.
:::

Les codes de langue au CINES doivent être expérimés dans la norme ISO 639-3.
Dans cette partie, vous pouvez faire un mapping entre votre code de langue utilisé dans NumaHOP pour votre Dublin Core (ex : ISO 639-2) et le code attendu par le CINES exprimé en ISO 639-3. 

Ajouter autant de correspondance que nécessaire à l'aide de l'icône <Icon icon={["fa", "square-plus"]} />

Ce qui donne par exemple :
| Language DC | Code CINES |
|-------------|------------|
| fre         | fra        |