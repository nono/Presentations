!SLIDE
# Code lisible

* Pas de fonctionnalité compliquée
* => code direct

!SLIDE
# Pas de free

* Ramasse-miettes
* On ne perd pas son temps à libérer la mémoire

!SLIDE
# Une bibliothèque std moderne

* csv, json, xml
* net/http
* text/template & html/template
* time
* et bien plus !

!SLIDE
# Les outils go sont géniaux !

* go run hello.go
* go get github.com/bmizerany/pat
* go test
* gofmt
* etc.

!SLIDE
# godoc

```text
% godoc net/http Handle
PACKAGE

package http
    import "net/http"


FUNCTIONS

func Handle(pattern string, handler Handler)
    Handle registers the handler for the given pattern in the
    DefaultServeMux. The documentation for ServeMux explains how patterns
    are matched.

...
```

!SLIDE
# godoc -src

```text
% godoc -src net/http Handle
// Handle registers the handler for the given pattern.
// If a handler already exists for pattern, Handle panics.
func (mux *ServeMux) Handle(pattern string, handler Handler) {
    mux.mu.Lock()
    defer mux.mu.Unlock()

    if pattern == "" {
        panic("http: invalid pattern " + pattern)
    }
    if handler == nil {
        panic("http: nil handler")
    }
    if mux.m[pattern].explicit {
        panic("http: multiple registrations for " + pattern)
    }

...
```

!SLIDE
# godoc -http=:6060


!SLIDE
# Avantages

* La compilation est très rapide
* La cross-compilation est facile
* le déploiement est aisé (no dependency hell)
