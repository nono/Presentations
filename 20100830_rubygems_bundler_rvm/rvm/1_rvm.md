!SLIDE section
# RVM<br/>Ruby Version Manager #


!SLIDE
# Rubygems + bundler ne suffisent pas ? #

* Difficile d'utiliser plusieurs versions de Ruby (1.8 et 1.9 par exemple)
* C'est contraignant de devoir taper `bundle exec` devant toutes ses commandes
* Variante : oublier de taper `bundle exec` devant ses commandes peut conduire à des bugs amusants (mais pas toujours)
* Pas simple d'installer la toute dernière version d'un interpréteur Ruby et de rubygems


!SLIDE
# Commencer avec RVM #

## Installer RVM ##

1. Vérifier que les [pré-requis](http://rvm.beginrescueend.com/rvm/prerequisites/) sont installés
2. Lancer `bash < <( curl http://rvm.beginrescueend.com/releases/rvm-install-head )`
3. Ajouter la ligne `[[ -s "$HOME/.rvm/scripts/rvm" ]] && . "$HOME/.rvm/scripts/rvm"` à son fichier `~/.bashrc` ou `~/.zshrc`

## Installer Ruby 1.8.7 et 1.9.2 ##

Dans un nouveau terminal, taper :

    $ rvm install 1.8.7
    $ rvm install 1.9.2

Utiliser 1.8.7 par défaut :

    $ rvm use --default 1.8.7


!SLIDE
# Utilisation basique #

## Afficher l'aide ##

    $ rvm help
    $ rvm help uninstall

## Lister les interpréteurs installés ##

    $ rvm list

## Passer d'un ruby à l'autre ##

    $ ruby -v
    ruby 1.8.7 (2010-06-23 patchlevel 299) [i686-linux]
    $ rvm use 1.9.2

    info: Using ruby 1.9.2 p0

    info: running hook after_use
    $ ruby -v
    ruby 1.9.2p0 (2010-08-18 revision 29036) [i686-linux]


!SLIDE
# Les gemsets #

## Qu'est-ce qu'un gemset ##

* Un gemset == un ensemble de gems que l'on peut utiliser à un moment donné
* Un gemset dépend d'un interpréteur Ruby
* Par exemple, le gemset `@rails3` pour les projets avec Rails 3
* Par défaut, on utilise le gemset `@default`

## Exemple ##

    $ rvm gemset create rails3
    $ rvm gemset use rails3
    $ rvm use 1.8.7@rails3   # Idem
    $ rvm gemdir
    /home/nono/.rvm/gems/ruby-1.8.7-p302@rails3
    $ gem install rails --pre


!SLIDE
# Les gemsets (bis) #

## Le gemset @global ##

* Il existe aussi un gemset avec des gems utilisables en permanence : `@global`
* Ça sert pour des gems comme `bundler` ou `wirble`

## Exemple ##

    $ rvm gemset use global
    $ gem install bundler wirble
    $ rvm gemset use
    $ bundle -v
    Bundler version 1.0.0


!SLIDE
# Astuces #

## Fichier rvmrc par projet ##

* Un gemset par projet
* Utiliser automatiquement ce gemset quand on travaille sur ce projet

On peut faire ça grâce à un fichier `rvmrc` :

    $ cd projects/foobar
    $ cat .rvmrc
    rvm use 1.9.2@foobar --create"
    rvm gemset import foobar.gems  # Ou bundle install


!SLIDE
# Astuces (bis) #
## Lancer une commande avec Rubies ##

    rvm ruby foobar.rb
    rvm --with-rubies gemsets foobar.rb
    rvm --with-rubies all-gemsets foobar.rb
    rvm 1.8.7,jruby foobar.rb

## Complétion zsh ##

C'est expliqué sur [le devblog](http://dev.af83.com/ruby/whyday-zsh-completion-scripts-rvm-and-bundler/2010/08/19) et sur [RVM Completion](http://rvm.beginrescueend.com/workflow/completion/) ;-)


!SLIDE
# Pour aller plus loin #

* [@wayneeseguin](http://twitter.com/wayneeseguin) et [@Sutto](https://twitter.com/Sutto)
* [Ruby enVironment (Version) Manager - RVM - 1.0.0](http://wayneeseguin.beginrescueend.com/2010/08/22/ruby-environment-version-manager-rvm-1-0-0/)
* [RVM - Improved support for Hudson](http://blog.ninjahideout.com/posts/rvm-improved-support-for-hudson)
* [RVM - System Wide Installs and Capistrano Integration](http://blog.ninjahideout.com/posts/rvm-system-wide-installs-and-capistrano-integration)
* [RVM: seriously?](http://www.lucas-nussbaum.net/blog/?p=550)
* [Conseils pour utiliser Ruby, RVM, Passenger, Rails, Bundler… en développement](http://jeremy.wordpress.com/2010/08/13/ruby-rvm-passenger-rails-bundler-en-developpement/)

