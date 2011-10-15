!SLIDE
# Example #

```js
fs.readFile('/etc/passwd', function (data) { 
  console.log(data);
});
```

How can we handle the case where `/etc/passwd` is missing?

!SLIDE
# Return code (C) #

```c
int res;
res = listen(sock, backlog);
if (res < 0) {
    perror("Listen error");
    return -1;
}
```

!SLIDE
# Don't work for our example #

```js
var e = fs.readFile('/etc/passwd', function (data) { 
  console.log(data);
});

// e is always OK
```

!SLIDE
# Exceptions (Ruby) #

```ruby
begin
  File.open('test.rb', 'w') do |f|
    f.puts "Hello World!\n"
  end
rescue Exception => msg
  puts msg
end
```

!SLIDE
# Not better! #

```js
try {
  fs.readFile('/etc/passwd', function (data) { 
    console.log(data);
  });
} catch (error) {
  // Code here is never executed
}
```

!SLIDE
# Other possibilities #

* Add a second function, `errback`
* Add a parameter to the callback
* Promises / Deferrables / Futures
* etc.

!SLIDE
## Node.js: callback with a parameter ##

```js
fs.readFile('/etc/passwd', function (err, data) { 
  if (err) throw err;
  console.log(data);
});
```

!SLIDE
## EventMachine: Deferrables ##

```ruby
http = EM::HttpRequest.new("http://google.fr/").get 
http.errback do |error|
  puts "Error #{error}"
end
http.callback do
 puts "Yiped, Google is up!"
end
```

!SLIDE
## Isn't it the same than errback? ##

```ruby
$nb_success = 0
http = EM::HttpRequest.new("http://google.fr/").get 
http.callback { $nb_success += 1 }
EM.add_timer(1) do
  http.callback { puts "Yiped, Google is up!" }
end
```

!SLIDE
## Do you know? ##
jQuery use deferrables too, but it's called deferred

```js
var jqxhr = $.ajax("/example")
    .success(function() { alert("success"); })
    .error(function() { alert("error"); });

// perform other work here ...

jqxhr.complete(function() { alert("second complete"); }); 
```

