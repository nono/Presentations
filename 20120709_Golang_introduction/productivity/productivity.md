!SLIDE
# Readable code

* No complex feature
* => straightforward code

!SLIDE
# No free

* Garbage collection
* Don't lose your time to free memory

!SLIDE
# Interfaces

* A way to specify the behaviour of an object
* A set of methods that must be implemented
* No need to say that an objet _implements_ an interface

!SLIDE
# Interfaces

```go
// crypto/cypher
type Block interface {
    BlockSize() int
    Encrypt(src, dst []byte)
    Decrypt(src, dst []byte)
}
```

!SLIDE
# Interfaces

* Very powerful
* Don't fix too soon a type hierarchy

!SLIDE
# A modern standard library

* csv, json, xml
* net/http
* text/template & html/template
* time
* and many more

!SLIDE
# Go tools are awesome!

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
# Avantages

* Compilation is fast
* Easy cross-compilation
* Deployment is easy (no dependency hell)

