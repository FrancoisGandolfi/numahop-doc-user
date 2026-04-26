---
title: Mappings MARC
sidebar_label: Mappings MARC
sidebar_position: 2
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "file-word"]} /> Mappings MARC

Les fonctions spécifiques sont accessibles dans le menu contextuel de
chaque zone concernée (clic droit avec la souris) :


### Syntaxe de base
   Élément de menu         | Syntaxe                     | Description                                                                                     | Exemple       |
 |-------------------------|-----------------------------|-------------------------------------------------------------------------------------------------|---------------|
 | Détection des champs MARC | `\`                        | Il est possible de récupérer tous les champs d'une zone en remplaçant les chiffres souhaités par "x" | R / C         |
 | Détection des champs MARC | `\200`                     | Récupère le champ `200`.                                                                       |               |
 | Détection des champs MARC | `\6xx`                     | Récupère les champs `6xx`.                                                                      |               |
 | Détection des sous-champs MARC | `$`                     | R / C                                                                                           | `\200$a`      |


### Collections
 | Élément de menu         | Syntaxe                     | Description                                                                                     | Exemple       |
 |-------------------------|-----------------------------|-------------------------------------------------------------------------------------------------|---------------|
 | collectionFilter(code)   | `collectionFilter('a')`     | Filtrage des sous-champs IR                                                                     |               |
 | collectionFilter(code)   | `collectionFilter('d')`     |                                                                                                 |               |
 | collection(champMarc)   | `collection(\410)`          | Met en forme selon la syntaxe utilisée pour les collections par l'ISBD :<br />• `$a` (Titre de la collection) : Début de zone<br />• `$d` (Titre parallèle de la collection) : `=`<br />• `$e` (Complément du titre) : `:`<br />• `$f` (Mention de responsabilité) : `/`<br />• `$h` (Numéro de partie) : `.`<br />• `$i` (Titre de partie) : `,` après `$h` sinon `.`<br />• `$v` (Numérotation de volume) : `;`<br />• `$x` (ISSN de la collection) : `,` | R |

---

### Corporations

 | Élément de menu         | Syntaxe                     | Description                                                                                     | Exemple       |
 |-------------------------|-----------------------------|-------------------------------------------------------------------------------------------------|---------------|
 | corporateFilter(code)    | `corporateFilter('a')`      | Filtrage des sous-champs IR                                                                     |               |
 | corporate(champMarc)     | `corporate(\710)`           | Met en forme selon la syntaxe utilisée pour les collectivités par l'ISBD :<br />• `$a` (Nom) : Début de la zone<br />• `$b` (Subdivisions) : `.`<br />• `$c` (Qualificatif) : `( )`, si plusieurs `$c`, séparés par `;`<br />• `$d` (Numéro) : `( `<br />• `$e` (Lieu) : `;` et `)` après le dernier élément<br />• `$f` (Dates) : `;` après `$d` sinon `( `; après `$e` sinon `( )`<br />• `$4` (Code fonction) : `.` | R |


### Personnes

 | Élément de menu         | Syntaxe                     | Description                                                                                     | Exemple       |
 |-------------------------|-----------------------------|-------------------------------------------------------------------------------------------------|---------------|
 | personFilter(code)      | `personFilter('a')`         | Filtrage des sous-champs IR                                                                     |               |
 | person(champMarc)       | `person(\702)`              | Met en forme selon la syntaxe utilisée pour les personnes par l'ISBD :<br />• `$a` (Nom) : Début de zone<br />• `$b` (Prénom) : `,`<br />• `$c` (Qualificatif) : `)` après `$f` sinon `( `; avant `$f` sinon `( )`<br />• `$d` (Numéro en chiffres romains) : pas de ponctuation<br />• `$f` (Date de naissance - Date de mort) : `)` après `$c` sinon `( `; avant `$c` sinon `( )`<br />• `$D` (Numéro en chiffres arabes) : pas de ponctuation<br />• `$4` (Code fonction) : `.` | R |


### Titres
 | Élément de menu         | Syntaxe                     | Description                                                                                     | Exemple       |
 |-------------------------|-----------------------------|-------------------------------------------------------------------------------------------------|---------------|
 | titleFilter(code)       | `titleFilter('a')`          | Filtrage des sous-champs IR                                                                     |               |
 | title(champMarc)        | `title(\200)`               | Met en forme selon la syntaxe utilisée pour les titres par l'ISBD :<br />• `$a` (Titre propre) : `;`<br />• `$b` (Type de document) : `[ ]`, si plusieurs `$b`, séparés par `;`<br />• `$c` (Titre propre d’un auteur différent) : `.`<br />• `$d` (Titre parallèle) : `=`<br />• `$e` (Complément du titre) : `:`<br />• `$f` (Première mention de responsabilité) : `/`<br />• `$g` (Mention de responsabilité suivante) : `;`<br />• `$h` (Numéro de partie) : `.`<br />• `$i` (Titre de partie) : `,` après `$h` sinon `.`<br />• `$r` (Autres données) : pas de ponctuation<br />• `$7` (Code de l’écriture) : pas de ponctuation | R |

---

### Sous-champs
 | Élément de menu         | Syntaxe                     | Description                                                                                     | Exemple       |
 |-------------------------|-----------------------------|-------------------------------------------------------------------------------------------------|---------------|
 | subfieldsFilter(code)   | `subfieldsFilter('a')`      | Filtrage des sous-champs IR                                                                     |               |
 | subfieldsSeparator(séparateur) | `subfieldsSeparator(', ')` | Change le séparateur par défaut entre les sous-champs IR                                        |               |
 | subfieldsAdd(code, [préfixe], [suffixe]) | `subfieldsAdd('x', ' - ')` | Ajoute des sous-champs non répétables préfixés et suffixés par les valeurs spécifiées          |               |
 | subfieldsAdd(code, [préfixe], [suffixe]) | `subfieldsAdd('z', ' - ', '; ')` |                                                                                                 |               |
 | subfieldsAddGroup(préfixeGroupe, suffixeGroupe, PréfixeOuCode) | `subfieldsAddGroup('(', ')', '; ', 't', ' / ', 'u')` | Ajoute un groupe de sous-champs répétables préfixé et suffixé par les valeurs spécifiées |               |
 | subfields(champMarc)    | `subfields(\6xx)`           | Concatène les sous-champs de la zone en ajoutant `" - "` entre chaque sous-champ                | R             |


### Leader
 | Élément de menu         | Syntaxe                     | Description                                                                                     |
 |-------------------------|-----------------------------|-------------------------------------------------------------------------------------------------|
 | Longueur de la notice (0-4) | `leader.getRecordLength()` |                                                                                                 |
 | Statut de la notice (5) | `leader.getRecordStatus()` |                                                                                                 |
 | Type de notice (6)      | `leader.getTypeOfRecord()` |                                                                                                 |
 | Niveau bibliographique (7) | `leader.getImplDefined1()[0]` |                                                                                                 |
 | Code de niveau hiérarchique (8) | `leader.getImplDefined1()[1]` |                                                                                                 |
 | Longueur de l'indicateur (10) | `leader.getIndicatorCount()` |                                                                                                 |
 | Longueur du code sous-zone (11) | `leader.getSubfieldCodeLength()` |                                                                                                 |
 | Adresse de base des données (12-16) | `leader.getBaseAddressOfData()` |                                                                                                 |
 | Niveau d'encodage (17) | `leader.getImplDefined2()[0]` |                                                                                                 |
 | Forme du catalogage descriptif (18) | `leader.getImplDefined2()[1]` |                                                                                                 |
 | Longueur de la partie "longueur de zone" (20) | `leader.getEntryMap()[0]` |                                                                                                 |
 | Longueur de la partie "position du premier caractère" (21) | `leader.getEntryMap()[1]` |                                                                                                 |
 | Longueur de la partie "partie relative à l'application" (22) | `leader.getEntryMap()[2]` |                                                                                                 |

---

### Autres
 | Élément de menu         | Syntaxe                     | Description                                                                                     | Exemple       |
 |-------------------------|-----------------------------|-------------------------------------------------------------------------------------------------|---------------|
 | exists(record, champMarc, code) | `exists(record, '607')` | Teste l’existence d’un champ et/ou d’un sous-champ MARC dans la notice (autre que celui utilisé dans la règle) | C             |
 | exists(record, champMarc, code) | `exists(record, '607', 'a')` |                                                                                                 |               |
 | datepublication(champMarc) | `datepublication(champMarc)` | Formate la date de publication en ISO 8601 avec la possibilité d’avoir des `XX` pour les chiffres inconnus. Le formatage s’applique au sous-champ `$a` du champ spécifié, positions 9 à 16, en fonction du type de publication (position 8) :<br />• type = `g`, `f`, `b` ou `a` `XXXX/XXXX`<br />• type = `k`, `i`, `h` ou `e` `XXXX|XXXX`<br />• type = `d` ou `c` `XXXX`<br />• type = `j` `XXXX-XX-XX`<br />• type = `u` « s.d. » |               |