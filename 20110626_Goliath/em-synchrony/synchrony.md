!SLIDE
# Ruby 1.9 and Fibers #

```ruby
def async_fetch(url)
  f = Fiber.current
  http = EM::HttpRequest.new(url).get
  http.callback { f.resume(http) }
  return Fiber.yield
end
EM.run do
  Fiber.new {
    data = async_fetch('http://linuxfr.org/')
    puts "Fetched page #1: #{data.response}"
  }.resume
end
```

!SLIDE
# EM-Synchrony: example #

```ruby
EM.synchrony do
  HR = EM::HttpRequest
  m = EM::Synchrony::Multi.new
  m.add :page1, HR.new("http://foo.com/1").aget
  m.add :page2, HR.new("http://foo.com/2").aget
  m.add :page3, HR.new("http://foo.com/3").aget
  data = m.perform.responses[:callback].values
end
```

!SLIDE
# EM-Synchrony: example #

```ruby
EM.synchrony do
  data = %w(data from the previous slide) 
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
# Back to Goliath #

```ruby
require 'goliath'
require 'em-synchrony/em-http'

class HelloWorld < Goliath::API
  def response(env)
    HR = EM::HttpRequest
    req = HR.new("http://www.google.com/").get
    resp = req.response
    [200, {}, resp]
  end
end
```
