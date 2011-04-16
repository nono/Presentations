!SLIDE
# Rack : la spec #

> A Rack application is an Ruby object (not a class) that responds to call.
It takes exactly one argument, the environment and returns an Array of exactly three values:
The status, the headers, and the body.

!SLIDE
# Rack : un exemple #

```ruby
class HelloWorld
  def call(env)
    [200,
      {"Content-Type" => "text/plain"},
      ["Hello World!"]]
  end
end
```

!SLIDE
# Rack : les middlewares #

```ruby
Rack::Builder.new do
  use Rack::CommonLogger
  use Rack::ShowExceptions
  use Rack::Head
  use Rack::Lint
  run HelloWorld.new
end
```

!SLIDE
# Rack : les middlewares #

```ruby
app = HelloWorld.new               
app = Rack::Lint.new(app)          
app = Rack::Head.new(app)          
app = Rack::ShowExceptions.new(app)
app = Rack::CommonLogger.new(app)  
```

!SLIDE
# Rack : exemple de middleware #

```ruby
class Rack::Head
  def initialize(app)
    @app = app
  end

  def call(env)
    status, headers, body = @app.call(env)
    body = [] if env["REQUEST_METHOD"] == "HEAD"
    [status, headers, body]
  end
end
```

!SLIDE
# Rack et Goliath #

```ruby
require "goliath"

class Hello < Goliath::API
  def response(env)
    [200, {}, "Hello World!"]
  end
end
```

