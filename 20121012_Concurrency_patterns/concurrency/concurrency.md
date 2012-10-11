!SLIDE
# Concurrence #

> Programming as the composition of independently executing processes.

Rob Pike

![Concurrence](images/gophercomplex1.jpg)

!SLIDE
# Parallélisme #

> Programming as the simultaneous execution of (possibly related) computations.

Rob Pike

![Parallélisme](images/gophersimple4.jpg)

!SLIDE
# Concurrence vs. parallélisme #

Concurrence : une question de structure de données

Parallélisme : à propos de l'exécution

![Parallélisme 2](images/gophersimple3.jpg)

!SLIDE
# Goroutine #

```go
func computation(n int) {
    time.Sleep(n * time.Milliseconds)
    fmt.Printf("%s seconds elapsed\n", n)
}
go computation(3)
go computation(1)
go computation(5)
computation(7)
```

!SLIDE
# Channels #

```go
func pingpong(ch chan int) {
    n := <-ch
    fmt.Printf("Received %d\n", n)
    ch <- n
}

func main() {
    ch := make(chan int)
    go pingpong(ch)
    ch <- 42
    <-ch
}
```

!SLIDE
# Buffered Channels #

```go
func pingpong(ch chan int) {
    n := <-ch
    fmt.Printf("Received %d\n", n)
    ch <- n
}

func main() {
    ch := make(chan int, 5)
    go pingpong(ch)
    ch <- 42
    <-ch
}
```

!SLIDE
# Select #

```go
select {
    case chan1 <- nb:
        fmt.Printf("c1")
    case str := <-chan2:
        fmt.Printf("c2")
    case str := <-chan3:
        fmt.Printf("c3")
}
```
