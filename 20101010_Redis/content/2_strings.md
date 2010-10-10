!SLIDE section
# Strings #

!SLIDE
# Clé → valeur #

* pages:index.html  → `<html><body>...`
* users:123:session → `f1d2d2f924e986ac86fdf7b36c94bcdf32beec15`
* my-global-counter → `42`

!SLIDE
# En ligne de commande #

    # Enregistrer un couple clé-valeur
    redis-cli SET key "my value"
    # Récupérer une valeur à partir d'une clé
    redis-cli GET key

    # Supprimer une clé
    redis-cli DEL key
    # Vérifier l'existence d'une clé
    redis-cli EXISTS key

!SLIDE
# Opérations multiples #

    # Récupérer plusieurs valeurs d'un coup
    MGET key1 key2 key3
    # Enregistrer plusieurs valeurs d'un coup
    MSET key1 "value 1" key2 "value 2"

!SLIDE
# Des opérations plus avancées #

    # Enregister une valeur + récupérer l'ancienne
    GETSET key "my value"
    # Faire un enregistrement s'il n'existait pas
    SETNX key "my value"

!SLIDE
# Modifications de chaînes #

    # Ajouter du texte à une valeur
    APPEND key " and more"
    # Incrémenter une valeur (magique !)
    INCR key

!SLIDE
# Expiration #

    # Définir la durée de vie d'une clé
    EXPIRE key 3600
    # Récupérer la durée de vie
    TTL key
    # Vie infinie
    PERSIST key

