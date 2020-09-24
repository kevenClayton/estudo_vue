$(window).ready(function() {

    /* Set Background Image */
    $('.set-bg').each(function(){
		var imgSrc2 = $(this).find('.get-bg img').attr('src');
		$(this).css('background-image', 'url('+ imgSrc2 +')');
	});
    $('.thisBg').each(function(){
		var imgSrc1 = $(this).find('img').attr('src');
		$(this).css('background-image', 'linear-gradient(rgba(142, 87, 40, 0.7),rgba(43, 40, 40, 0.7)), url('+ imgSrc1 +')');
	});
    
    // Mobile Menu
    $('.siteNav .hs-menu-wrapper').before('<a class="expandMenu"><i></i><i></i><i></i></a>');     
    $('.siteNav .flyouts .hs-item-has-children > a').after('<span class="childExpand"><i></i><i></i></span>');
    $('.expandMenu').click(function() {
        $(this).next('.siteNav .hs-menu-wrapper').slideToggle(250);
        $('body').toggleClass('menuOpen');
        $('.childExpand').removeClass('open');
        $('.hs-menu-children-wrapper').hide(0);
        return false;
    });
    $('.childExpand').click(function() {
        $(this).parent().siblings('.hs-item-has-children').find('.childExpand').removeClass('open');
        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').slideToggle(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.childExpand').removeClass('open');
        $(this).toggleClass('open');
        return false;
    });
    
    $('.blog-sidebar .hs-rss-item').each(function(){
        $(this).find('.hs-rss-item-text').insertAfter($(this).find('.hs-rss-item-image-wrapper'));
    });
  
});

// $(function() {
//     $('.expand,.expand-trigger').on('click', function(e){
//         e.preventDefault();
//     	$(this).closest('.expandable').find('.reveal').toggleClass('open')
//     });
// });