Slides pour Paris Web
=====================

J'ai utilisé [slide-em-up](https://github.com/nono/slide-em-up) pour faire les
slides, avec un thème qui a été adapté à partir de
[CSSS](http://leaverou.github.com/csss/) pour ParisWeb.

Pour afficher les slides :

    gem install slide-em-up
    mkdir ~/.slide-em-up
    ln -s $(pwd)/theme ~/.slide-em-up/ParisWeb
    cd slides
    slide-em-up
    $BROWSER http://localhost:9000/

