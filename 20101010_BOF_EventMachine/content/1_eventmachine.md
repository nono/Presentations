!SLIDE
# EventMachine #

* Event-driven IO
* Ruby
* Asynchrone avec le pattern _Reactor_

!SLIDE center
# 1 processus par connection #
![Fast Food](mcdo.jpg)

!SLIDE center
# 1 thread par connection #
![Credit Card](card.jpg)

!SLIDE center
# Modèle événementiel #
![Japonais](jap.jpg)

!SLIDE
# Exemple #

    @@@ruby
    #!/usr/bin/env ruby
    require 'eventmachine'

    EventMachine.run do
      EM.add_periodic_timer(1) { puts "Tick ..." }
      EM.add_timer(5) { EM.stop_event_loop }
    end

    puts "Fini"

!SLIDE
# Serveur Echo #

    @@@ruby
    class Echo < EventMachine::Connection
      def receive_data(data)
        send_data data
        close_connection_after_writing 
      end
    end

    EM.run do
      EM.start_server 'localhost', 8080, Echo
    end

!SLIDE
# Conclusion #

EventMachine pour des programmes Ruby avec des IO efficaces

