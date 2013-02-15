!SLIDE
# Architecture d'une application web #

![Version simple](server/archi.png)

!SLIDE scale
# Architecture compliquée

![Version compliquée](server/archi_francetv.png)

!SLIDE
# Ruby on Rails #

* Framework MVC
* Écrit en Ruby
* Créé en 2005
* En est à la version 3.2 (bientôt la 4.0)
* Utilisé par twitter, basecamp, github et plein d'autres

!SLIDE
# Django #

* Sorti quasiment en même temps que Rails
* Mais en Python
* Fonctionnement comparable
* Le choix entre Rails et Django est une histoire de goût

!SLIDE
# PHP #

Beaucoup de frameworks, mais pas vraiment de gagnant

* Symfony 2
* Code Igniter
* CakePHP
* Kohana
* Lithium
* Silex

!SLIDE
# Framework MVC ? #

Pour choisir, il faut comprendre  
Et là on a 2 mots compliqués :

1. framework
2. MVC

!SLIDE
# Un framework #

C'est un ensemble composé :

* de bibliothèques (du code)
* des outils
* des conventions
* une philosophie

!SLIDE
# MVC #

C'est un pattern, avec 3 types de classes :

* Modèle (le coeur de l'application)
* Vue (présentation, interface utilisateur)
* Contrôleur (gestion des événements et synchronisation)

!SLIDE
# Mise en application avec Rails #

```sh
$ rails generate scaffold Post title:string body:text 
```

!SLIDE
# Migration #
```ruby
class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.timestamps
    end
  end
end
```

```sh
$ bundle exec rake db:migrate
```

!SLIDE
# Modèle #

```ruby
# app/models/post.rb
class Post < ActiveRecord::Base
  attr_accessible :body, :title
end
```

!SLIDE
# Routeur

```ruby
# config/routes.rb
Blog::Application.routes.draw do
  resources :posts
end
```

!SLIDE small-code
# Contrôleur

```ruby
class PostsController < ApplicationController
  def index
    @posts = Post.all
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @posts }
    end
  end

  def update
    @post = Post.find(params[:id])
    @post.update_attributes(params[:post])
  end

  # [...]
end
```

!SLIDE small-code
# Vue #

```erb
<%# app/views/posts/show.html.erb %>
<p id="notice"><%= notice %></p>

<p>
  <b>Title:</b>
  <%= @post.title %>
</p>

<p>
  <b>Body:</b>
  <%= @post.body %>
</p>
```
