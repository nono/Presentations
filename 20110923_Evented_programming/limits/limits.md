!SLIDE bg
<h2 style="color: #fff;">Limits?</h2>
![Limits](limits.jpg)

!SLIDE
# Don't block the reactor #

```ruby
EM.run do
  # many things...
  on_a_callback do
    compute_pi_decimals(1_000_000)
  end
end
```

!SLIDE
# In fact, only thread #

One thread, one process...

We are using only one core of our computer!

!SLIDE
# Solutions #

1. Split your task in many small parts and run the event loop between the parts
2. Delegate the computation to another thread or process

