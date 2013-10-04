!SLIDE
# Gestion des dépendances #

```bash
$ go get github.com/jmoiron/jsonq
```

vs

```bash
$ go get -u github.com/jmoiron/jsonq
```

!SLIDE
# Plein d'outils tiers #

Exemple : Go Manager (gom)  
github.com/mattn/gom

```bash
$ gom gen gomfile
$ gom run main.go
$ gom install
```

Exemple de Gomfile :

```ruby
gom 'github.com/bmizerany/pat',    :commit => '51b7af73e39f6dc59846b22d56ca886d105ef0c3'
gom 'github.com/jmoiron/jsonq',    :commit => '1492323a9352de17cf4e78a37a293158b38d2206'
gom 'github.com/moovweb/gokogiri', :commit => 'c5dd3eda2ecc900cfe098ea19b4a021bc9cafb5c'
```
