!SLIDE section
# Les sets #

!SLIDE
# Un set #
C'est un ensemble non-ordonné

    SADD users:123:friends 51
    SADD users:123:friends 69
    SADD users:123:friends 42

* users:123:friends → {42, 51, 69}

!SLIDE
# Des opérations bien pratiques #

    SCARD users:123:friends
    SMOVE users:123:waiting users:123:friends 100
    SREM users:123:friends 100
    SISMEMBER users:123:friends 25

    SINTER users:123:friends users:256:friends
    SUNION users:42:friends users:51:friends users:69:friends
    SDIFF users:123:friends users:256:friends

    SRANDMEMBER users:123:friends

!SLIDE
# Sorted Set (zset) #
Comme un ensemble, mais chaque élément a un score

    ZADD messages:votes 0 42
    ZADD messages:votes 0 59
    ZINCRBY messages:votes 1 59
    ZREVRANGE messages:votes 0 5

