$(document).ready(function () { 
    
    $('nav a').on('click', function () {
        // Current class assignment
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');

        // Set heading text
        $('h1#heading').text($(this).text());
        
        // get & filter link text
       let category = $(this).text().toLowerCase().replace(' ', '-');

        // remove hidden class if all-projects is selected
        if (category == 'all-projects') {
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $('ul#gallery li').each(function () { 

                if (!$(this).hasClass(category)) {
                    $(this).hide().addClass('hidden');
                } else {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
        //stop link behavior
        return false;
    });
    // get data attribute values
    $('ul#gallery li').on('mouseenter', function () {
        let title = $(this).children().data('title');
        let desc = $(this).children().data('desc');


        //validation
        if (desc == null) {
            desc = 'Click To Enlarge';
        }

        if (title == null) {
            title = " ";
        }
// create overlay div
        $(this).append('<div class="overlay"></div>');

        //get the overlay div
        let overlay = $(this).children('.overlay');

        //add html to overlay
        overlay.html('<h3>' + title + '</h3><p>' + desc + '</p>');

        //fade in overlay
        overlay.fadeIn(800);
    });

  
	// Mouseleave Overlay Effect
	$('ul#gallery li').on('mouseleave',function(){
		// Create an overlay div
		$(this).append('<div class="overlay"></div>');

		// Get the overlay div
		var overlay = $(this).children('.overlay');

		// Fade out overlay
		overlay.fadeOut(500);
	});

   


















































});