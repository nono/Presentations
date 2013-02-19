!SLIDE
# Google AppEngine #

* Faire tourner ses applications sur les serveurs de Google
* Facile à construire
* Facile à maintenir
* Facile à mettre à l'échelle

!SLIDE
# Go et AppEngine #

* Go supporté sur l'AppEngine depuis mai 2011
* Presque toute la bibliothèque standard
* Plus des API spécifiques à AppEngine (Datastore, URL Fetch, Users, etc.)
* Un SDK facile à prendre en main

!SLIDE
# Comment ça marche ? #

* On enregistre des handlers HTTP dans un fichier de conf
* On écrit un package go pour ces handlers
* On exécute dans un contexte AppEngine

!SLIDE
# Le fichier de conf #

```yaml
application: hello-world
version: 1
runtime: go
api_version: go1

handlers:
- url: /.*
  script: _go_app
```

!SLIDE
# Le package #

```go
package hello

import (
    "fmt"
    "net/http"
)

func init() {
    http.HandleFunc("/", handler)
}

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Hello, world!")
}
```

!SLIDE
# Tester en local #

* `dev_appserver.py myapp/`
* Et ça recharge tout seul le code lors des changements !
* https://github.com/icub3d/appenginetesting pour écrire des tests unitaires

!SLIDE
# Pour déployer #

* On enregistre son application sur https://appengine.google.com/
* On complète le fichier de conf avec son _app_id_
* On lance `appcfg.py update myapp`
* Google s'occupe du reste
* On peut voir le résultat sur http://_app_id_.appspot.com/

!SLIDE two_cols
# Utiliser les API spécifiques #

```go
package greeting

import (
    "appengine"
    "appengine/datastore"
    "net/http"
    "time"
)

type Greeting struct {
    Author  string
    Content string
    Date    time.Time
}
```

```go
func init() {
    http.HandleFunc("/", root)
}

func root(w http.ResponseWriter, r *http.Request) {
    c := appengine.NewContext(r)
    q := datastore.NewQuery("Greeting").Limit(10)
    greetings := make([]Greeting, 0, 10)
    if _, err := q.GetAll(c, &greetings); err != nil {
        http.Error(w, err.Error(), 500)
        return
    }
    // Do something with greetings
}
```

!SLIDE
# Avantages #

* Simple, rapide et efficace
* Pas besoin de s'occuper des serveurs

!SLIDE
# Limitations #

* Pas portable
* Requêtes limitées à 60 secondes
* Pas de goroutine en tâche de fond
