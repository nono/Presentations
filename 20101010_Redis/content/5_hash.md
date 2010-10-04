!SLIDE section
# Les hashs #

!SLIDE
# Un hash #

**Avant**

* users:123:login → toto
* users:123:timestamp → 1286153170
* users:123:nb-friends → 10

**Après**

* users:123 → {login → toto, timestamp → 1286153170, nb-friends → 10}

!SLIDE
# Avantages #

* Stockage plus efficace en mémoire
* Des opérations intéressantes

!SLIDE
# En pratique #

    HSET users:123 login toto
    HSET users:123 timestamp 1286153170
    HSET users:123 nb-friends 10

    HGETALL users:123
    HGET users:123 login
    HMGET users:123 login nb-friends

