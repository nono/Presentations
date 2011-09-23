!SLIDE shout
# Node.js < EventMachine ? #

!SLIDE
# Nope #

They are different beast

But Node.js has also its cool features

!SLIDE
# Streams #

```js
var filestream  = fs.createReadStream('file.txt'),
    gzipstream  = gzip.createStream(),
    writestream = fs.createWriteStream('file.tgz');
filestream.pipe(gzipstream)
          .pipe(writestream)
          .on('end', function () { console.log("done"); });
```

!SLIDE shout
# More patterns #

!SLIDE
# Timeout #

```ruby
http = EM::HttpRequest.new("http://google.fr/").get
http.errback do |error|
  puts "Error #{error}"
end
http.callback do
 puts "Yiped, Google is up!"
end
http.timeout(10, :timeout)
```

!SLIDE
# Join Points: example of a chat #

```js
var http = require('http');
http.createServer(function (req, res) {
  if (request.method === 'POST') {
    // Accept the new message
  } else {
    // Wait for the next message
  }
}).listen(1337, "127.0.0.1");
```

!SLIDE
# Node.js solution: events #

```js
var chat = new EventEmitter();
http.createServer(function (req, res) {
  if (request.method === 'POST') {
    req.on('data', function(msg) {
      chat.emit("message", msg); });
  } else {
    chat.on("message", function(msg) { res.end(msg); });
  }
}).listen(1337, "127.0.0.1");
```

!SLIDE
# EventMachine solution: channel #

```ruby
chan = EM::Channel.new
chan.subscribe {|msg| send_data(msg) }
chan << "A message"
```

