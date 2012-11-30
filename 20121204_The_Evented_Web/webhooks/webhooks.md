!SLIDE
# Example #

* When I commit on github
* Travis-CI run the build
* And campfire announces the result

!SLIDE
# Example #

![Github webhooks](images/github_hooks.png)

!SLIDE
# How it works? #

## One word: WebHooks! ##

> Don't call me, I'll call you

!SLIDE
# Stripe doc (extract) #

Webhooks solve these problems by letting you register a URL that we will POST
anytime an event happens in your account. When the event occurs, for example
when a successful charge is made in your account, Stripe creates an event
object. This object contains all the relevant information, including the type
of event and the data associated with that event. Stripe then sends an HTTP
POST request with the event object to any URLs in your account's webhook
settings.

!SLIDE webscript
## Incompatible payloads? ##

![WebScript](images/webscript.png)

!SLIDE
# How to debug? #

* Inspect HTTP requests
* http://requestb.in/

!SLIDE
# Bonus points #

A rest API to manage the webhooks!

![MailChimp](images/mailchimp_rest.png)
