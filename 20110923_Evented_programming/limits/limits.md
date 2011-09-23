!SLIDE shout
# Limits? #

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
# Workers #

* Split your tasks
* Give each part to a worker

=&gt; Actor model?
