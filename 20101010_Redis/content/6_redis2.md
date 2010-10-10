!SLIDE section
# Nouveautés #

!SLIDE
# PubSub #

    # Un client se connecte sur les canaux 17 et 42
    SUBSCRIBE rooms:17 rooms:42

    # Un autre publie sur le canal 42
    PUBLISH rooms:42 "Un message pour rooms:42"

    # Le premier client est notifié

!SLIDE
# Transactions #

    MULTI
      OK
    INCR foo
      QUEUED
    INCR bar
      QUEUED
    INCR bar
      QUEUED
    EXEC
      [1, 1, 2]

!SLIDE
# Redis 2.2 #

* Amélioration très significative de la consommation mémoire
* Performances boostées
* Actuellement en alpha
* Release Candidate avant la fin de l'année

!SLIDE
# Redis cluster #

* Données réparties automatiquement sur plusieurs serveurs
* Alpha pour la fin de l'année (2.x)
* Stable dans un an (3.0) ?

