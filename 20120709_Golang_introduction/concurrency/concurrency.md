!SLIDE
# Concurrency #
Programming as the composition of independently executing processes.

!SLIDE
# Parallelism #
Programming as the simultaneous execution of (possibly related) computations.

!SLIDE
# Concurrency vs. parallelism #
One is about structure, one is about execution.

!SLIDE
# Goroutine #

```go
func computation(n int) {
    time.Sleep(n * time.Milliseconds)
    fmt.Printf("%s seconds elapsed\n", n)
}
go computation(1)
go computation(3)
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
# Don't communicate by sharing memory #
# Share memory by communicating #

!SLIDE
# Generator #

```go
func idGenerator() chan int {
    ids := make(chan int)
    go func() {
        id := 0
        for {
            ch <- id
            id++
        }
    }
    return ids
}

ids := idGenerator()
id1 := <-ids
id2 := <-ids
```

!SLIDE
# Select #

```go
select {
    case c1 <- n:
        fmt.Printf("c1")
    case s := <-c2:
        fmt.Printf("c2")
    case s := <-c3:
        fmt.Printf("c3")
}
```

!SLIDE
# Timeout #

```go
timeout := time.After(2 * time.Seconds)
select {
    case n := <-ch:
        fmt.Printf("Received %d", n)
    case <-timeout
        fmr.Printf("Too late")
}
```

!SLIDE
# Goroutines + Channels = <3 #

* No mutex
* No semaphore
* But very powerful
