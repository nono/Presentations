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
# Declarations #

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
# Functions #

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
# Control statements #

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
# Array / Slice #

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
Import (
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
# Error handling #

```go
f, err := os.Open(name)
if err != nil {
    return err
}
if d, err := f.Stat(); err != nil {
    return err
}
doSomething(f, d)
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

!SLIDE
# Methods #

```go
type Point struct {
    x float64
    y float64
}

func (start *Point) Distance(stop *Point) float64 {
    sqr := math.Pow(stop.x-start.x, 2)
    sqr += math.Pow(stop.y-start.y, 2)
    return math.Sqrt(sqr)
}

p1 := &Point{2.1, 51.0}
p2 := &Point{2.4, 42.0}
dst := p1.Distance(p2)
```

