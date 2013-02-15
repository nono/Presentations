!SLIDE
# Un navigateur #

* C'est un logiciel
* Peut-être très simple comme très avancé
* Il fait principalement une chose

Prendre l'adresse d'un document et faire son rendu pour que l'utilisateur
puisse interagir avec.

!SLIDE
# D'autres navigateurs #

* FirefoxOS
* Lecteurs audio pour les aveugles
* Interfaces pour les Télévisions
* Écrans géants (abribus par exemple)

!SLIDE
# L'adresse d'un document #

Par exemple : http://www.francetvinfo.fr/en-direct/

C'est ce que l'on appelle une URL, composée de :

* Un protocole (http ici)
* Un nom de domaine (www.francetvinfo.fr)
* Un chemin (/en-direct/)
* etc.

!SLIDE small-code
# Demander le document #

```http
GET /en-direct/ HTTP/1.1
Host: www.francetvinfo.fr
User-Agent: Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.56 Safari/537.17
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: fr-FR,fr;q=0.8,en-US;q=0.6,en;q=0.4

HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 14778
Date: Fri, 15 Feb 2013 19:33:40 GMT

[...]
```

!SLIDE small-code
# Exemple de réponse en HTML #

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Une page HTML</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <section id="main" role="main">
      <h1>Un titre</h1>
      <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
      <img src="image.png" alt="Une image" />
    </section>
    <script src="application.js"></script>
  </body>
</html>
```

!SLIDE
# Construire le DOM #

* Parser le contenu HTML
* Construire un arbre avec des _nodes_
* Aller chercher les ressources associées

!SLIDE
# Afficher la page #

* À partir du DOM, on construit un 2ème arbre
* Dedans, on y place les informations pour le rendu
* Puis on utilise cet arbre pour remplir un buffer
* Et le buffer part vers la carte graphique pour être affiché à l'écran

En vrai, c'est plus compliqué mais le principe reste le même ;-)

!SLIDE small-code
# La magie des CSS #

```css
body {
	font-family: 'Yanone Kaffeesatz', sans-serif;
	letter-spacing: .2em;
}

#main {
	padding:.2em .5em;
}

a.shadow:hover {
	text-shadow: 0 0 .5em white, 0 0 1em white;
}
```

!SLIDE
# À l'internaute de jouer #

L'utilisateur peut :

* voir le document
* cliquer sur les liens
* sélectionner du texte
* remplir des formulaires
* lire une vidéo
* changer le niveau de zoom

!SLIDE
# Interagir en JavaScript #

D'autres comportements ne sont pas natifs dans les navigateurs et doivent être
codés en JavaScript, comme :

* Demander confirmation avant une action
* Ajouter ou supprimer des champs à un formulaire
* Proposer de l'autocomplétion

!SLIDE
# jQuery #

```js
$('.remove_tag').click(function() {
    $(this).parents('form').hide();
});

$('a.hit_counter').each(function() {
    this.href = '/redirect/' + $(this).data('hit');
});
```

!SLIDE img-right
![Raptor](browser/raptor.png)
# Plugins jQuery #

jQuery possède plein de plugins.

Exemple : Raptor est un WYSIWYG html5

```js
$('#element-to-edit').editor();
```
