!SLIDE shout
# Some patterns #

!SLIDE
# The two really basic patterns #

1. Sequence
2. Parallel

!SLIDE
# Sequence #

```js
fs.open('results', 'w', function(err, fd) {
  fs.write(fd, results, function(err, written, f) {
    fs.close(fd, function(err) {
        done();
    });
  });
});
```

!SLIDE
# Parallel #

```js
var counter = 3;
fs.readFile("part.1", onRead);
fs.readFile("part.2", onRead);
fs.readFile("part.3", onRead);
function onRead(err, content) {
  if (err) throw err;
  if (--counter === 0) { done(); }
}
```

!SLIDE
# We can do better! #

Lots of node.js libraries for these 2 patterns.

!SLIDE
# Example: GoWithTheFlow.js (sequence) #

```js
Flow().seq(function(next) {
  console.log("first job");
  fs.readFile(filename, next);
}).seq(function(next, err, data) {
  console.log("second job. run *after* first job");
  next();
});
```

!SLIDE
# Example: GoWithTheFlow.js (parallel) #

```js
Flow().par(function(next) {
  console.log("job foo");
  next(null, "foo");
}).par(function(next) {
  console.log("job bar");
  next(null, "bar");
}).seq(function(next, errs, results) {
  console.log("job run *after* foo and bar");
});
```

!SLIDE
# And what about EventMachine #

EventMachine has `EM::Iterator`!

!SLIDE
# EM::Iterator for a sequence #

```ruby
cmds = ['pwd', 'uptime', 'uname', 'date']
EM::Iterator.new(cmds).map(proc{ |cmd,iter|
  EM.system(cmd) { |out,status| iter.return(out) }
}, proc{ |results|
  p results
})
```

!SLIDE
# Em::Iterator for parallel actions #

```ruby
cmds = ['pwd', 'uptime', 'uname', 'date']
EM::Iterator.new(cmds, cmds.length).map(proc{ |cmd,iter|
  EM.system(cmd) { |out,status| iter.return(out) }
}, proc{ |results|
  p results
})
```

!SLIDE
# Bonus: adjust concurrency #

```ruby
cmds = ['pwd', 'uptime', 'uname', 'date']
EM::Iterator.new(cmds, 2).map(proc{ |cmd,iter|
  EM.system(cmd) { |out,status| iter.return(out) }
}, proc{ |results|
  p results
})
```

!SLIDE
# Next pattern: pool of connections #

```ruby
pool = EM::Pool.new
4.times { pool.add EM::HttpRequest.new(url) }
many_paths.each do |path|
  pool.perform do |conn|
    req = conn.get(:path => '/', :keepalive => true)
    req.callback { puts "Size: #{req.response.size}" }
  end
end
```

