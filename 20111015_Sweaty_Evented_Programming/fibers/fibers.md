!SLIDE
## Remember this? ##

```js
fs.open('results', 'w', function(err, fd) {
  fs.write(fd, results, function(err, written) {
    fs.close(fd, function(err) {
        done();
    });
  });
});
```

!SLIDE
## How to refactor it? ##

Extract functions and give them a name

```js
var writeResults = function(err, fd) {
  fs.write(fd, results, function(err, written) {
    fs.close(fd, function(err) {
      done();
    });
  });
}

fs.open('results', 'w', writeResults);
```

!SLIDE
## How to refactor it? ##

```js
var closeAndDone = function(err, written) {
  fs.close(fd, function(err) {       // fd?
    done();
  });
});
var writeResults = function(err, fd) {
  fs.write(fd, results, closeAndDone);
}
fs.open('results', 'w', writeResults);
```

!SLIDE
## How to refactor it? ##

```js
var closeAndDone = function(fd) {
  return function(err, written) {
    fs.close(fd, function(err) {
      done();
    });
  }
});
var writeResults = function(err, fd) {
  fs.write(fd, results, closeAndDone(fd));
}
fs.open('results', 'w', writeResults);
```

!SLIDE
## How to refactor it? ##

So, it's possible but can be complicated

!SLIDE
## With GoWithTheFlow.js? ##
```js
Flow().seq(function(next) {
  fs.open('results', 'w', next);
}).seq(function(next, err, fd) {
    fs.write(fd, results, next);
}).seq(function(next, err, written) {
    fs.close(fd, next);   // fd?
}).seq(function(next, err) {
    done();
});
```

!SLIDE
## With GoWithTheFlow.js? ##
```js
Flow().seq(function(next) {
  fs.open('results', 'w', next);
}).seq(function(next, err, fd) {
  fs.write(fd, results, function(err, written) {
    next(err, fd);
  });
}).seq(function(next, err, fd) {
    fs.close(fd, next);
}).seq(function(next, err) {
    done();
});
```

!SLIDE
# I want a more easy and direct way #

!SLIDE
# Ruby 1.9 Fibers #

```ruby
fib = Fiber.new do
  x, y = 0, 1
  loop do
    Fiber.yield y
    x, y = y, x+y
  end
end
20.times { puts fib.resume }
```

!SLIDE
## Back to EventMachine ##

```ruby
def async_fetch(url)
  f = Fiber.current
  http = EM::HttpRequest.new(url).get :timeout => 10 
  http.callback { f.resume(http) }
  http.errback { f.resume(http) }
  return Fiber.yield
end
```

!SLIDE
## Back to EventMachine ##

```ruby
EM.run do
  Fiber.new do
    data = async_fetch('http://www.google.com/')
    puts "Fetched page: #{data.response_header.status}" 
    EM.stop
  end.resume
end
```

!SLIDE
## Fibers vs Threads ##

<div class="right">Threads, no GIL</div>
<br/><tt class="active">XXXXX</tt><tt class="inactive">XX</tt><tt class="active">XXXXX</tt><tt class="active">XXXXX</tt>
<br/><tt class="active">XXXXX</tt><tt class="active">XX</tt><tt class="active">XXXXX</tt><tt class="inactive">XXXXX</tt>
<br/><tt class="inactive">XXXXX</tt><tt class="active">XX</tt><tt class="inactive">XXXXX</tt><tt class="inactive">XXXXX</tt>

<div class="right">Threads with GIL</div>
<br/><tt class="active">XXXXX</tt><tt class="inactive">XXXXX</tt><tt class="inactive">XX</tt><tt class="active">XXXXX</tt><tt class="inactive">XXXXX</tt>
<br/><tt class="inactive">XXXXX</tt><tt class="active">XXXXX</tt><tt class="inactive">XX</tt><tt class="inactive">XXXXX</tt><tt class="active">XXXXX</tt>
<br/><tt class="inactive">XXXXX</tt><tt class="inactive">XXXXX</tt><tt class="active">XX</tt><tt class="inactive">XXXXX</tt><tt class="inactive">XXXXX</tt>

<div class="right">Fibers</div>
<br/><tt class="active">XXXXXXXXXX</tt><tt class="inactive">XXXXXXXXXX</tt><tt class="inactive">XX</tt>
<br/><tt class="inactive">XXXXXXXXXX</tt><tt class="active">XXXXXXXXXX</tt><tt class="inactive">XX</tt>
<br/><tt class="inactive">XXXXXXXXXX</tt><tt class="inactive">XXXXXXXXXX</tt><tt class="active">XX</tt>

!SLIDE
## Threads are dangerous ##

```ruby
File.open "foo.txt", "w" do |f|
  t1 = Thread.new do
    1_000_000.times {|i| f << i % 10 ; f << "\n" }
  end
  t2 = Thread.new do
    1_000_000.times {|i| f << i % 10 ; f << "\n" }
  end
  t1.join ; t2.join
end
puts File.readlines("foo.txt").grep(/../).length  # => 232 
```

!SLIDE
# EM-Synchrony #

```ruby
EventMachine.synchrony do
  multi = EventMachine::Synchrony::Multi.new
  multi.add :a, EM::HttpRequest.new(url1).aget 
  multi.add :b, EM::HttpRequest.new(url2).aget 
  res = multi.perform
  p res
  EM.stop
end
```

!SLIDE
# Too magic to be true? #

!SLIDE
# Not perfect #

Each fiber has a stack of 4Kb

Don't use it with Rails for example

