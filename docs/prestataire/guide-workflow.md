---
title: Guide du workflow
sidebar_label: Guide du workflow
sidebar_position: 6
---

# Guide du workflow

#### Le déroulé d'un projet dans NumaHOP

Un projet correspond à un ensemble de lots réunis dans une cohérence.

Exemple de projet : une reprise de données, des projets ponctuels de
numérisation en interne, ou une année de numérisation courante (par
exemple « Numérisation 2022 »).

Il peut contenir un ou plusieurs lots. Un lot est un ensemble de
documents eux aussi regroupés dans une cohérence.

Exemple de lot : 36 manuscrits anciens ; un fonds d’archives ; 45
périodiques reliés ; 300 photos.

Un lot peut être découpé en trains. Cela permet notamment de livrer les
documents par paquets sur NumaHOP.

Exemple de train : Au lieu de livrer les 27 000 pages des 45 périodiques
d’un coup, le lot sera divisé en 3 trains : PER 1 à PER 15, PER 16 à PER
30 et PER 31 à PER 45.

Cela permet d’effectuer les tâches au fur et à mesure, et de planifier
le travail en le découpant.

Enfin, le lot contient des unités documentaires. Une UD, c’est
l’association d’informations identitaires (libellé, cote, rattachement
au projet et au lot), d’une notice, de fichiers images, et
éventuellement d’un constat d’état.

NumaHOP fonctionne avec des workflows, dans lesquels chaque étape de la
chaîne de traitement est reliée à un groupe d’utilisateurs.

Le workflow s’applique au lot, et donc à tous les trains et UD du lot.

Un lot ne peut donc pas, par exemple, contenir des UD qu’il faut
archiver au CINES et d’autres non. Il ne peut pas non plus contenir des
UD pour lesquelles il faut faire un constat d’état et d’autres non.
Toutes les UD du lot seront traitées dans la même chaîne, seront
contrôlées de la même façon, et seront diffusées au même endroit.

##### Qu'est-ce qu'un workflow ?

Une chaîne d’actions qui se répartissent du début à la fin d’un projet.
Il s’applique au lot, et à toutes les UD du lot.

Le workflow comporte toutes les étapes d’un projet de numérisation en
partant de son initialisation jusqu’à sa clôture, en passant par les
constats d’état, la livraison des fichiers, le contrôle qualité, la
validation des documents et des notices puis l’archivage et la diffusion
des documents.

Chaque étape est reliée à un groupe utilisateurs.

Le workflow reflète la manière de travailler de l’établissement. Il est
possible de créer plusieurs workflows, pour s’adapter aux spécificités
d’un projet, ou à la typologie de documents.

#### L'administration des workflows

 

 

 

Elle comprend deux volets :

Dans le menu « Administration », Encart « Worflow » :

##### La gestion des groupes utilisateurs

Chaque étape du workflow devant être reliée à un groupe  
d’utilisateurs, il convient de créer ces groupes et d’y associer les  
utilisateurs concernés.

Il peut y avoir autant de groupes que d’étapes dans le  
workflow, si chaque étape incombe à des personnes différentes. C’est le
plus  
simple, mais ce n’est pas une obligation.

Cliquer sur « Gestion des groupes » affiche la  
liste des groupes de workflow existants. Cliquer sur un groupe pour
afficher  
ses détails et le modifier. Cliquer sur le bouton + pour en créer un.

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-2.png"
class="alignnone wp-image-663 size-full" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-2.png 507w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-2-300x249.png 300w"
sizes="(max-width: 507px) 100vw, 507px" width="507" height="421" />](https://www.numahop.fr/wp-content/uploads/2022/11/workflow-2.png)

Dans l’encart qui s’affiche, nommer le groupe utilisateurs
(obligatoire), ajouter une description (facultatif), et indiquer la
bibliothèque de rattachement :

En-dessous apparaît l’encart des noms des utilisateurs.

Attention, seuls les utilisateurs ayant un compte NumaHOP apparaîtront
dans la liste. Si un usager n’y figure pas, il faudra d’abord lui créer
un compte utilisateur.

Cliquer dans la barre « Commencez à taper… » pour faire apparaître la
liste déroulante des utilisateurs enregistrés. Sélectionner les
personnes devant figurer dans le groupe. Le nom s’implémente dans
l’encart : 

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-5.png"
class="alignnone wp-image-666 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-5.png 791w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-5-300x47.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-5-768x119.png 768w"
sizes="(max-width: 791px) 100vw, 791px" width="791" height="123" />

 

Ajouter les utilisateurs ainsi de suite puis cliquer sur « Enregistrer
».

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-6.png"
class="alignnone size-full wp-image-667" loading="lazy" decoding="async"
width="219" height="50" />

Une fois le groupe créé, il apparaît dans la liste des groupes de
workflow trouvés, classés par ordre alphabétique.

 

##### La création de modèles de workflow

Cette entrée se présente de la même manière que les autres : la liste à
gauche (si des modèles ont déjà été créés), et les détails à droite
quand on clique sur un modèle.

La liste est rangée par ordre alphabétique, et un bouton + dans la barre
de menu permet d’en créer un.

Cliquer sur un modèle de workflow affiche ses détails, et permet
d’entrer en mode édition pour le modifier.

Il est possible de créer plusieurs workflows, selon les projets, ou
encore la typologie de documents.

Par exemple, une reprise de données d’un passif ayant déjà été archivé
au CINES n’aura pas besoin d’intégrer dans son workflow l’archivage.
Cette étape sera donc rendue « non requise ».

Certains projets peuvent requérir un contrôle qualité en deux étapes
(pré-rejet et pré-validation, puis validation finale).

D’autre part, le workflow par défaut comporte toutes les étapes prévues
par NumaHOP, dont la diffusion Omeka ou Internet Archive ; des étapes
peut-être non pertinentes pour certains établissements.

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-7.png"
class="alignnone wp-image-668 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-7.png 855w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-7-300x141.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-7-768x360.png 768w"
sizes="(max-width: 855px) 100vw, 855px" width="855" height="401" />](https://www.numahop.fr/wp-content/uploads/2022/11/workflow-7.png)

#### Créer un workflow

Appuyer sur le bouton + sur l’interface des modèles de workflow.

Remplir les données d’usage : nom, description et bibliothèque. Choisir
de rendre actif ou non le workflow.

 

 

 

##### Créer un nouveau workflow

 

 

 

 

Un modèle de workflow est affichéci-contre, avec toutes les étapes sous
forme de logigramme.

En vert : l’étape d’initialisation,

En bleu : les étapes non requises,

En orange : les étapes requises. La croix dans ces cases indique qu’il
manque des informations à renseigner,

En gris : les étapes automatiques réalisées par NumaHOP,

En rouge : l’étape finale.

Pour paramétrer le workflow, on peut intervenir sur les cases bleues et
orange.

##### Renseigner les étapes obligatoires

Il s’agit des 4 étapes en orange dans le modèle qui s’affiche par
défaut, comportant une croix. Elles sont obligatoires et forcément
requises :

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-10.png"
class="alignnone size-full wp-image-671" loading="lazy" decoding="async"
width="159" height="67" />

Il s’agit des étapes suivantes :        

Cliquer sur une étape, par exemple, « Livraison des documents
numérisés ». Une fenêtre s’ouvre :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-11.png"
class="alignnone wp-image-672 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-11.png 819w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-11-300x115.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-11-768x295.png 768w"
sizes="(max-width: 819px) 100vw, 819px" width="819" height="315" />](https://www.numahop.fr/wp-content/uploads/2022/11/workflow-11.png)

Indiquer le groupe responsable et cliquer sur OK.

On voit que l’étape est validée par la coche : <img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-12.png"
class="alignnone size-full wp-image-673" loading="lazy" decoding="async"
width="151" height="72" />

Procéder de même pour les autres étapes.

##### Personnaliser son workflow

Le reste des étapes est en bleu, donc des étapes non requises par
défaut. Mais si elles sont requises dans le circuit tel que décidé par
l’établissement, il est possible de les rendre obligatoires.

Pour cela, cliquer sur l’étape concernée. Par exemple, la réalisation et
la validation du constat d’état par la bibliothèque.

Dans la fenêtre qui s’ouvre, choisir le groupe responsable dans la liste
déroulante, et sélectionner « étape requise » dans la liste déroulante
associée au type d’étape.

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-13.png"
class="alignnone wp-image-674 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-13.png 819w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-13-300x114.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-13-768x293.png 768w"
sizes="(max-width: 819px) 100vw, 819px" width="819" height="312" />](https://www.numahop.fr/wp-content/uploads/2022/11/workflow-13.png)

Cliquer sur OK pour enregistrer. L’étape passe en orange avec une
coche :<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-14.png"
class="size-full wp-image-675 aligncenter" loading="lazy"
decoding="async" width="157" height="83" />

Procéder ainsi pour toutes les étapes concernées.

Une fois le workflow paramétré, cliquer sur Enregistrer.

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-6.png"
class="alignnone size-full wp-image-667" loading="lazy" decoding="async"
width="219" height="50" />

#### Le workflow dans un projet et un lot

Le workflow s’applique au lot. C’est dans la création de celui-ci que le
workflow sera choisi (voir « [créer un
lot](https://www.numahop.fr/2022/10/17/creer-un-lot/)« ) :

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-15.png"
class="alignnone wp-image-676 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-15.png 709w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-15-300x214.png 300w"
sizes="(max-width: 709px) 100vw, 709px" width="709" height="505" />

Cela signifie que toutes les Unités Documentaires de ce lot auront le
même workflow.

#### Démarrer le workflow

Avant de commencer un lot, ne pas oublier de démarrer le workflow.

Pour cela, dans le menu « Projets », cliquer sur Projets :

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-16.png"
class="alignnone wp-image-677 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-16.png 281w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-16-277x300.png 277w"
sizes="(max-width: 281px) 100vw, 281px" width="281" height="304" />

La liste des projets en cours s’affiche. Cliquer sur le projet concerné
par le lot pour lequel il faut démarrer le workflow :

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-17.png"
class="alignnone wp-image-678 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-17.png 488w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-17-300x170.png 300w"
sizes="(max-width: 488px) 100vw, 488px" width="488" height="276" />

Les détails du projet s’affichent à droite :

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-18.png"
class="alignnone wp-image-679 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-18.png 1218w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-18-300x155.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-18-1024x529.png 1024w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-18-768x397.png 768w"
sizes="(max-width: 1218px) 100vw, 1218px" width="1218" height="629" />

Cliquer sur le bouton « détails » en haut à droite.

C’est par défaut la liste de toutes les unités documentaires du lot qui
s’affiche.

Cliquer sur l’onglet Lots dans la barre de menu pour afficher les lots :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-19.png"
class="alignnone wp-image-680 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-19.png 859w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-19-300x175.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-19-768x449.png 768w"
sizes="(max-width: 859px) 100vw, 859px" width="859" height="502" />](https://www.numahop.fr/wp-content/uploads/2022/11/workflow-19.png)

La liste des lots du projet apparaît.

Repérer le lot pour lequel démarrer le workflow et cliquer sur le bouton
« démarrer le workflow à droite » :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-20.png"
class="aligncenter wp-image-681 size-full" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-20.png 818w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-20-300x123.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-20-768x315.png 768w"
sizes="(max-width: 818px) 100vw, 818px" width="818" height="336" />](https://www.numahop.fr/wp-content/uploads/2022/11/workflow-20.png)

La fenêtre suivante s’ouvre, cliquer sur « Confirmer » :  [<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-21.png"
class="alignnone wp-image-682" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-21.png 556w, https://www.numahop.fr/wp-content/uploads/2022/11/workflow-21-300x93.png 300w"
sizes="(max-width: 488px) 100vw, 488px" width="488" height="151" />](https://www.numahop.fr/wp-content/uploads/2022/11/workflow-21.png)
