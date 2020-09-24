/*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);

/*
* jquery-match-height master by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,i=function(t){return parseFloat(t)||0},n=function(e){var o=1,n=t(e),a=null,r=[];return n.each(function(){var e=t(this),n=e.offset().top-i(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(a-n))<=o?r[r.length-1]=s.add(e):r.push(e),a=n}),r},a=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=a(e);if(o.remove){var i=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="master",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=n,r._parse=i,r._parseOptions=a,r._apply=function(e,o){var s=a(o),h=t(e),c=[h],l=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),c=n(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(c,function(e,o){var n=t(o),a=0;if(s.target)a=s.target.outerHeight(!1);else{if(s.byRow&&n.length<=1)return void n.css(s.property,"");n.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block");var i={display:o};i[s.property]="",
e.css(i),e.outerHeight(!1)>a&&(a=e.outerHeight(!1)),e.css("display","")})}n.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),o+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,a-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(l/p*t("html").outerHeight(!0)),this},r._applyDataApi=function(){
var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),i=o.attr("data-mh")||o.attr("data-match-height");i in e?e[i]=e[i].add(o):e[i]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(i,n){if(n&&"resize"===n.type){var a=t(window).width();if(a===e)return;e=a}i?-1===o&&(o=setTimeout(function(){
s(n),o=-1},r._throttle)):s(n)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});

/*
    Name: YouTubePopUp
    Description: jQuery plugin to display YouTube or Vimeo video in PopUp, responsive and retina, easy to use.
    Version: 1.0.1
    Plugin URL: http://wp-time.com/youtube-popup-jquery-plugin/
    Written By: Qassim Hassan
    Twitter: @QQQHZ
    Websites: wp-time.com | qass.im | wp-plugins.in
    Dual licensed under the MIT and GPL licenses:
        http://www.opensource.org/licenses/mit-license.php
        http://www.gnu.org/licenses/gpl.html
    Copyright (c) 2016 - Qassim Hassan
*/

(function ( $ ) {
 
    $.fn.YouTubePopUp = function(options) {

        var YouTubePopUpOptions = $.extend({
                autoplay: 1
        }, options );

        $(this).on('click', function (e) {

            var youtubeLink = $(this).attr("href");

            if( youtubeLink.match(/(youtube.com)/) ){
                var split_c = "v=";
                var split_n = 1;
            }

            if( youtubeLink.match(/(youtu.be)/) || youtubeLink.match(/(vimeo.com\/)+[0-9]/) ){
                var split_c = "/";
                var split_n = 3;
            }

            if( youtubeLink.match(/(vimeo.com\/)+[a-zA-Z]/) ){
                var split_c = "/";
                var split_n = 5;
            }

            var getYouTubeVideoID = youtubeLink.split(split_c)[split_n];

            var cleanVideoID = getYouTubeVideoID.replace(/(&)+(.*)/, "");

            if( youtubeLink.match(/(youtu.be)/) || youtubeLink.match(/(youtube.com)/) ){
                var videoEmbedLink = "https://www.youtube.com/embed/"+cleanVideoID+"?autoplay="+YouTubePopUpOptions.autoplay+"";
            }

            if( youtubeLink.match(/(vimeo.com\/)+[0-9]/) || youtubeLink.match(/(vimeo.com\/)+[a-zA-Z]/) ){
                var videoEmbedLink = "https://player.vimeo.com/video/"+cleanVideoID+"?autoplay="+YouTubePopUpOptions.autoplay+"";
            }

            $("body").append('<div class="YouTubePopUp-Wrap YouTubePopUp-animation"><div class="YouTubePopUp-Content"><span class="YouTubePopUp-Close"></span><iframe src="'+videoEmbedLink+'" allowfullscreen></iframe></div></div>');

            if( $('.YouTubePopUp-Wrap').hasClass('YouTubePopUp-animation') ){
                setTimeout(function() {
                    $('.YouTubePopUp-Wrap').removeClass("YouTubePopUp-animation");
                }, 600);
            }

            $(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click(function(){
                $(".YouTubePopUp-Wrap").addClass("YouTubePopUp-Hide").delay(515).queue(function() { $(this).remove(); });
            });

            e.preventDefault();

        });

        $(document).keyup(function(e) {

            if ( e.keyCode == 27 ){
                $('.YouTubePopUp-Wrap, .YouTubePopUp-Close').click();
            }

        });

    };
 
}( jQuery ));




































$(function() {

  /** 
     * Mobile Nav
     *
     * Hubspot Standard Toggle Menu
     */

  $('.ucHeaderMenu').addClass('js-enabled');

  /* Mobile button with three lines icon */
  $('.ucHeaderLogo a').after('<div class="ucMobileTrigger"><i></i></div>');

  /* Uncomment for mobile button that says 'MENU' 
        $('.ucHeaderMenu .hs-menu-wrapper').before('<div class="ucMobileTrigger">MENU</div>');
    */

  $('.ucHeaderMenu .flyouts .hs-item-has-children > a').after(' <div class="ucChildTrigger"><i></i></div>');
  $('.ucMobileTrigger').click(function() {
    $('.ucHeaderMenu .hs-menu-wrapper').slideToggle(250);
    $('body').toggleClass('ucMobileOpen');
    $('.ucChildTrigger').removeClass('ucChildOpen');
    $('.hs-menu-children-wrapper').slideUp(250);
    return false;
  });

  $('.ucChildTrigger').click(function() {
    $(this).parent().siblings('.hs-item-has-children').find('.ucChildTrigger').removeClass('ucChildOpen');
    $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
    $(this).next('.hs-menu-children-wrapper').slideToggle(250);
    $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
    $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.ucChildTrigger').removeClass('ucChildOpen');
    $(this).toggleClass('ucChildOpen');
    return false;
  });
});


$(document).ready(function(){
  $('.ucHeaderContactPop').prepend('<div class="ucHeaderContactPopOverlay"></div>');
  $(".contact-btn").on("mouseenter",function(){$('body').addClass("hover")});
  $(".ucHeaderContactPopOverlay").on("mouseover",function(){$('body').removeClass("hover")});
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 90) {
    if ($(window).width() > 1000) {
      $(".ucBlog1Post").addClass("subsShow");
    }
  } else {
    $(".ucBlog1Post").removeClass("subsShow");
  }
});


$(window).scroll(function() {
  if ($(document).scrollTop() > 90) {
    if ($(window).width() > 1000) {
      $("a.contact-btn").addClass("scroll");
    }
  } else {
    $("a.contact-btn").removeClass("scroll");
  }
});

var exitForm2 = $("<div class='exit-form'>X</div>");
exitForm2.click(function(){
  toggleSubscribeForm();
});
$(".subscribe-wrapper").append(exitForm2);
var overlay2 = $("<div id='overlay-2' class='overlay'></div>");
overlay2.hide();
$("body .subscribeWrapper").after(overlay2);
overlay2.click(function(){
  toggleSubscribeForm();
});
$("#subscribe-by-email").click(function(){
  toggleSubscribeForm();
});
$("#subscribe-by-email-header").click(function(event){
  toggleSubscribeForm();
  event.preventDefault();
});
function toggleSubscribeForm(){
  $(".subscribe-wrapper").toggle();
  overlay2.toggle();
}


new WOW().init();

jQuery(function(){
  jQuery("a.btn-video").YouTubePopUp();
  /*jQuery("a.video").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay*/
});

$(window).load(function(){

  $('.body-container .hs-input').each(function(){
    tmpval = $(this).val();
    if(tmpval == '') {
      $(this).closest('.hs-form-field').removeClass('active');
    } else {
      $(this).closest('.hs-form-field').addClass('active');
    }
  });

  $('.body-container .hs-input').blur(function(){
    if ($('.body-container .hs-input').hasClass('error')) {
      $(this).closest('.hs-form-field').addClass('error');
    }else{
      $(this).closest('.hs-form-field').removeClass('error');
    }
  });

  $('.body-container .hs-input').focus(function(){
    $(this).closest('.hs-form-field').addClass('active');
  });
  $('.body-container .hs-input').blur(function(){
    if( !$(this).val() ) {
      $(this).closest('.hs-form-field').removeClass('active');
    }
  });

  $('.body-container .hs-form-field > label > span:first-child').each(function(){
    var placeHolder = $(this).text();
    $(this).closest('.hs-form-field').children().find('.hs-input').attr('placeholder',placeHolder);
  });

});
$('h3.form-title:empty').closest('.widget-type-form').addClass('noBgStyle');

/*-------------Opacity In ScrollTop--------------*/

if ($(".hasAnimationHero").length > 0){
  $("body").addClass('noHeaderShadowDefault');
  window.heroHeight = $(".hasAnimationHero").outerHeight();
  window.windowWidth = $(window).width();
  var setHeights = function() {
    window.heroHeight = $(".hasAnimationHero").outerHeight();
    window.windowWidth = $(window).width()
  };
  var windowSizeFunctions = function() {
    setHeights();
  };
  var watchhero = function() {
    if (window.windowWidth >= 600) {
      windowSizeFunctions();
      $(window).resize(function() {
        windowSizeFunctions()
      });
      $(window).scroll(function() {})
    }
  };
  var headerColor = function() {
    var top = $(window).scrollTop();
    var percent = 1 - top / (window.heroHeight);
    if (percent < 0) {
      percent = 0;
      $("html").addClass("scrolled");
    } else {
      $("html").removeClass("scrolled");
    }
  };
  var heroscroll = function() {
    var top = $(window).scrollTop();
    var percent = 1 - top / (window.heroHeight);
    headerColor();
    if (percent >= 0) {
      $(".hasAnimationHero").css("opacity", percent);
    }
  };
  $(window).load(function() {
    watchhero();
    headerColor();
    setTimeout(function() {
      $("html").removeClass("hloading")
    }, 50)
  });
  $(window).scroll(function() {
    if (window.windowWidth >= 768) heroscroll()
  });
}



$('.digital-library-element').parent().addClass('digital-library-element-3col');
$('.videohub-module').parent().addClass('videohub-module-3col');
//---------------MatchHeight------------
$('.eqHeight,.digital-library-element-3col,.videohub-module-3col').matchHeight();

if ($(".columnSticky").length > 0){
var StickyPosition=$('.ucCustomHeader').outerHeight() + 30;
$('.columnSticky').css('top',StickyPosition+'px');
};


$(window).load(function(){
  if ($(window).width() > 1024) {
    var fheight=$('.footerBeta').outerHeight();
    $('body').css('margin-bottom',fheight);
  } 
})



$(document).ready(function(){
  $(".row-fluid .ucPostItem.contents").hide();
  $(".row-fluid .ucPostItem.contents").slice(0, 6).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".row-fluid .ucPostItem.contents:hidden").slice(0, 3).slideDown('250');
    if($(".row-fluid .ucPostItem.contents:hidden").length == 0) {
      $("#loadMore").hide();
    }
  });
  
  if($(".row-fluid .ucPostItem.contents").length <= 6) {
      $("#loadMore").hide();
    }
});








