!SLIDE section
# Listes #

!SLIDE
# Une liste #

    # Crée une liste de 3 éléments
    LPUSH my-list a
    LPUSH my-list b
    LPUSH my-list c

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

    puts r.lrange('logs', 0, -1) # Affiche tous les logs
    r.ltrim('logs', -2, -1)      # Garde les 2 derniers logs
    log = r.lpop('logs')         # Extrait le premier log

