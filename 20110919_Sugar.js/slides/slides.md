!SLIDE shout
# Sugar.js&nbsp; Javascript, sweetened #

!SLIDE
# Quoi qu'est-ce ? #

http://sugarjs.com/

* Une bibliothèque JS
* Ni jQuery, ni Backbone, plutôt un équivalent d'underscore
* Mais avec les extensions déjà incluses

!SLIDE
# Functions #

```javascript
(function(a) {
  // this = 'wasabi', a = 'bobby'
}).bind('wasabi', 'bobby')();

(function() {
  // delayed 500ms
}).delay(500);
```

!SLIDE
# Objects #

```javascript
Object.keys({ broken: 'wear' });
    // => ["broken"]
Object.values({ broken: 'wear' });
    // => ["wear"]
Object.isString('yes, it is');
    // => true
```

!SLIDE
# Arrays #

```javascript
['rocksteady','and','bebop'].sortBy('length');
    // => ["and","bebop","rocksteady"]
['rocksteady','and','bebop'].map(function(n) {
  return n.length;
}); // => [10,3,5]
['rocksteady','and','bebop'].from(1);
    // => ["and","bebop"]
```

!SLIDE
# Strings #

```javascript
'welcome'.pad(' ', 1).pad('-', 3);
    // => "--- welcome ---"
'caps_lock'.camelize();
    // => "CapsLock"
'<p>some text</p>'.escapeHTML();
    // => "&lt;p&gt;some text&lt;/p&gt;"
```

!SLIDE
# Numbers #

```javascript
(4388.43).format(' ', ',');
    // => "4 388,43"

(2).upto(6, function(n) {
  // This function is called 5 times
  // receiving n as the value.
});
```

!SLIDE
# RegExp #

```javascript
RegExp.escape("oh not /b/, aren't we?");
    // => "oh not \\/b\\/, aren\\'t we\\?"
```

!SLIDE
# Dates #

```javascript
Date.create(1234567899999);
    // => "Saturday, February 14, 2009 00:31"
Date.create().beginningOfDay();
    // => "Monday, September 19, 2011 00:00"
Date.create().format('{yyyy}-{MM}-{dd}T{hh}:{mm}:{ss}');
    // => "2011-09-16T15:32:00"
```

!SLIDE shout
# Sugar.js, c'est bon, mangez-en ! #
