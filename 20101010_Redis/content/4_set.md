!SLIDE section
# Sets #

!SLIDE
# Un set #
C'est un ensemble non-ordonné

    SADD users:123:friends 51
    SADD users:123:friends 69
    SADD users:123:friends 42

* users:123:friends → {42, 51, 69}

!SLIDE
# Des opérations bien pratiques #

    # Nombre d'éléments (3)
    SCARD users:123:friends
    # Déplace un élément
    SMOVE users:123:waiting users:123:friends 100
    # Supprime un élément
    SREM users:123:friends 100
    # Vérifie si un élément appartient à l'ensemble
    SISMEMBER users:123:friends 25

!SLIDE
# Des opérations bien pratiques (bis) #

    # Renvoie les amis communs
    SINTER users:123:friends users:256:friends
    # Renvoie les amis de mes amis
    SUNION users:42:friends users:51:friends users:69:friends
    # Les amis de 256 qui ne sont pas (encore) mes amis
    SDIFF users:256:friends users:123:friends

    # Un élément au hasard
    SRANDMEMBER users:123:friends

!SLIDE
# Sorted Set (zset) #
Comme un ensemble, mais chaque élément a un score

    # Ajoute les messages 42 et 59 avec un score de 0
    ZADD messages:votes 0 42
    ZADD messages:votes 0 59
    # Vote pour le message 59
    ZINCRBY messages:votes 1 59
    # Les 5 messages les mieux notés
    ZREVRANGE messages:votes 0 5

