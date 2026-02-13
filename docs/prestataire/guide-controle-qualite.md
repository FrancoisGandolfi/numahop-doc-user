---
title: Guide pratique du contrôle qualité
sidebar_label: Guide pratique du contrôle qualité
sidebar_position: 7
---

# Guide pratique du contrôle qualité

#### Le contrôle qualité dans NumaHOP

##### Le contrôle qualité dans le workflow NumaHOP

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-1.png"
class="aligncenter wp-image-732 size-full" fetchpriority="high"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-1.png 680w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-1-300x227.png 300w"
sizes="(max-width: 680px) 100vw, 680px" width="680" height="515" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-1.png)

Le contrôle qualité intervient après livraison des fichiers par le
prestataire. NumaHop effectue d’abord une série de contrôles automatisés
en fonction du paramétrage effectué.

Une fois les contrôles automatiques validés, les documents passent en
attente de contrôles manuels. Il est alors possible d’appliquer deux
niveaux de contrôle :

##### Les principe du contrôle qualité

Le contrôle qualité dans NumaHop se fait grâce à la visionneuse
embarquée. Selon les paramétrages choisis, il peut être :

 

D’autre part, le contrôle qualité prévoit l’apposition d’erreurs sur les
pages concernées. Il y a deux types d’erreurs, majeures et mineures. De
la même façon que pour le type de contrôle, le pourcentage d’erreurs
acceptées est indiqué dans les paramétrages. Passé ce pourcentage
d’erreurs, NumaHop proposera de rejeter le document.

 

 

#### Configurer le contrôle qualité

##### Créer une configuration du contrôle qualité

Paramétrer le contrôle qualité a lieu dans le module Administration,
puis l’onglet « Contrôles » de l’encart « Configuration ».

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-2.png"
class="alignnone wp-image-733 size-full" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-2.png 560w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-2-300x142.png 300w"
sizes="(max-width: 560px) 100vw, 560px" width="560" height="265" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-2.png)

Il est possible de créer plusieurs configurations, par exemple selon le
type de documents : un lot de manuscrits pourrait être contrôlé en
intégralité avec un taux d’erreur majeure limité, tandis qu’un contrôle
par échantillonnage pourrait être appliqué pour un lot de monographies
imprimées. Tout dépend des choix de l’établissement.

SI des configurations ont déjà été créées, la liste apparaît sur l’écran
d’accueil des contrôles. Pour en ajouter une, cliquer sur le bouton + :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-3.png"
class="alignnone wp-image-734 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-3.png 550w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-3-300x133.png 300w"
sizes="(max-width: 550px) 100vw, 550px" width="550" height="244" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-3.png)

##### Les différents réglages possibles

Penser à nommer la configuration pour la retrouver facilement.

Les taux d’erreurs

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-4.png"
class="alignnone size-full wp-image-735" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-4.png 685w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-4-300x31.png 300w"
sizes="(max-width: 685px) 100vw, 685px" width="685" height="71" />

C’est un pourcentage qu’il faut rentrer.

Un pourcentage de 20% de taux d’erreurs majeures signifie que pour un
document de 10 pages contenant 3 erreurs majeures (30%) enregistrées,
NumaHop proposera le rejet du document.

Voici les erreurs enregistrées :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-5.png"
class="aligncenter wp-image-736 size-full" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-5.png 511w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-5-300x224.png 300w"
sizes="(max-width: 511px) 100vw, 511px" width="511" height="382" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-5.png)

La méthode et le taux d’échantillonnage  

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-6.png"
class="alignnone size-full wp-image-737" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-6.png 778w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-6-300x24.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-6-768x61.png 768w"
sizes="(max-width: 778px) 100vw, 778px" width="778" height="62" />

Si le contrôle a pour but d’être exhaustif, choisir « pas
d’échantillonnage ».

Si le contrôle n’a pas pour but de s’appliquer à tous les documents mais
seulement à un échantillon, il faut indiquer le taux d’échantillonnage.
C’est un pourcentage.

Il existe 3 méthodes d’échantillonnage. Par exemple, pour un
échantillonnage de 40% sur un lot de 100 documents :

 

Les différents contrôles : activation et blocage

NumaHOP liste ensuite toute une série de contrôles qui sont effectués de
manière automatisée.

Libre à chaque établissement de rendre ces contrôles actifs ou pas. De
la même manière, ces contrôles peuvent être, si actifs, bloquants ou
pas.

Si un contrôle est activé et bloquant, NumaHop va rejeter la livraison
d’un document non conforme, avant même que le contrôle qualité puisse
s’effectuer.

Ci-dessous, exemple de configuration pour un projet de numérisation
courante avec demande de génération d’un PDF océrisé.

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-7.png"
class="alignnone size-full wp-image-738" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-7.png 647w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-7-300x285.png 300w"
sizes="(max-width: 647px) 100vw, 647px" width="647" height="614" />

Une fois la configuration terminée, cliquer sur le bouton « Enregistrer
». <img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-6.png"
class="alignnone size-full wp-image-667" loading="lazy" decoding="async"
width="219" height="50" />

##### Sélectionner une configuration pour un lot

Lors de la création d’un lot, un encart est dédié aux configurations de
contrôle.

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-8.png"
class="aligncenter wp-image-739" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-8.png 513w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-8-300x121.png 300w"
sizes="(max-width: 388px) 100vw, 388px" width="388" height="156" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-8.png)

Dans l’entrée « Configuration contrôles », choisir la configuration
souhaitée. Une liste déroulante permet de retrouver toutes les
configurations enregistrées.

Rentrer ensuite les informations de compression, résolution minimale et
profil colorimétrique. Ces données sont surtout indispensables si les
contrôles correspondants sont activés et bloquants.

##### Le contrôle qualité dans le workflow

Le contrôle qualité peut être divisé en deux étapes dans le
[workflow](https://www.numahop.fr/2022/11/07/guide-du-workflow/). Il est
possible en effet de créer une étape intermédiaire de pré-validation ou
de pré-rejet et une étape de validation finale.

Pour cela, ouvrir le menu « Administration », et cliquer sur « Modèles
de Workflow » dans l’encart « Workflow » :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-9.png"
class="aligncenter wp-image-740 size-full" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-9.png 343w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-9-290x300.png 290w"
sizes="(max-width: 343px) 100vw, 343px" width="343" height="355" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-9.png)

Si plusieurs workflows ont été créés, ils sont rangés par ordre
alphabétique. Cliquer sur le modèle à assigner à un lot pour l’afficher
et le modifier :

 

Les détails du workflow s’affichent à droite de l’écran. Il suffit de
cliquer dans un des cadres pour entrer en mode édition et pouvoir
modifier le workflow.

Le contrôle qualité concerne ces 4 entrées :

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-11.png"
class="size-full wp-image-742 aligncenter" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-11.png 396w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-11-300x137.png 300w"
sizes="(max-width: 396px) 100vw, 396px" width="396" height="181" />

Cliquer sur pré-rejet du document ou pré-validation du document. Cela
ouvre une nouvelle fenêtre :

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-12.png"
class="alignnone size-full wp-image-743" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-12.png 800w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-12-300x108.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-12-768x277.png 768w"
sizes="(max-width: 800px) 100vw, 800px" width="800" height="289" />

Choisir de rentre cette étape requise ou non, et assigner l’étape au
groupe responsable correspondant. Cliquer sur OK. Si l’étape est
requise, elle sera de couleur orange. Si l’étape est non requise, elle
sera de couleur bleue.

Cliquer sur Enregistrer quand les modifications sont faites.

Il faudra penser à sélectionner le bon workflow pendant la création du
lot.

 

#### Repérer les documents à contrôler

##### Depuis le tableau de bord

Dans l’onglet « documents à contrôler ou en cours de contrôle » :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-13.png"
class="aligncenter wp-image-744 size-full" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-13.png 693w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-13-300x136.png 300w"
sizes="(max-width: 693px) 100vw, 693px" width="693" height="314" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-13.png)

Cliquer sur la petite flèche de chaque unité documentaire à droite pour
ouvrir l’interface de contrôle.

##### Dans le menu "Contrôles"

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-14.png"
class="alignnone wp-image-745 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-14.png 693w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-14-300x208.png 300w"
sizes="(max-width: 693px) 100vw, 693px" width="693" height="481" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-14.png)

#### L'interface de contrôle

##### Présentation de l'interface de contrôle

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-15.png"
class="alignnone wp-image-746 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-15.png 1184w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-15-300x167.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-15-1024x570.png 1024w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-15-768x427.png 768w"
sizes="(max-width: 1184px) 100vw, 1184px" width="1184" height="659" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-15.png)

##### La visionneuse

Par défaut, la visionneuse s’ouvre en mode Mosaïque. Cet affichage est
utile pour avoir une vue d’ensemble sur le document.

Pour contrôler dans le détail un document, cliquer sur « Contrôles
pages » :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-16.png"
class="aligncenter wp-image-747 size-full" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-16.png 863w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-16-300x131.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-16-768x336.png 768w"
sizes="(max-width: 863px) 100vw, 863px" width="863" height="378" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-16.png)

Cela ouvre la vue simple page :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-17.png"
class="alignnone wp-image-748 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-17.png 857w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-17-300x136.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-17-768x349.png 768w"
sizes="(max-width: 857px) 100vw, 857px" width="857" height="389" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-17.png)

Cela ouvre la vue simple page :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-18.png"
class="alignnone wp-image-749 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-18.png 866w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-18-300x198.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-18-768x508.png 768w"
sizes="(max-width: 866px) 100vw, 866px" width="866" height="573" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-18.png)

En bas de la visionneuse défile le bandeau avec toutes les pages du
document dans l’ordre. La page active est encadrée de bleue. Il est
possible dans la visionneuse d’afficher simple page, ou double page ou
encore de revenir à la mosaïque en cliquant sur la vignette de la barre
de commande supérieure de la visionneuse : <img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-19.png"
class="alignnone size-full wp-image-750" loading="lazy" decoding="async"
width="250" height="74" />

 

#### Signaler une erreur

Dans la zone de contrôle de la page, dès repérage d’une erreur, cliquer
dans l’encart « Erreurs » et choisir dans la liste déroulante l’erreur
correspondante :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-20.png"
class="alignnone wp-image-751 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-20.png 753w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-20-300x158.png 300w"
sizes="(max-width: 753px) 100vw, 753px" width="753" height="397" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-20.png)

L’erreur se reporte dans l’encart, et la page se marque d’une coche
rouge :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-21.png"
class="alignnone wp-image-752 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-21.png 783w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-21-300x182.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-21-768x467.png 768w"
sizes="(max-width: 783px) 100vw, 783px" width="783" height="476" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-21.png)

Procéder ainsi pour toutes les pages du document. Dans la visionneuse,
un code couleur identifie le statut des pages :

Attention : si l’on fait défiler les pages dans la visionneuse,
celles-ci se marquent automatiquement d’une coche verte.

#### Valider ou rejeter un document

Une fois toutes les pages du document ou de l’échantillon contrôlées,
cliquer sur « Revenir au contrôle global », tout en bas de la zone de
contrôle du document :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-22.png"
class="alignnone wp-image-753 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-22.png 784w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-22-300x127.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-22-768x326.png 768w"
sizes="(max-width: 784px) 100vw, 784px" width="784" height="333" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-22.png)

La visionneuse revient alors au mode mosaïque. Dans l’encart général des
contrôles, le nombre d’erreurs est reporté. Le mode mosaïque permet de
visualiser toutes les pages en erreur, marquées d’une coche rouge.

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-23.png"
class="alignnone wp-image-754 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-23.png 783w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-23-300x166.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-23-768x425.png 768w"
sizes="(max-width: 783px) 100vw, 783px" width="783" height="433" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-23.png)

Si le nombre d’erreurs dépasse le seuil acceptable, NumaHop affiche une
pop-up d’information :

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-24.png"
class="alignnone size-full wp-image-755 aligncenter" loading="lazy"
decoding="async" width="182" height="204" />

Selon ces informations et le nombre d’erreurs, accepter ou rejeter le
document :

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-25.png"
class="size-full wp-image-756 aligncenter" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-25.png 421w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-25-300x106.png 300w"
sizes="(max-width: 421px) 100vw, 421px" width="421" height="149" />

Au fur et à mesure que les documents sont traités, ils avancent dans le
workflow et disparaissent de l’onglet « Documents à contrôler ou en
cours de contrôle » du tableau de bord.

Dans le cas où le contrôle qualité est effectué en deux étapes avec
pré-rejet/pré-validation, les documents parviennent sur le tableau de
bord des personnes figurant dans le groupe de workflow assigné à la
validation définitive des documents.
