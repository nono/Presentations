!SLIDE
## Hello World ##

```js
main() {
  print('Hello, Dart!');
}
```

Converti en JS, ça fait ~ 17 000 lignes de code :/

!SLIDE
## Le typage statique optionnel ##

```js
int fib(int n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

main() {
  print('fib(20) = ${fib(20)}');
}
```

!SLIDE
## Une classe ##

```js
class Point {
  Point(this.x, this.y);
  distanceTo(Point other) {
    var dx = x - other.x;
    var dy = y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  var x, y;
}

main() {
  Point p = new Point(2, 3);
  Point q = new Point(3, 4);
  print('distance from p to q = ${p.distanceTo(q)}');
}
```

!SLIDE
## Interface, Héritage ##

```js
interface Shape {
  num perimeter();
}

class Rectangle implements Shape {
  final num height, width;
  Rectangle(num this.height, num this.width);
  num perimeter() => 2*height + 2*width;
}

class Square extends Rectangle {
  Square(num size) : super(size, size);
}
```

!SLIDE
## Constantes ##

```js
/** Collection of message IDs used to communicate with player isolates. */
class MessageIds {
  /** message to set up a new player. */
  static final SETUP = 1;

  /** message to initialize the enemy of a player. */
  static final SET_ENEMY = 2;

  /** message indicating that the enemy is ready to play. */
  static final ENEMY_IS_READY = 3;

  /** message describing a shoot action. */
  static final SHOOT = 4;

  /** message to set up a test port, used to make tests non-flaky. */
  static final SET_PORT_FOR_TEST = 5;
}
```

!SLIDE
## Une bibliothèque ##

```c
#library('slider_sample');

#import('../../base/base.dart');
#import('dart:html');
#import('../../view/view.dart');

#source('SliderSample.dart');

main() {
  SliderSample.main();
}
```

!SLIDE
## Isolate ##

```js
class Printer extends Isolate {
  main() {
    port.receive((message, replyTo) {
      if (message == null) port.close();
      else print(message);
    });
  }
}

main() {
  new Printer().spawn().then((port) {
    for (var message in ['Hello', 'from', 'other', 'isolate']) {
      port.send(message);
    }
    port.send(null);
  });
}
```

!SLIDE
## DOM ##

```js
document.query('#next').on.click.add((e) {
  sliderMenu.selectNext(true);
});

Element db = document.query('#debugbar');
if (db.classes.contains('on')) {
  db.classes.remove('on');
} else {
  db.classes.add('on');
}
```
