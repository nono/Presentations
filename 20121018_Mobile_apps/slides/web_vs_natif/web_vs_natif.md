!SLIDE
# Que choisir ? #

* Application native
* Application web
* Hybride
* ?

```text
Quand TEA s'est lancé sur ce projet, le premier choix qui a du être fait :

Quel choix avons-nous fait ? Le suspense est à son comble !
```

!SLIDE emphasis
# Application web #

!SLIDE emphasis
## Fonctionnalités (presque) égales ##

```text
Deuxième question qu'on s'est posé : est ce que ce qu'on veut faire, c'est possible ?

Oui, presque
```

!SLIDE
# Aujourd'hui #

* Géolocalisation
* Mode hors ligne
* Bases de données
* Accès aux fichiers
* …

```text
Aujourd'hui, un certain nombre de fonctionnalité est amené par HTML5 :
...

Mises ensemble, ces fonctionnalités permettent de faire des choses vraiment sympa
```

!SLIDE
# Aujourd'hui #

* ~~Notifications~~
* ~~Contacts~~
* ~~Calendrier~~
* …

```text
Il faut être réaliste, aujourd'hui, encore bcp de choses sont impossibles :
- fonctionnalités "logicielles"(notif, calendar...)
- tout ce qui est physique (vibreur, batterie, led, ...)

Il faut donc réfléchir aux fonctionnalités dont on a besoin, si on peut pas, autant arrêter tout de suite et passer au natif.
```

!SLIDE
# Demain #

* Notifications
* Contacts
* Calendrier
* …

* http://www.w3.org/2009/dap/
* http://tux-pla.net/mb8

```text
Heureusement, le HTML5 et ses API, c'est du WIP.
Pas un mais 2 groupes de travails qui sont dessus : w3c, whatwg (haha).

Possible en 2013 ou en 2022 ? En tout cas, ça avance.
```

!SLIDE emphasis
## Développement (presque) plus facile ##

```text
Une fois qu'on est fixé sur le choix d'une appli web, on peut se lancer dans le dev.

On a vu qu'on ne peut pas (encore) avoir toutes les fonctionnalités dans une appli web. Par contre, au niveau du développement, le web a un réel avantage par rapport au natif - avec cependant ces quelques inconvénients.
```

!SLIDE
# Natif #

* **Android (Java)**
* **iOS (Objective-C)**
* Windows Phone
* Blackberry, Symbian

```text
Le GROS pb du natif : on développe l'application autant de fois qu'on veut toucher de plateformes

Chaque plateforme va avoir son propre langage, propre environnement de dev :
..

=> il faut donc décider en fonction temps/budget/compétences qu'on a ce qu'on va pouvoir faire

Attention, les parts de marchés sont bien différentes en France et aux US par ex.
France : iOS = 60%, Android = 40% les autres - de 5%
```

!SLIDE
# Web #
* HTML5
* JavaScript
* CSS
* Langage serveur (Ruby, Python, PHP...)

```text
Là, gros avantage pour appli web : langage connu (même si nouveau) et qui marche partout => on développe une seule fois

Ça marche partout mais tt de même des problèmes : HTML5 évolue tt le temps et donc certaines fonctionnalités très récente ne vont pas marcher sur tous les navigateurs.
```

!SLIDE
# Hybride #

* Un mélange des deux mondes
* Mais pas toujours le meilleur

```text
Phonegap et co. utilisent les WebViews
Mais, depuis iOS 5.1, celles-ci ne permettent plus la persistence de localStorage et WebSQL
C'était rédibitoire pour nous

Source : http://www.sencha.com/blog/html5-scorecard-the-new-ipad-and-ios-5-1/
```

!SLIDE emphasis
## Environnement (vraiment) plus contrôlé ##

```text
Une fois qu'on a développé son application, on va chercher à la déployer.

Là encore : approche très différentes entre natif et web. Côté natif, les stores permettent de donner une visibilité à son application. Mais ce n'est pas sans un revers de médaille.
```

!SLIDE
# Natif #
* Concurrence
* Censure
* Incertitude

```text
Natif => prison dorée
- concurrence : Apple censure une application qui contient le mot Android dans sa description. Et quand on est face à des mastodontes comme Apple et Google, il est difficile de certifier qu'on ne sera pas un jour concurrent de l'une ou l'autre de leurs activités...
- censure :

le contenu : une application dictionnaire doit enlever les mots osés : seins, cul...

les images : on ne doit pas voir de peau, ni de maillots de bains...
- incertitude : pas parce qu'une appli X passe aujourd'hui qu'elle ne peut pas être retirée du store qques mois plus tard (parce qu'elle est devenue concurrente par ex)
=> difficilement acceptable pour une entreprise

En revanche, dans le cas d'une appli monétisée, l'avantage est que l'infrastructure est déjà en place => plus facile de vendre - même si une commission est prise à chaque fois...
```

!SLIDE
# Web #
* Universel
* Ouverture
* Contrôle

http://www.mozilla.org/apps/

```text
TODO : Présenter le market place : décentralisé, blablabla.

L'utilisateur peut installer une application comme sur un mobile : un raccourci peut lui permettre d'accéder direct à l'appli.
Le market place est à l'image de ce que chrome peut déjà faire - mais alternative plus ouverte

Si appli monétisée, Apple ne va pas prendre un pourcentage sur la vente de l'appli mais il va falloir imaginer un autre modèle de paiement :
inscription, abonnement. Infrastrucure clé en main n'est pas là, il faut s'en charger et ça a un coût.
```

!SLIDE emphasis
## Évolution (vraiment) plus rapide ##

```text
Une fois l'application dispo sur le store, il faut penser à son cycle de vie : elle va forcément évoluer dans le tps, gagner en fonctionnalité...
Le natif et le web n'ont pas les mêmes implications.
```

!SLIDE
# Natif #

* Durée de vie limitée
* Mise à jour longues et incertaines
* Pull par l'utilisateur

```text
En natif, la durée de vie de l'appli limité à celle de l'OS. Ca change tous les 6 mois, 1 an, 2 ans. Est ce que l'appli est compatible avec le nouvel iphone 10 ? Avec le nouvel SDK Android ?

Les MAJ sont incertaines car - comme abordé précédemment - pas sur de passer la validation.

Enfin, il faut prendre en compte que sur un app store, c'est l'utilisateur qui maj ses applications - et qu'il peut donc ne jamais le faire. Pas forcément un problème mais y penser.
```

!SLIDE
# Web #

* Durée de vie ~~limitée~~ illimitée
* Mise à jour ~~longues et~~ ~~incertaines~~ immédiates
* ~~Pull par~~ Push à l'utilisateur

```text
Avec un appli web, la durée de vie est celle qu'on veut bien lui donner : arrondissons à illimité.

Les MAJ sont immédiates, il n'y a qu'a mettre le code en ligne. Attention, risque aussi de mise à jour du navigateur. Sur des fonctionnalités super récentes, une maj du navigateur peut faire planter l'appli : Bruno pourra vous en reparler !

Comme les MAJ sont pushées l'utilisateur aura immédiatement les nouvelles fonctionnalités sans interventions de sa part
```
