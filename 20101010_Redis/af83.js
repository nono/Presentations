$(function() {
    $('.section').live('showoff:show', function(event) {
        var section = $(event.target);
        if (section.hasClass('toc')) return ;
        section.addClass('toc');
        section.prepend('<div class="header"><div class="page"><p><a href="http://af83.com/">af83</a></p>' + 
                        '<div class="nav"><ul></ul></div>' + 
                        '<div class="colors"><div></div><div></div><div></div><div></div><div></div></div>' +
                        '</div></div>');
        $('.section h1').each(function() {
            section.find('.nav ul').append('<li>' + $(this).text() + '</li>');
        });
    });
});
