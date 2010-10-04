!SLIDE section
# Les nouveautés #

!SLIDE
# PubSub #

    SUBSCRIBE rooms:17 rooms:42
    PUBLISH rooms:42 "Un message pour rooms:42"

!SLIDE
# Transactions #

    ?> r.multi
    => "OK"
    >> r.incr "foo"
    => "QUEUED"
    >> r.incr "bar"
    => "QUEUED"
    >> r.incr "bar"
    => "QUEUED"
    >> r.exec
    => [1, 1, 2]

!SLIDE
# Redis 2.2 #

* Amélioration très significative de la consommation mémoire
* Performances boostées
* Actuellement en alpha
* Release Candidate avant la fin de l'année

!SLIDE
# Redis cluster #

* Données réparties automatiquement sur plusieurs serveurs
* Alpha pour la fin de l'année
* Stable dans un an ?

