!SLIDE
## De quoi parle-t-on ? ##

* Identité
* Authentification
* Autorisation

!SLIDE
## Les preuves d'authentification ##

* Ce que je sais (password)
* Ce que je possède (carte à puce)
* Ce que je suis (biométrie)
* Ce que je sais faire (signature)

!SLIDE
## Les gems Ruby ##

    +----------+----------+----------------------+--------------+
    |   Gem    | Identité |   Authentification   | Autorisation |
    +----------+----------+----------------------+--------------+
    | Devise   | Oui      | mot de passe, tokens |              |
    | Cancan   |          |                      | Oui          |
    | Omniauth |          | Oui, par stratégies  |              |
    +----------+----------+----------------------+--------------+

!SLIDE
## Exemple d'application sinatra 1/2 ##

```ruby
require 'sinatra'
require 'omniauth'
require 'omniauth-linuxfr'

use Rack::Session::Cookie
use OmniAuth::Builder do
  provider :linuxfr, ENV['LINUXFR_KEY'], ENV['LINUXFR_SECRET']
end
```

!SLIDE
## Exemple d'application sinatra 2/2 ##

```ruby
get '/' do
  '<a href="/auth/linuxfr">Se connecter</a>'
end

get '/auth/linuxfr/callback' do
  auth = request.env['omniauth.auth']
  User.find_or_create_by_email(auth['email'])
end
```

!SLIDE
## Les stratégies d'authentification ##

* Les génériques : Developer, Identity
* Par protocole : LDAP, OpenID, OAuth et OAuth2 (abstraites)
* Par service : Twitter, Facebook, Google, Github, LinuxFr.org et une vingtaine d'autres

!SLIDE
## Utiliser Omniauth + Devise ##

* Devise 1.5 prend en charge Omniauth 1.0
* https://github.com/plataformatec/devise/wiki/OmniAuth:-Overview

!SLIDE
## Questions ? ##

Slides disponibles sur https://github.com/nono/Presentations
