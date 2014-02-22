/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");

        $("code.ghost-prism").each(function(index, element){
            // Elementlerimizi ve verilerimizi toplayalım.
            var $code     = $(element),
                $pre      = $code.parent("pre"),
                data      = $code.data(),
                html      = $code.html().trim(),
                classList = "";

            // Prism Lang belittiysek class'ımızı oluşturalım ve ekleyelim.
            if(data.prismLang) classList += " language-"+data.prismLang;

            // Prism Line-Numbers belirttiysek class'ımızı ekleyelim.
            if(data.prismLinenumbers === "true") classList += " line-numbers";

            // Prism Line Higlight belirttiysek direkt olark attribute'muzu atayalım.
            if(data.prismLinehighlight) $pre.attr("data-line", data.prismLinehighlight);

            // Class listemizi ekleyelim.
            $pre.addClass(classList);
            // Markdown formatı sonlarda gereksiz yeni satırlar yaratabiliyor, bu nedenle trim edilmiş yeni html'imizi aktaralım.
            $code.html(html);
            // Çift çağrılara karşı "ghost-prism" class'ımızı silelim.
            $code.removeClass("ghost-prism");

            // Prism API'ımızı tetikleyelim.
            Prism.highlightAll();

        });

    });

}(jQuery));