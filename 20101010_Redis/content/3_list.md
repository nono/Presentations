!SLIDE section
# Les listes #

!SLIDE
# Une liste #

    ./redis-cli LPUSH my-list a
    ./redis-cli LPUSH my-list b
    ./redis-cli LPUSH my-list c

* my-list ⇒ (c)→(b)→(a)

!SLIDE
# Manipuler une liste #
## Exemple en Ruby ##

    require 'redis'
    r = Redis.new
    r.del 'logs'

    r.rpush 'logs', 'some log message'
    r.rpush 'logs', 'another log message'
    r.rpush 'logs', 'yet another log message'

    puts r.lrange('logs', 0, -1)
    r.ltrim('logs', -2, -1)
    log = r.lpop('logs')

