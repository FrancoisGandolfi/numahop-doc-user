---
sidebar_position: 2
title: Migration 
sidebar_label: 1. Migration
description: Export et transfert des métadonnées d’identification des documents physiques depuis les SID vers le SAN dédié à la numérisation.
---

import DocCardList from '@theme/DocCardList';

## Le prérequis du signalement

Quand bien même cette documentation ne s’adresserait qu’à un public familier du contexte bibliothéconomique, il conviendrait pourtant de souligner le **rôle crucial que jouent, dans la chaine de traitement informatisée, les systèmes d’information documentaire**.

**On désigne par _signalement_ la description détaillée d'un document physique permettant de l'identifier**. Il voit la création d’un ensemble d’informations structurées, les métadonnées, dont le format doit répondre à des standards internationaux formalisés, auxquels s’ajoutent un ensemble de bonnes pratiques définies à l’échelle nationale.
- le **standard MARC** (_Machine-Readable Cataloging_), et ses variantes officielles françaises **UNIMARC** et **INTERMARC**, est dédié au catalogage des documents imprimés, et produit dans l’interface de catalogage local ALMA, ou collectif WINIBW ;
- le **standard EAD** (_Encoded Archival Description_) et son application nationale dictée par un **« guide des bonnes pratiques »**, est dédié au catalogage des documents d’archives et manuscrits, et produit dans l’interface de catalogage local LIGEO, ou collectif CALAMES.

<div style={{ 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  gap: '1.5rem', 
  flexWrap: 'wrap' 
}}>
  <a href="https://documentation.abes.fr/sudoc/" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://documentation.abes.fr/sudoc/accueilgm/img/logo-gm.png"
      alt="Sudoc"
      style={{ height: '80px', objectFit: 'contain' }}
    />
  </a>

    <a href="https://www.sudoc.abes.fr/cbs/" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://abes.fr/icone-sudoc-logo/"
      alt="Sudoc ABES"
      style={{ height: '80px', objectFit: 'contain' }}
    />
  </a>

    <a href="https://campus-condorcet.alma.exlibrisgroup.com/ng/login?" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://library.tulane.edu/sites/default/files/2021-06/Alma%20centered%403x.png"
      alt="Alma"
      style={{ height: '80px', objectFit: 'contain' }}
    />
  </a>

  <a href="https://www.ead-bibliotheque.fr/" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://abes.fr/icone-ead-2/"
      alt="EAD"
      style={{ height: '80px', objectFit: 'contain' }}
    />
  </a>

    <a href="https://calames.abes.fr/pub/" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://documentation.abes.fr/aidecalames/accueil/materialize/img/icone-calames-logo.png"
      alt="Calames"
      style={{ height: '80px', objectFit: 'contain' }}
    />
  </a>

  <a href="https://www.humatheque-condorcet.fr/fr/collections-et-archives/archives" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://pbs.twimg.com/profile_images/1600059880420921347/d5xxey4C_400x400.jpg"
      alt="Ligeo Archives"
      style={{ height: '80px', objectFit: 'contain' }}
    />
  </a>
</div>


Les métadonnées descriptives constituent des **notices bibliographiques**, qui regroupent ainsi les informations relatives à l’identification, aux caractéristiques physiques, et au contenu intellectuel des documents. Les métadonnées alignées avec des référentiels externes et avec des fichiers d’autorités, sont utiles certes à la recherche dans les catalogues, mais également à l’exploitation informatique des documents originaux. 

:::caution
<p>Ni NUMAHOP ni OMEKA-S ne sont conçus comme des outils de catalogage ou de signalement . Il n’existe pas d'_interfaçage_ réciproque entre les SID et les SAE et CMS déployés à l’Humathèque Condorcet, et **toujours les catalogues feront foi quant à l’état matériel et au traitement intellectuel des documents originaux**.</p>

<details>
<summary>⚠️ Contre exemple déconseillé</summary>
<p>La numérisation du [Fonds Henry Viollet](https://www.bulac.fr/le-fonds-henry-viollet) (BULAC) qui s’est inscrite dans le cadre du projet de recherche [EpiPOM](https://cermi.cnrs.fr/epipom/), Epigraphie du Proche-Orient médiéval (COLLEX-PERSEE, septembre 2021-août 2022), est un exemple rare d’un signalement effectué directement dans NUMAHOP.</p>
<p>Le choix d’une telle procédure a fait l’objet d’une communication orale lors des Journées NUMAHOP/OMEKA de novembre 2024 par Martina MASSULLO : l’équipe du projet, composée de chercheurs dépourvus de compétences en documentation, n’était pas en mesure d’assurer un signalement conforme aux standards de catalogage, et NumaHop a servi d’outil collaboratif pour renseigner des champs DUBLIN CORE prédéfinis.</p>
<p>Ce contexte n’a pas lieu d’être en bibliothèque de recherche.</p>
</details>
:::

## Granularité & identifiants

:::danger
Les reproductions numériques, qu'elles soient destinées à la diffusion ou à l'archivage pérenne, hériteront des métadonnées préalablement créées dans les systèmes d'information documentaires : il convient donc d’aboutir à un signalement complet, du moins suffisamment abouti, avant l’initialisation de la chaine de traitement informatisé, au risque d’entrainer des **incohérences irréversibles entre les différentes plateformes de diffusion et de stockage**.
:::

Si le signalement des documents originaux destinés à la numérisation est essentiel, c'est qu'il conditionne en grande partie deux éléments fondamentaux pour le circuit de numérisation et la diffusion des documents numériques:
- la définition de l'**unité documentaire**, qui peut être decorrelée de l'**unité de communication** qui est celle du document physique. L'_unité documentaire_ désigne le plus petit élément d'un ensemble, et doit correspondre par conséquent au plus bas niveau de description documentaire possible, ou souhaitable ;
- la définition de l'**identifiant de la reproduction numérique**, qui peut être signifiant (souvent basé sur la cote), ou non signifiant (en adoptant la forme d'un **identifiant pérenne**).
  
:::tip
Du fait de la constitution spéficique et de la diversité de ses fonds, le **format des identifiants des reproductions numériques** utilisé à l'Humathèque Condorcet est signifiant et comprend:
- un préfixe par défaut pour l'établissement "HC", suivi d'un tiret bas (_underscore_);
- l'acronyme de l'établissement ou du laboratoire de provenance, en majuscule, suivi d'un trait d'union ;
- éventuellement l'acronyme de la bibliothèque ou du centre de documentation de provenance, suivi d'un trait d'union ;
- la cote du document elle-même, dont les parties composantes peuvent être séparées par des traits d'union ;
- le séquençage incrémental des vues, sur autant que caractères que necessaire en fonction de la volumétrie.

Soit à titre d'exemple pour le fonds d'archives de Gaston Paris:  **HC_EPHE-BMF-4PAR-001_0001.JP2**, où EPHE est l'établissement de provenance, BMF la bibliothèque de provenance, 4PAR la cote du fonds, 001 le numéro du du dossier, et 0001 le numéro de la vue. Ici, **l'unité documentaire imposée pa le signalement est donc le dossier d'archive**.
:::

<details>
<summary>📖 Bibliographie selective</summary>
<p>BERMES, Emmanuelle, « La structure des documents numériques : la granularité des collections numériques », CLAERR, Thibault, WESTEEL, Isabelle, 2011, p. 289.</p>
<p>Pour les documents physiques, ou "analogiques", Emmanuelle Bermès distingue bien les unités logiques ou intellectuelles des unités physiques : elle identifie les problématiques certes similaires, mais bien plus complexes, pour les documents numériques.</p>
</details>

<details>
<summary>💡 Identifiant pérenne</summary>
<a href="https://doranum.fr/identifiants-perennes-pid/identifiants-perennes-fiche-synthetique_10_13143_7gw1-b340/" target="_blank" rel="noopener noreferrer">
      <img 
        src="https://avatars.githubusercontent.com/u/61335027?s=280&v=4"
        alt="PID"
        width="120"
        style={{ float: 'right', margin: '0 0 1rem 1rem' }}
      />
    </a>
<p>Un identifiant pérenne est une chaîne de caractères alphanumériques qui désigne une ressource indépendamment de son emplacement. L’identifiant pérenne a généralement vocation à l’identification fiable des productions numériques et concourent à leur découverte.</p>
<p>Pour les reproduction numériques, l'identifiant le plus utilisé est l'ARK (Archival Resource Key): il contient une partie immuable attribuée à un établissement (le NAAN _Name Assigning Authority Number_ ou _Numéro d'autorité nommante_, soit 40358 pour le Campus Condorcet), et une partie variable qui désigne le nom de l'objet.</p>
<p>Les identifiants ARK ne sont pas encore employés dans la Bibliothèque numérique.</p>
</details>

## Migration des métadonnées documentaires dans NumaHop

Documents contractuels et, fixer les objectifs de valorisation dans un pgd préparatoire aux améliorations techniques La migration entraine le gel des métadonnées dans le système d’information d’origine est important pour garantir l'intégrité des données d'origine dans les entrepôts d’archivages pérennes, dans les entrepôts de stockage, et sur les plateformes de visualisation.
cctp 
pgd 
•	Projet
•	Utilisateurs et groupes
•	Worflow

<details>
<summary>💡 CCTP & PGD</summary>
<p>Le cahier des clauses techniques particulières (CCTP) est un document contractuel regroupant et détaillant les travaux ou prestations spécifiques à réaliser dans le cadre d’un marché public. Le Service des entrées et de la conservation a la charge de la rédaction du CCTP.</p>
<p>Sur les CCTP propres à la numérisation en bibliothèque, voir [MOCELLIN, Catherine, « Rédiger un cahier des charges de numérisation », dans CLAERR, T., WESTEEL, I., 2010 [2017], p. 89](https://books.openedition.org/pressesenssib/432)</p>
<p>Le [plan de gestion des données](https://doranum.fr/plan-gestion-donnees-dmp/) (PGD), ou data management plan (DMP), est un document de gestion structuré et évolutif qui synthétise les éléments relatifs aux jeux de données d’un projet de recherche, en en préparant leur partage, leur réutilisation et leur pérennisation. Le portail OPIDOR de l’Institut de l'Information Scientifique et Technique du CNRS (INIST-CNRS) propose un outil d’aide à l’élaboration de plans de gestion de données [DMP OPIDOR](https://dmp.opidor.fr/).</p>
<p>Le Département du soutien à la recherche est compétent en matière de plan de gestion de données.</p>
</details>