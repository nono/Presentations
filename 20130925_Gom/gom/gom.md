!SLIDE
# Bruno Michel #

* Directeur Technique d'[af83](http://dev.af83.com)
* Développeur de [LinuxFr.org](http://linuxfr.org/)
* Ancien président de [Ruby France](http://rubyfrance.org/)
* [github.com/nono](https://github.com/nono)
* [twitter.com/brmichel](https://twitter.com/brmichel)

!SLIDE
# Pourquoi un package manager ?

!SLIDE
# Comment choisir un package manager ?

Johnny-deps, gpm, godeps, gom, dondur  
Envie, go-nuts, go pin, godeps, goem  
go pack, Gope, GVM, Pak, Rx, Goven  
...

!SLIDE
# Mon choix : gom

Go Manager - bundle for go  
https://github.com/mattn/gom

!SLIDE
# Gomfile

```ruby
gom 'code.google.com/p/gofpdf',         :commit => '840e65f4ad3e'
gom 'github.com/AlekSi/airbrake-go',    :branch => 'stable'
gom 'github.com/jrallison/go-workers'
gom 'github.com/garyburd/redigo/redis', :tag => '1.0'
gom 'github.com/bitly/go-simplejson'
```

!SLIDE
# Quelques commandes

```bash
$ gom gen gomfile
$ gom install
$ gom build
$ gom run
$ gom test
$ gom gen travis-yml
```

!SLIDE
# Fin + Bonus

* Coloration syntaxique dans vim
* Script de complétion pour zsh
