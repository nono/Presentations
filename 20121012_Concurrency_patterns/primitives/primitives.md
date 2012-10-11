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

