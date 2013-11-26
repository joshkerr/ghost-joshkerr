/**
 * Main JS file for Casper behaviors
 */

/*globals jQuery, document */
(function ($) {


    $(document).ready(function(){

        // On the home page, move the blog icon inside the header
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");
          $('pre').addClass('prettyprint');

        mainImage = $('img[alt="main-image"]');

        if ( mainImage.length > 0){
                mainImageSource = mainImage.attr('src');
                $('header').css('background-image','url('+mainImageSource+')');
                mainImage.remove();
        }
        
        $(".post-content").fitVids();


    });

}(jQuery));

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-9009358-1']);
_gaq.push(['_setDomainName', 'joshkerr.com']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

