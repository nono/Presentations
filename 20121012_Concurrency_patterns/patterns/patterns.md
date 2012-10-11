!SLIDE gopher
![talks](images/pkg.png)
# Génerateur #

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

!SLIDE gopher
![talks](images/run.png)
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

!SLIDE gopher
![talks](images/doc.png)
# Tickers #

```go
ticker := time.NewTicker(50 * time.Millisecond)
go func() {
    for t := range ticker.C {
        fmt.Println("Tick at", t)
    }
}()

time.Sleep(150 * time.Millisecond)
ticker.Stop()
```

!SLIDE gopher
![talks](images/project.png)
# Worker #

```go
func worker(in <-chan *Work,
            out chan<- *Work) {
   for w := range in {
      w.z = w.x * w.y
      Sleep(w.z)
      out <- w
   }
}
```

!SLIDE gopher
![talks](images/talks.png)
# Load balancer #

```go
func Run() {
   in  := make(chan *Work)
   out := make(chan *Work)
   for i := 0; i < NumWorkers; i++ {
       go worker(in, out)
   }
   go sendLotsOfWork(in)
   receiveLotsOfResults(out)
}
```
