!SLIDE section
# Les strings #

!SLIDE
# Clé → valeur #

* pages:index.html  → `<html><body>...`
* users:123:session → `f1d2d2f924e986ac86fdf7b36c94bcdf32beec15`
* my-global-counter → `42`

!SLIDE
# En ligne de commande #

    ./redis-cli SET key "my value"
    ./redis-cli GET key

    ./redis-cli DEL key
    ./redis-cli EXISTS key

!SLIDE
# Des opérations plus avancées #

    ./redis-cli GETSET key "my value"
    ./redis-cli SETNX key "my value"

    ./redis-cli MGET key1 key2 key3
    ./redis-cli MSET key1 "value 1" key2 "value 2"

    ./redis-cli APPEND key " and more"
    ./redis-cli INCR key

!SLIDE
# Expiration #

    ./redis-cli EXPIRE key 3600
    ./redis-cli TTL key
    ./redis-cli PERSIST key

