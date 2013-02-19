!SLIDE
# Hello World #

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, 世界")
}
```

!SLIDE two_cols
# Déclarations #

```go
var a int
var b bool
a = 15
b = false
```

```go
a := 15
b := false
```

!SLIDE
# Fonctions #

```go
func hello(who string) string {
    return fmt.Sprintf("Hello %s", who)
}

func fibo(a, b int) (int, int) {
    a, b = a+b, a
    return a, b
}

incr := func(n int) int {
    return n+1
}
```

!SLIDE
# Structures de contrôle #

```go
if x > y {
    return x
} else {
    return y
}
const nb = 10
for i := 0; i < nb; i++ {
    fmt.Printf("Iteration n°%d\n", i)
}
```

!SLIDE
# Tableaux et Slices #

```go
var array [10]int
var slice []int
list := []string{"a", "b", "c", "d", "e", "f"}
other := append(list[0:2], list[3:5]...)
for k, v := range other {
    fmt.Printf("%d -> %s\n", k, v)
}
// 0 -> a
// 1 -> b
// 2 -> d
// 3 -> e
```

!SLIDE
# Maps #

```go
data := map[string]string{
    "foo": "bar",
    "hello": "world",
}
for k, v := range data {
    fmt.Printf("%s -> %s\n", k, v)
}
// hello -> world
// foo -> bar
```

!SLIDE two_cols
# Packages #

```go
package even

func Even(i int) bool {
    return i%2 == 0
}

func odd(i int) bool {
    return i%2 == 1
}

// Even is exported
```

```go
import (
    "./even"
    "fmt"
    "os"
)

os.Open(filename)
fmt.Printf("Hello")
even.Even(4)
// Doesn't work:
// even.odd(3)
```

!SLIDE
# Gestion des erreurs #

```go
f, err := os.Open(name)
if err != nil {
    return err
}
if _, err := f.Stat(); err != nil {
    return err
}
doSomething(f)
```

!SLIDE
# Defer #

```go
func foobar(name string) error {
    f, err := os.Open(name)
    if err != nil {
        return err
    }
    defer f.Close()
    fmt.Printf("%v", f)
    return nil
}
```
