!SLIDE
# EventMachine #

* Ruby Framework Ruby
* Evented
* Network drivers
  * (HTTP, mysql, redis, MongoDB, SMTP, XMPP and many more)

!SLIDE
# 3 ways to handle requests #

* 1 process per connection
* 1 thread  per connection
* Evented programming

!SLIDE
# em-example #

```ruby
#!/usr/bin/env ruby
require 'eventmachine'

EM.run do
  EM.add_periodic_timer(1) { puts "Working" }
  EM.add_timer(5) { EM.stop_event_loop }
end

puts "Done"
```

!SLIDE
# Warning #

* Don't block the event loop for too long
* Split your task with `EM.next_tick`

