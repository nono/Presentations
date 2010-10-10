!SLIDE section
# Hashs #

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

    # Crée un utilisateur
    HSET users:123 login toto
    HSET users:123 timestamp 1286153170
    HSET users:123 nb-friends 10

    # Récupère toutes les infos sur l'utilisateur
    HGETALL users:123
    # Récupère son login
    HGET users:123 login
    # Récupère le login et le nombre d'amis
    HMGET users:123 login nb-friends

