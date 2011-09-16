!SLIDE
# PRY #
![Logo de pry](pry.png)

http://pry.github.com/

!SLIDE
# Une alternative à IRB, mais en mieux : #

* Autocomplétion
* Historique
* Coloration syntaxique
* Navigation dans le code source
* Introspection simplifiée
* Helpers, aide, configuration, plugins, etc.

!SLIDE
# Quickstart #

    gem install pry
    pry
    pry(main)> "foo".up<TAB>
    .upcase   .upcase!  .upto
    pry(main)> "foo".upcase
    => "FOO"

!SLIDE
# Lister les méthodes #

    pry(main)> require 'slide-em-up'
    => true
    pry(main)> cd SlideEmUp::Presentation
    pry(SlideEmUp::Presentation):1> ls -M
    [:common, :common=, :html, :meta, :meta=, :path_for_asset, :theme, :theme=, :titles, :titles=]

!SLIDE
# Afficher une méthode #

    pry:1> show-method html
    From: /home/nono/.rvm/gems/ruby-1.9.2-p180/gems/slide-em-up-0.1.8/lib/slide-em-up/presentation.rb @ line 26:
    Number of lines: 4

```ruby
def html
  str = File.read("#{theme.dir}/index.erb")
  Erubis::Eruby.new(str).result(:meta => meta, :theme => theme, :sections => sections)
end
```

!SLIDE
# Afficher la doc (rdoc, yard, etc.) #

    pry(main)> show-doc Pry#r

    signature: r(target=?, eval_string=?)

    Perform a read [...]
    param [Object, Binding] target The receiver of the read.
    param [String] eval_string Optionally Prime eval_string with a start value.
    return [String] The Ruby expression.
    example
      Pry.new.r(Object.new)

!SLIDE
# Shell mode #

    pry(main)> .ls -l
    -rw-r--r-- 1 nono nono   79 2011-09-13 22:46 presentation.json
    drwxr-xr-x 2 nono nono 4096 2011-08-29 01:41 slides
    pry(main)> pres = "presentation.json"
    pry(main)> .cat #{pres}
    {
        "title": "Pry, an IRB alternative",
        "theme": "shower",
        "sections": ["slides"]
    }

!SLIDE
# L'aide #

    pry(main)> help
    Command List:
    --
    help              This menu.
    install-command   Install a disabled command.
    toggle-color      Toggle syntax highlighting.
    [...]

!SLIDE
# Intégration avec Rails #

`rails console` + `pry` = `<3`

https://github.com/pry/pry/wiki/Setting-up-Rails-to-use-Pry

!SLIDE shout
# Conclusion #
