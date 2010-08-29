!SLIDE section
# Écrire un gem<br/><br/>Les bonnes pratiques #


!SLIDE
# Organisation des fichiers #

    foo
    |-- bin
    |  `-- foo
    |-- lib
    |   |-- foo
    |   |   `-- bar.rb
    |   `-- foo.rb
    |-- spec
    |   `-- spec_foo.rb
    |-- foo.gemspec
    |-- LICENSE
    `-- README


!SLIDE
# Le fichier gemspec #

    @@@ Ruby
    Gem::Specification.new do |s|
      s.name             = "foo"
      s.version          = "0.0.1"
      s.date             = "2010-08-30"
      s.homepage         = "http://github.com/nono/foo"
      s.authors          = "Bruno Michel"
      s.email            = "bruno.michel@af83.com"
      s.description      = "Foo is a wonderful gem"
      s.files            = Dir["LICENSE", "README", "lib/**/*.rb"]
      s.require_paths    = ["lib"]
      s.rubygems_version = "1.3.7"
      s.add_dependency "quux", "~>1.2.3"
    end


!SLIDE
# Les dépendances #

    @@@ Ruby
    s.add_dependency "quux", "=1.2.3"
    #  => la v1.2.3 et uniquement celle-là

    s.add_dependency "quux", ">=1.2.3"
    #  => La v1.2.3 ou plus récent

    s.add_dependency "quux", "~>1.2.3"
    #  => À partir de v1.2.3 mais avant la v1.3

    s.add_dependency "quux", "~>1.2"
    #  => À partir de v1.2.0 mais avant la v2.0.0
    #  => souvent préférable pour les gems


!SLIDE
# Utiliser un gem en local #

## Construire le gem ##

    $ gem build foo.gemspec

## Installer le gem ##

    $ gem install foo-0.0.1.gem


!SLIDE
# Publier un gem #

1. Se créer un compte sur [rubygems.org](http://rubygems.org/sign_up)
2. gem push foo-0.0.1.gem
3. En parler sur [twitter](http://twitter.com), son [blog](http://dev.af83.com) ou ailleurs


!SLIDE
# Numéroter les versions #

Respecter la norme [Semantic Versioning](http://semver.org/) :

* Numéro de versions de la forme Major.Minor.Patch
* Incrémenter le numéro de patch pour une nouvelle version qui corrige des bugs sans modifier l'API
* Incrémenter le numéro mineur pour de nouvelles fonctionnalités qui ne modifient pas l'API existante
* Incrémenter le numéro majeur quand la compatibilité descandante de l'API n'est pas assurée
* Vous avez le droit de ne pas respecter ces règles avant la version 1.0.0 ;-)
* Tagger chaque version `vX.Y.Z` dans votre dépôt git|hg|svn|autre.


!SLIDE
# Documentation #

## README ##

* Donner les informations utiles : description, auteur(s), licence, comment contribuer, etc.
* [README driven development](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html) ?

## Page de man ##

* Recommandé fortement pour les exécutables
* Peut également servir dans d'autres cas (e.g. API)

## Commentaires ##

* Commenter le code avec [Yard](http://yardoc.org/), [TomDoc](http://tomdoc.org/), [Rdoc](http://rdoc.rubyforge.org/) ou [Rocco](http://rtomayko.github.com/rocco/)


!SLIDE
# Style #

Suivre le [style Ruby](http://github.com/chneukirchen/styleguide/raw/master/RUBY-STYLE). Exemples de règles à respecter :

* Indentations de 2 espaces
* `snake_case` pour les méthodes et variables et `camelCase` pour les classes et modules
* Pas de `return` quand ce n'est pas nécessaire
* Garder les méthodes courtes


!SLIDE
# Pour en savoir plus #

* [Gem Packaging: Best Practices](http://weblog.rubyonrails.org/2009/9/1/gem-packaging-best-practices)
* [Why "require 'rubygems'" Is Wrong](http://tomayko.com/writings/require-rubygems-antipattern)
* [Rubygems good practice](http://yehudakatz.com/2009/07/24/rubygems-good-practice/)
* [Using >= Considered Harmful (or, What’s Wrong With >=)](http://yehudakatz.com/2010/08/21/using-considered-harmful-or-whats-wrong-with/)
* [Using .gemspecs as Intended](http://yehudakatz.com/2010/04/02/using-gemspecs-as-intended/)
* [Gem::Specification Reference ](http://docs.rubygems.org/read/chapter/20)
* [Le retour des pages de man](http://dev.af83.com/unix/le-retour-des-pages-de-man/2010/03/08)
* [Outils de documentation Ruby](http://dev.af83.com/documentation/outils-de-documentation/2010/05/17)

