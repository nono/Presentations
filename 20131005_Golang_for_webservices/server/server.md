!SLIDE
# Serveur HTTP en go #

```go
package main

import "net/http"

func HelloWorld(w http.ResponseWriter, req *http.Request) {
	w.Write([]byte("Hello world!"))
}

func main() {
	http.HandleFunc("/", HelloWorld)
	http.ListenAndServe("127.0.0.1:8000", nil)
}
```

!SLIDE
# Un muxer plus évolué : pat #

Installation :

```bash
$ go get github.com/bmizerany/pat
```

Utilisation :

```go
func HelloWorld(w http.ResponseWriter, req *http.Request) {
  var response Response
  response.Hello = req.URL.Query().Get(":name")
  b, err := json.Marshal(response)
  if err != nil {
    http.Error(w, err.Error(), 500)
    return
  }
  w.Write(b)
}

func main() {
  m := pat.New()
  m.Get("/hello/:name", http.HandlerFunc(HelloWorld))
  http.Handle("/", m)
  http.ListenAndServe("127.0.0.1:8000", nil)
}
```
