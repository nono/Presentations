!SLIDE twit
![twitter](images/twitter.png)
# Webhooks for twitter? #
## Not a good idea! ##

!SLIDE
# France TV Info #

![ftv info](images/banner_ftvinfo.png)

!SLIDE
# Solutions are there #

* Polling
* Long polling (Comet)
* HTTP Streaming
* WebSockets
* EventSource

!SLIDE
# Polling & Long-polling

* It's OK if you have less than one message per second
* Can consume many resources if you have many clients
* But it works!

!SLIDE
# HTTP Streaming #

* Very complicated to use in browsers
* But OK for other use cases

!SLIDE
# WebSockets #

* Probably too complex
* Not easy to deploy

!SLIDE
# EventSource #

* Send pings if you want to keep the connection active
* Polyfill for old browsers
* Easy to implement and deploy

## ⇒ A clear winner ##
