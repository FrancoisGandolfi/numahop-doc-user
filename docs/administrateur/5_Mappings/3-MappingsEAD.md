---
title: Mappings EAD
sidebar_label: Mappings EAD
sidebar_position: 3
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "file-code"]} /> Mappings EAD


# Créer un mapping EAD

### Syntaxe de base

La notation habituelle permet d’accéder à l’information située sur le
niveau le plus bas, en remontant l’arborescence jusqu’à trouver une
valeur (ex : text(\did.physdesc.dimensions))

\root permet d’accéder aux propriétés de l’élément de plus haut niveau
(ex : text(\root.did.physdesc. dimensions))

Préfixer le nom du champ par all: permet de récupérer toutes les valeurs
trouvées dans toute l’arborescence et de créer un champ Dublin Core par
élément trouvé (ex : text(\all:did.physdesc.dimensions))

### Fonctions de base

### Expressions : aide à la saisie

Les éléments les plus utiles sont accessibles via des menus programmés
(clic droit avec la souris dans la zone « Règle » ou « Conditions
d’application »)


### Syntaxe de base - Format EAD
   Élément de menu         | Syntaxe                     | Description                                                                 |
 |-------------------------|-----------------------------|-----------------------------------------------------------------------------|
 | Détection des champs EAD | `\`                         | R / C                                                                      |
 | Détection des sous-champs EAD | `.`                  | R / C                                                                      |
 | all                     | `all:`                      | Toutes les valeurs trouvées dans la branche et crée un champ par élément trouvé |

**Exemple :** R \all:did.physdesc.dimensions


---

### Fonctions de base - Expressions : Aide à la saisie

| Élément de menu      | Syntaxe                              | Description                                                                                     |
|----------------------|--------------------------------------|-------------------------------------------------------------------------------------------------|
| Fonction > normal    | `normal(<champ>)`                    | Valeur de l’attribut « normal » de la balise s’il existe, sinon contenu de la balise.         |
| Fonction > text      | `text(<champ>)`                      | Renvoie les données textuelles de l’objet en supprimant les données de mise en forme.         |
| Fonction transliterate.getFunction | `transliterate.getFunction(<champ>)` | Affiche le libellé de la fonction correspondant au code du champ.                              |

---

### Entête EAD

| Élément de menu               | Syntaxe                                      | Description                                                                                     |
|-------------------------------|----------------------------------------------|-------------------------------------------------------------------------------------------------|
| Entête EAD                    | `\eadheader`                                 | Récupère la balise `<eadheader>`.                                                              |
| Entête EAD > publication      | `\eadheader.filedesc.publicationstmt.publisher.content` | Contenu de `<eadheader> <filedesc> <publicationstmt> <publisher>`.                          |
| Entête EAD > langue           | `\eadheader.profiledesc.langusage.language.content` | Contenu de `<eadheader> <profiledesc> <langusage> <language>`.                                |

---

### Composant (c)

| Élément de menu                     | Syntaxe                     | Description                                                                                     |
|-------------------------------------|-----------------------------|-------------------------------------------------------------------------------------------------|
| Object composant (c)                | `\c`                        | Récupère la balise `<c>`.                                                                       |
| Object composant (c) > identifiant  | `\id`                       | Valeur de l’attribut « id » de la balise `<c>`.                                                 |
| Object composant (c) > relatedmaterial | `text(\relatedmaterial)`  | Contenu de `<relatedmaterial>`.                                                                 |
| Object composant (c) > separatedmaterial | `text(\separatedmaterial)` | Contenu de `<separatedmaterial>`.                                                              |

---

### Composant de 1er niveau

| Élément de menu                     | Syntaxe                     | Description                                                                                     |
|-------------------------------------|-----------------------------|-------------------------------------------------------------------------------------------------|
| Object composant de 1er niveau     | `\root`                     | Récupère la 1ère balise `<c>`.                                                                  |

---

### Description identification (did)

| Élément de menu                     | Syntaxe                                      | Description                                                                                     |
|-------------------------------------|----------------------------------------------|-------------------------------------------------------------------------------------------------|
| Description identification (did)    | `\did`                                       | Récupère la balise `<did>`.                                                                      |
| Description identification (did) > unitid | `\did.unitid.content`                | Contenu de `<did> <unitid>`.                                                                     |
| Description identification (did) > unitid.type | `\did.unitid.type`          | Valeur de l’attribut « type » de la balise `<unitid>`.                                           |
| Description identification (did) > unitdate | `normal(\did.unitdate)`     | Valeur de l’attribut « normal » de la balise `<did> <unitdate>`, sinon contenu de la balise.   |
| Description identification (did) > unittitle | `text(\did.unittitle)`      | Contenu de `<did> <unittitle>`.                                                                  |
| Description identification (did) > title | `\did.unittitle.title.content` | Contenu de `<did> <unittitle> <title>`.                                                          |
| Description identification (did) > language | `\did.langmaterial.language.content` | Contenu de `<did> <langmaterial> <language>`.                                                   |
| Description identification (did) > dimensions | `\did.physdesc.dimensions.content` | Contenu de `<did> <physdesc> <dimensions>`.                                                      |
| Description identification (did) > extent | `\did.physdesc.extent.content` | Contenu de `<did> <physdesc> <extent>`.                                                          |
| Description identification (did) > physfacet | `\did.physdesc.physfacet.content` | Contenu de `<did> <physdesc> <physfacet>`.                                                      |
| Description identification (did) > physfacet.type | `\did.physdesc.physfacet.type` | Valeur de l’attribut « type » de la balise `<physfacet>`.                                       |

---

### Scope and content

| Élément de menu                     | Syntaxe                                      | Description                                                                                     |
|-------------------------------------|----------------------------------------------|-------------------------------------------------------------------------------------------------|
| Scope and content (scopecontent)    | `text(\scopecontent)`                       | Contenu de `<scopecontent>`.                                                                    |
| Scope and content (scopecontent) > corpname | `normal(\scopecontent.p.corpname)` | Valeur de l’attribut « normal » de la balise `<scopecontent> <p> <corpname>`, sinon contenu.   |
| Scope and content (scopecontent) > corpname.role | `\scopecontent.p.corpname.role` | Vérifie si la valeur de l’attribut « role » de la balise `<scopecontent> <p> <corpname>`.      |
| Scope and content (scopecontent) > famname | `normal(\scopecontent.p.famname)` | Valeur de l’attribut « normal » de la balise `<scopecontent> <p> <famname>`, sinon contenu.     |
| Scope and content (scopecontent) > famname.role | `\scopecontent.p.famname.role` | Valeur de l’attribut « role » de la balise `<scopecontent> <p> <famname>`.                     |
| Scope and content (scopecontent) > geogname | `normal(\scopecontent.p.geogname)` | Valeur de l’attribut « normal » de la balise `<scopecontent> <p> <geogname>`, sinon contenu.   |
| Scope and content (scopecontent) > geogname.role | `\scopecontent.p.geogname.role` | Valeur de l’attribut « role » de la balise `<scopecontent> <p> <geogname>`.                   |
| Scope and content (scopecontent) > name | `normal(\scopecontent.p.name)` | Valeur de l’attribut « normal » de la balise `<scopecontent> <p> <name>`, sinon contenu.        |
| Scope and content (scopecontent) > persname | `normal(\scopecontent.p.persname)` | Valeur de l’attribut « normal » de la balise `<scopecontent> <p> <persname>`, sinon contenu.   |
| Scope and content (scopecontent) > persname.role | `\scopecontent.p.persname.role` | Valeur de l’attribut « role » de la balise `<scopecontent> <p> <persname>`.                   |
| Scope and content (scopecontent) > subject | `normal(\scopecontent.p.subject)` | Valeur de l’attribut « normal » de la balise `<scopecontent> <p> <subject>`, sinon contenu.    |

---

### Controlled access headings

| Élément de menu                     | Syntaxe                                      | Description                                                                                     |
|-------------------------------------|----------------------------------------------|-------------------------------------------------------------------------------------------------|
| Controlled access headings (controlaccess) | `text(\controlaccess)`               | Contenu de `<controlaccess>`.                                                                   |
| Controlled access headings (controlaccess) > corpname | `normal(\controlaccess.corpname)` | Valeur de l’attribut « normal » de la balise `<controlaccess> <corpname>`, sinon contenu.       |
| Controlled access headings (controlaccess) > corpname.role | `\controlaccess.corpname.role` | Valeur de l’attribut « role » de la balise `<controlaccess> <corpname>`.                       |
| Controlled access headings (controlaccess) > famname | `normal(\controlaccess.famname)` | Valeur de l’attribut « normal » de la balise `<controlaccess> <famname>`, sinon contenu.       |
| Controlled access headings (controlaccess) > famname.role | `\controlaccess.famname.role` | Valeur de l’attribut « role » de la balise `<controlaccess> <famname>`.                       |
| Controlled access headings (controlaccess) > geogname | `normal(\controlaccess.geogname)` | Valeur de l’attribut « normal » de la balise `<controlaccess> <geogname>`, sinon contenu.      |
| Controlled access headings (controlaccess) > geogname.role | `\controlaccess.geogname.role` | Valeur de l’attribut « role » de la balise `<controlaccess> <geogname>`.                      |
| Controlled access headings (controlaccess) > name | `normal(\controlaccess.name)` | Valeur de l’attribut « normal » de la balise `<controlaccess> <name>`, sinon contenu.           |
| Controlled access headings (controlaccess) > persname | `normal(\controlaccess.persname)` | Valeur de l’attribut « normal » de la balise `<controlaccess> <persname>`, sinon contenu.      |
| Controlled access headings (controlaccess) > persname.role | `\controlaccess.persname.role` | Valeur de l’attribut « role » de la balise `<controlaccess> <persname>`.                      |
| Controlled access headings (controlaccess) > subject | `normal(\controlaccess.subject)` | Valeur de l’attribut « normal » de la balise `<controlaccess> <subject>`, sinon contenu.         |
