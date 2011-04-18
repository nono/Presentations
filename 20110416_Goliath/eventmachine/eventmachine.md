!SLIDE
# EventMachine #

* Framework Ruby
* Evented
* Des drivers réseaux
  * (http, mysql, redis, MongoDB, SMTP, AMQP, XMPP and many more)

!SLIDE
# 1 processus par connexion #
![Fast Food](mcdo.jpg)

!SLIDE center
# 1 thread par connexion #
![Credit Card](card.jpg)

!SLIDE center
# Modèle événementiel #
![Japonais](jap.jpg)

!SLIDE
# EventMachine : Exemple #

```ruby
#!/usr/bin/env ruby
require 'eventmachine'

EM.run do
  EM.add_periodic_timer(1) { puts "Tick ..." }
  EM.add_timer(5) { EM.stop_event_loop }
end

puts "Fini"
```

!SLIDE
# Goliath et EventMachine #

```ruby
class Stream < Goliath::API
  def response(env)
    i = 0
    pt = EM.add_periodic_timer(1) do
      env.stream_send("#{i += 1} ")
    end
    EM.add_timer(10) do
      pt.cancel
      env.stream_close
    end
    [200, {}, Goliath::Response::STREAMING]
  end
end
```
