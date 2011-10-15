!SLIDE
## Formal definition ##

Non-blocking I/O in a reactor

!SLIDE
## So, what is this reactor thing? ##

    Reactor == a single-threaded while loop
               that triggers callbacks on events

!SLIDE
## Something like: ##

```ruby
while reactor_running?
  events.each do |event|
    event.callbacks.each do |cb|
      cb.call(event)
    end
  end
end
```

!SLIDE
# And how it works? #
3 ways to handle incoming requests:

1. One request per process
1. One request per thread
1. And Evented Programming

!SLIDE
# Implementations #

* C: libev & libevent
* JS: Node.js
* Python: Twisted & Gevent
* Perl: POE
* Ruby: EventMachine & Cool.io
* Java: Netty

!SLIDE
# Implementations #
Examples will be in:

* Node.js (JS)
* EventMachine (Ruby)

!SLIDE
## Echo Server (example) ##

```js
var net = require('net');

var server = net.createServer(function (socket) { 
  socket.pipe(socket);
});

server.listen(1337, "127.0.0.1");
```

!SLIDE
## Echo Server (example) ##

```ruby
require 'eventmachine'
class EchoServer < EM::Connection
  def receive_data(data)
    send_data(data)
  end
end
EM.run do
  EM.start_server("127.0.0.1", 1337, EchoServer) 
end
```

