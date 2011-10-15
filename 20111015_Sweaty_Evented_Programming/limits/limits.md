!SLIDE
## Don't block the reactor ##

```ruby
EM.run do
  # many things...
  on_a_callback do
    compute_pi_decimals(1_000_000)
  end
end
```

!SLIDE
## In fact, only one CPU is used ##

One thread, one process...

We are using only one core of our computer!

!SLIDE
# Solutions #

1. Split your task in many small parts and run the event loop between the parts
2. Delegate the computation to another thread or process

!SLIDE
# Split #

```js
var n = 0;
var compute = function() {
  var pi = compute_nth_decimal(n);
  if (++n == 1000000) {
    console.log(pi);
  } else {
    process.nextTick(compute);
  }
}
```

!SLIDE
# Split #

```ruby
decimals = (1..1_000_000).to_a
EM.tick_loop do
  if decimals.empty?
    :stop
  else
    compute_nth_decimal decimals.shift 
  end
end
```

!SLIDE
# Delegate #

```ruby
operation = proc {
    compute_pi_decimals(1_000_000)
}
callback = proc {|result|
  puts result
}
EventMachine.defer(operation, callback)
```

