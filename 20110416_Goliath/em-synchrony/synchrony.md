!SLIDE
# Ruby 1.9 et les fibres #

```ruby
def async_fetch(url)
  f = Fiber.current
  http = EM::HttpRequest.new(url).get :timeout => 10
  http.callback { f.resume(http) }
  http.errback { f.resume(http) }
  return Fiber.yield
end
 
EM.run do
  Fiber.new {
    data = async_fetch('http://www.google.com/')
    puts "Fetched page #1: #{data.response_header.status}"
    EM.stop
  }.resume
end
```

!SLIDE
# EM-Synchrony : exemple #

```ruby
EM.synchrony do
  multi = EM::Synchrony::Multi.new
  multi.add :page1, EM::HttpRequest.new("http://service.com/page1").aget
  multi.add :page2, EM::HttpRequest.new("http://service.com/page2").aget
  multi.add :page3, EM::HttpRequest.new("http://service.com/page3").aget
  data = multi.perform.responses[:callback].values
end
```

!SLIDE
# EM-Synchrony : exemple (suite) #

```ruby
EM.synchrony do
  data = ["Données de l'exemple précédent"] 
  db = EM::Synchrony::ConnectionPool.new(size: 4) do
    EM::MySQL.new(host: "localhost")
  end
  EM::Synchrony::Iterator.new(data, 2).each do |page, iter|
    db.aquery("INSERT INTO table (data) VALUES(#{page});")
    db.callback { iter.return(http) }
  end
end
```

!SLIDE
# Goliath et EM-Synchrony #

```ruby
require 'goliath'
require 'em-synchrony/em-http'

class HelloWorld < Goliath::API
  def response(env)
    req = EM::HttpRequest.new("http://www.google.com/").get
    resp = req.response
    [200, {}, resp]
  end
end
```

