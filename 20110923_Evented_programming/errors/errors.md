!SLIDE shout
# How to handle errors? #

!SLIDE
# Errors handling with return code (C) #

```c
int res;
res = listen(sock, backlog);
if (res < 0) {
    perror("Listen error");
    return -1;
}
```

!SLIDE
# Error handling with exceptions (Ruby) #

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
# And for Evented Programming? #

Neither works :(

Because the function returns before the error can happen

!SLIDE
# Other possibilities #

* Add a second function, `errback`
* Add a parameter to the callback
* Promises / Deferrables / Futures
* etc.

!SLIDE
# Node.js: callback with a parameter #

```js
fs.readFile('/etc/passwd', function (err, data) {
  if (err) throw err;
  console.log(data);
});
```

!SLIDE
# EventMachine: Deferrables #

```ruby
http = EM::HttpRequest.new("http://google.fr/").get
http.errback do |error|
  puts "Error #{error}"
end
http.callback do
 puts "Yiped, Google is up!"
end
```

