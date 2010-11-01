!SLIDE section
# Bundler #


!SLIDE
# Les problèmes de Rubygems #

* `can't activate rspec-rails (= 1.3.2, runtime) for [], already activated rspec-rails-2.0.0.beta.6`
* Pas possible d'avoir plusieurs versions d'un gem s'il se lance avec un exécutable (rails, rspec; etc.)
* Pas facile de déployer une application en prod avec les gems que sur l'environnement de préprod
* Comment faire pour les versions en cours de développement des gems ?


!SLIDE
# La solution : bundler #
## Version 1.0 ##

La version 1.0 est sortie hier :

## Install ##

    $ gem install bundler


!SLIDE
# Gemfiles #

Bundler utilise deux fichiers :

* `Gemfile`, dans lequel **vous** listez les gems à utiliser
* `Gemfile.lock`, généré par bundler avec la liste des gems et dépendances, et la version précise à utiliser pour chacun

Il est recommandé de versionner les 2 fichiers :

    $ git add Gemfile Gemfile.lock


!SLIDE
# Exemple de Gemfile #

    @@@ Ruby
    source :rubygems

    gem "rails",           "3.0.0.rc2"
    gem "mysql2",          "~>0.1"
    gem "haml",            "~>3.0"
    gem "thin",            "~>1.2"
    gem "thinking-sphinx", ">=2.0.0.rc1", :require => "thinking_sphinx"
    gem "state_machine", :git =>
        'http://github.com/klacointe/state_machine.git'

    gem "ruby-debug", :group => "development", :platform => "ruby_18"

    group :test do
      gem "rspec-rails",    ">=2.0.0.beta.20"
      gem "factory_girl_rails"
    end


!SLIDE
# Les commandes #

## bundle install ##

* Si le fichier `Gemfile.lock` n'existe pas, cherche les infos, calcule les dépendances puis crée le `Gemfile.lock`
* Installe tous les gems listés dans `Gemfile.lock`

## bundle update ##

* Met à jour le `Gemfile.lock`
* Installe tous les gems listés dans `Gemfile.lock`

## Alors, install ou update ? ##

* Par défaut, `bundle install` pour installer des gems
* Sauf quand vous modifiez le `Gemfile` où un `bundle update` sera nécessaire pour prendre en compte la modification


!SLIDE
# Charger bundler<br/>dans son application #

## Cas normal ##

Cela se fait simplement en 3 lignes :

    @@@ Ruby
    require "rubygems"
    require "bundler"
    Bundler.require(:default, :development, :test)

Il existe aussi `Bundler.setup` qui ne charge pas les gems, mais permet de le faire manuellement ensuite.

## Rails 3 ##

    @@@ Ruby
    # config/application.rb
    Bundler.require(:default, Rails.env) if defined?(Bundler)


!SLIDE
# Pour déployer son application #

Ajouter la ligne suivante à `deploy.rb` pour capistrano :

    @@@ Ruby
    require "bundler/capistrano"

À chaque déploiement, elle installera les gems dans `vendor/bundle` avec :

    $ bundle install --deployment

Ne pas oublier de préfixer toutes les commandes par `bundle exec` :

    $ bundle exec rake db:setup


!SLIDE
# Astuces #

## Debug ##

    $ bundle list       # Liste les gems et versions
    $ bundle show thin  # Montre le chemin utilisé pour thin
    $ bundle open thin  # Ouvre ce chemin dans vim

## Utiliser bundler pour un gem ##

Créer un fichier `Gemfile` avec une seule ligne :

    gemspec

Bundler pourra installer les gems en utilisant le fichier gemspec pour connaître les dépendances.


!SLIDE
# Pour aller plus loin #

* [@wycats](https://twitter.com/wycats) et [@carlleche](https://twitter.com/carllerche)
* [man bundle](http://gembundler.com/man/bundle.1.html)
* [Fixing Common Bundler Problems](http://intridea.com/posts/fixing-common-bundler-problems)
* [Some of the Problems Bundler Solves](http://yehudakatz.com/2010/04/12/some-of-the-problems-bundler-solves/)
* [What’s New in Bundler 1.0.0.rc.1](http://yehudakatz.com/2010/07/26/whats-new-in-bundler-1-0-0-rc-1/)

