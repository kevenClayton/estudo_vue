<html>
 <head></head>
 <body>
  /*! WOW - v1.1.2 - 2015-04-07 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */ (function(){var t,e,i,o,n,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,i=this.length;i&gt;e;e++)if(e in this&amp;&amp;this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var i,o;for(i in e)o=e[i],null==t[i]&amp;&amp;(t[i]=o);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,i,o){var n;return null==e&amp;&amp;(e=!1),null==i&amp;&amp;(i=!1),null==o&amp;&amp;(o=null),null!=document.createEvent?(n=document.createEvent("CustomEvent")).initCustomEvent(t,e,i,o):null!=document.createEventObject?(n=document.createEventObject()).eventType=t:n.eventName=t,n},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,i){return null!=t.addEventListener?t.addEventListener(e,i,!1):null!=t.attachEvent?t.attachEvent("on"+e,i):t[e]=i},t.prototype.removeEvent=function(t,e,i){return null!=t.removeEventListener?t.removeEventListener(e,i,!1):null!=t.detachEvent?t.detachEvent("on"+e,i):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),i=this.WeakMap||this.MozWeakMap||(i=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,i,o,n;for(e=i=0,o=(n=this.keys).length;o&gt;i;e=++i)if(n[e]===t)return this.values[e]},t.prototype.set=function(t,e){var i,o,n,r;for(i=o=0,n=(r=this.keys).length;n&gt;o;i=++o)if(r[i]===t)return void(this.values[i]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&amp;&amp;null!==console&amp;&amp;console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&amp;&amp;null!==console&amp;&amp;console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),o=this.getComputedStyle||function(t){return this.getPropertyValue=function(e){var i;return"float"===e&amp;&amp;(e="styleFloat"),n.test(e)&amp;&amp;e.replace(n,(function(t,e){return e.toUpperCase()})),(null!=(i=t.currentStyle)?i[e]:void 0)||null},this},n=/(\-([a-z]){1})/g,this.WOW=function(){function n(t){null==t&amp;&amp;(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.resetAnimation=r(this.resetAnimation,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new i,this.wowEvent=this.util().createEvent(this.config.boxClass)}return n.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},n.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},n.prototype.start=function(){var e,i,o,n;if(this.stopped=!1,this.boxes=function(){var t,i,o,n;for(n=[],t=0,i=(o=this.element.querySelectorAll("."+this.config.boxClass)).length;i&gt;t;t++)e=o[t],n.push(e);return n}.call(this),this.all=function(){var t,i,o,n;for(n=[],t=0,i=(o=this.boxes).length;i&gt;t;t++)e=o[t],n.push(e);return n}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(i=0,o=(n=this.boxes).length;o&gt;i;i++)e=n[i],this.applyStyle(e,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new t(function(t){return function(e){var i,o,n,r,s;for(s=[],i=0,o=e.length;o&gt;i;i++)r=e[i],s.push(function(){var t,e,i,o;for(o=[],t=0,e=(i=r.addedNodes||[]).length;e&gt;t;t++)n=i[t],o.push(this.doSync(n));return o}.call(t));return s}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},n.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},n.prototype.sync=function(){return t.notSupported?this.doSync(this.element):void 0},n.prototype.doSync=function(t){var e,i,o,n,r;if(null==t&amp;&amp;(t=this.element),1===t.nodeType){for(r=[],i=0,o=(n=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;o&gt;i;i++)e=n[i],s.call(this.all,e)&lt;0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},n.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&amp;&amp;this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},n.prototype.applyStyle=function(t,e){var i,o,n;return o=t.getAttribute("data-wow-duration"),i=t.getAttribute("data-wow-delay"),n=t.getAttribute("data-wow-iteration"),this.animate(function(r){return function(){return r.customStyle(t,e,o,i,n)}}(this))},n.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},n.prototype.resetStyle=function(){var t,e,i,o,n;for(n=[],e=0,i=(o=this.boxes).length;i&gt;e;e++)t=o[e],n.push(t.style.visibility="visible");return n},n.prototype.resetAnimation=function(t){var e;return t.type.toLowerCase().indexOf("animationend")&gt;=0?(e=t.target||t.srcElement).className=e.className.replace(this.config.animateClass,"").trim():void 0},n.prototype.customStyle=function(t,e,i,o,n){return e&amp;&amp;this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",i&amp;&amp;this.vendorSet(t.style,{animationDuration:i}),o&amp;&amp;this.vendorSet(t.style,{animationDelay:o}),n&amp;&amp;this.vendorSet(t.style,{animationIterationCount:n}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},n.prototype.vendors=["moz","webkit"],n.prototype.vendorSet=function(t,e){var i,o,n,r;for(i in o=[],e)n=e[i],t[""+i]=n,o.push(function(){var e,o,s,a;for(a=[],e=0,o=(s=this.vendors).length;o&gt;e;e++)r=s[e],a.push(t[""+r+i.charAt(0).toUpperCase()+i.substr(1)]=n);return a}.call(this));return o},n.prototype.vendorCSS=function(t,e){var i,n,r,s,a,l;for(s=(a=o(t)).getPropertyCSSValue(e),i=0,n=(r=this.vendors).length;n&gt;i;i++)l=r[i],s=s||a.getPropertyCSSValue("-"+l+"-"+e);return s},n.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(i){e=o(t).getPropertyValue("animation-name")}return"none"===e?"":e},n.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},n.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},n.prototype.scrollHandler=function(){return this.scrolled=!0},n.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,i,o,n;for(n=[],e=0,i=(o=this.boxes).length;i&gt;e;e++)(t=o[e])&amp;&amp;(this.isVisible(t)?this.show(t):n.push(t));return n}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},n.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},n.prototype.isVisible=function(t){var e,i,o,n,r;return i=t.getAttribute("data-wow-offset")||this.config.offset,n=(r=window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-i,e=(o=this.offsetTop(t))+t.clientHeight,n&gt;=o&amp;&amp;e&gt;=r},n.prototype.util=function(){return null!=this._util?this._util:this._util=new e},n.prototype.disabled=function(){return!this.config.mobile&amp;&amp;this.util().isMobile(navigator.userAgent)},n}()}).call(this),function(t){"use strict";"function"==typeof define&amp;&amp;define.amd?define(["jquery"],t):"undefined"!=typeof module&amp;&amp;module.exports?module.exports=t(require("jquery")):t(jQuery)}((function(t){var e=-1,i=-1,o=function(t){return parseFloat(t)||0},n=function(e){var i=t(e),n=null,r=[];return i.each((function(){var e=t(this),i=e.offset().top-o(e.css("margin-top")),s=r.length&gt;0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-i))&lt;=1?r[r.length-1]=s.add(e):r.push(e),n=i})),r},r=function(e){var i={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(i,e):("boolean"==typeof e?i.byRow=e:"remove"===e&amp;&amp;(i.remove=!0),i)},s=t.fn.matchHeight=function(e){var i=r(e);if(i.remove){var o=this;return this.css(i.property,""),t.each(s._groups,(function(t,e){e.elements=e.elements.not(o)})),this}return this.length&lt;=1&amp;&amp;!i.target?this:(s._groups.push({elements:this,options:i}),s._apply(this,i),this)};s.version="master",s._groups=[],s._throttle=80,s._maintainScroll=!1,s._beforeUpdate=null,s._afterUpdate=null,s._rows=n,s._parse=o,s._parseOptions=r,s._apply=function(e,i){var a=r(i),l=t(e),u=[l],c=t(window).scrollTop(),h=t("html").outerHeight(!0),d=l.parents().filter(":hidden");return d.each((function(){var e=t(this);e.data("style-cache",e.attr("style"))})),d.css("display","block"),a.byRow&amp;&amp;!a.target&amp;&amp;(l.each((function(){var e=t(this),i=e.css("display");"inline-block"!==i&amp;&amp;"flex"!==i&amp;&amp;"inline-flex"!==i&amp;&amp;(i="block"),e.data("style-cache",e.attr("style")),e.css({display:i,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})})),u=n(l),l.each((function(){var e=t(this);e.attr("style",e.data("style-cache")||"")}))),t.each(u,(function(e,i){var n=t(i),r=0;if(a.target)r=a.target.outerHeight(!1);else{if(a.byRow&amp;&amp;n.length&lt;=1)return void n.css(a.property,"");n.each((function(){var e=t(this),i=e.css("display");"inline-block"!==i&amp;&amp;"flex"!==i&amp;&amp;"inline-flex"!==i&amp;&amp;(i="block");var o={display:i};o[a.property]="",e.css(o),e.outerHeight(!1)&gt;r&amp;&amp;(r=e.outerHeight(!1)),e.css("display","")}))}n.each((function(){var e=t(this),i=0;a.target&amp;&amp;e.is(a.target)||("border-box"!==e.css("box-sizing")&amp;&amp;(i+=o(e.css("border-top-width"))+o(e.css("border-bottom-width")),i+=o(e.css("padding-top"))+o(e.css("padding-bottom"))),e.css(a.property,r-i+"px"))}))})),d.each((function(){var e=t(this);e.attr("style",e.data("style-cache")||null)})),s._maintainScroll&amp;&amp;t(window).scrollTop(c/h*t("html").outerHeight(!0)),this},s._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each((function(){var i=t(this),o=i.attr("data-mh")||i.attr("data-match-height");e[o]=o in e?e[o].add(i):i})),t.each(e,(function(){this.matchHeight(!0)}))};var a=function(e){s._beforeUpdate&amp;&amp;s._beforeUpdate(e,s._groups),t.each(s._groups,(function(){s._apply(this.elements,this.options)})),s._afterUpdate&amp;&amp;s._afterUpdate(e,s._groups)};s._update=function(o,n){if(n&amp;&amp;"resize"===n.type){var r=t(window).width();if(r===e)return;e=r}o?-1===i&amp;&amp;(i=setTimeout((function(){a(n),i=-1}),s._throttle)):a(n)},t(s._applyDataApi),t(window).bind("load",(function(t){s._update(!1,t)})),t(window).bind("resize orientationchange",(function(t){s._update(!0,t)}))})),function(t){t.fn.YouTubePopUp=function(e){var i=t.extend({autoplay:1},e);t(this).on("click",(function(e){var o=t(this).attr("href");if(o.match(/(youtube.com)/))var n="v=",r=1;if(o.match(/(youtu.be)/)||o.match(/(vimeo.com\/)+[0-9]/))n="/",r=3;if(o.match(/(vimeo.com\/)+[a-zA-Z]/))n="/",r=5;var s=o.split(n)[r].replace(/(&amp;)+(.*)/,"");if(o.match(/(youtu.be)/)||o.match(/(youtube.com)/))var a="https://www.youtube.com/embed/"+s+"?autoplay="+i.autoplay;if(o.match(/(vimeo.com\/)+[0-9]/)||o.match(/(vimeo.com\/)+[a-zA-Z]/))a="https://player.vimeo.com/video/"+s+"?autoplay="+i.autoplay;t("body").append('
  <div class="YouTubePopUp-Wrap YouTubePopUp-animation">
   <div class="YouTubePopUp-Content">
    <span class="YouTubePopUp-Close"></span>
    <iframe src="'+a+'" allowfullscreen></iframe>
   </div>
  </div>'),t(".YouTubePopUp-Wrap").hasClass("YouTubePopUp-animation")&amp;&amp;setTimeout((function(){t(".YouTubePopUp-Wrap").removeClass("YouTubePopUp-animation")}),600),t(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click((function(){t(".YouTubePopUp-Wrap").addClass("YouTubePopUp-Hide").delay(515).queue((function(){t(this).remove()}))})),e.preventDefault()})),t(document).keyup((function(e){27==e.keyCode&amp;&amp;t(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click()}))}}(jQuery),$((function(){$(".ucHeaderMenu").addClass("js-enabled"),$(".ucHeaderLogo a").after('
  <div class="ucMobileTrigger">
   <i></i>
  </div>'),$(".ucHeaderMenu .flyouts .hs-item-has-children &gt; a").after(' 
  <div class="ucChildTrigger">
   <i></i>
  </div>'),$(".ucMobileTrigger").click((function(){return $(".ucHeaderMenu .hs-menu-wrapper").slideToggle(250),$("body").toggleClass("ucMobileOpen"),$(".ucChildTrigger").removeClass("ucChildOpen"),$(".hs-menu-children-wrapper").slideUp(250),!1})),$(".ucChildTrigger").click((function(){return $(this).parent().siblings(".hs-item-has-children").find(".ucChildTrigger").removeClass("ucChildOpen"),$(this).parent().siblings(".hs-item-has-children").find(".hs-menu-children-wrapper").slideUp(250),$(this).next(".hs-menu-children-wrapper").slideToggle(250),$(this).next(".hs-menu-children-wrapper").children(".hs-item-has-children").find(".hs-menu-children-wrapper").slideUp(250),$(this).next(".hs-menu-children-wrapper").children(".hs-item-has-children").find(".ucChildTrigger").removeClass("ucChildOpen"),$(this).toggleClass("ucChildOpen"),!1}))})),$(document).ready((function(){$(".ucHeaderContactPop").prepend('
  <div class="ucHeaderContactPopOverlay"></div>'),$(".contact-btn").on("mouseenter",(function(){$("body").addClass("hover")})),$(".ucHeaderContactPopOverlay").on("mouseover",(function(){$("body").removeClass("hover")}))})),$(window).scroll((function(){$(document).scrollTop()&gt;90?$(window).width()&gt;1e3&amp;&amp;$(".ucBlog1Post").addClass("subsShow"):$(".ucBlog1Post").removeClass("subsShow")})),$(window).scroll((function(){$(document).scrollTop()&gt;90?$(window).width()&gt;1e3&amp;&amp;$("a.contact-btn").addClass("scroll"):$("a.contact-btn").removeClass("scroll")}));var exitForm2=$("
  <div class="exit-form">
   X
  </div>");exitForm2.click((function(){toggleSubscribeForm()})),$(".subscribe-wrapper").append(exitForm2);var overlay2=$("
  <div id="overlay-2" class="overlay"></div>");function toggleSubscribeForm(){$(".subscribe-wrapper").toggle(),overlay2.toggle()}if(overlay2.hide(),$("body .subscribeWrapper").after(overlay2),overlay2.click((function(){toggleSubscribeForm()})),$("#subscribe-by-email").click((function(){toggleSubscribeForm()})),$("#subscribe-by-email-header").click((function(t){toggleSubscribeForm(),t.preventDefault()})),(new WOW).init(),jQuery((function(){jQuery("a.btn-video").YouTubePopUp()})),$(window).load((function(){$(".body-container .hs-input").each((function(){tmpval=$(this).val(),""==tmpval?$(this).closest(".hs-form-field").removeClass("active"):$(this).closest(".hs-form-field").addClass("active")})),$(".body-container .hs-input").blur((function(){$(".body-container .hs-input").hasClass("error")?$(this).closest(".hs-form-field").addClass("error"):$(this).closest(".hs-form-field").removeClass("error")})),$(".body-container .hs-input").focus((function(){$(this).closest(".hs-form-field").addClass("active")})),$(".body-container .hs-input").blur((function(){$(this).val()||$(this).closest(".hs-form-field").removeClass("active")})),$(".body-container .hs-form-field &gt; label &gt; span:first-child").each((function(){var t=$(this).text();$(this).closest(".hs-form-field").children().find(".hs-input").attr("placeholder",t)}))})),$("h3.form-title:empty").closest(".widget-type-form").addClass("noBgStyle"),$(".hasAnimationHero").length&gt;0){$("body").addClass("noHeaderShadowDefault"),window.heroHeight=$(".hasAnimationHero").outerHeight(),window.windowWidth=$(window).width();var setHeights=function(){window.heroHeight=$(".hasAnimationHero").outerHeight(),window.windowWidth=$(window).width()},windowSizeFunctions=function(){setHeights()},watchhero=function(){window.windowWidth&gt;=600&amp;&amp;(windowSizeFunctions(),$(window).resize((function(){windowSizeFunctions()})),$(window).scroll((function(){})))},headerColor=function(){var t=1-$(window).scrollTop()/window.heroHeight;t&lt;0?(t=0,$("html").addClass("scrolled")):$("html").removeClass("scrolled")},heroscroll=function(){var t=1-$(window).scrollTop()/window.heroHeight;headerColor(),t&gt;=0&amp;&amp;$(".hasAnimationHero").css("opacity",t)};$(window).load((function(){watchhero(),headerColor(),setTimeout((function(){$("html").removeClass("hloading")}),50)})),$(window).scroll((function(){window.windowWidth&gt;=768&amp;&amp;heroscroll()}))}if($(".digital-library-element").parent().addClass("digital-library-element-3col"),$(".videohub-module").parent().addClass("videohub-module-3col"),$(".eqHeight,.digital-library-element-3col,.videohub-module-3col").matchHeight(),$(".columnSticky").length&gt;0){var StickyPosition=$(".ucCustomHeader").outerHeight()+30;$(".columnSticky").css("top",StickyPosition+"px")}$(window).load((function(){if($(window).width()&gt;1024){var t=$(".footerBeta").outerHeight();$("body").css("margin-bottom",t)}})),$(document).ready((function(){$(".row-fluid .ucPostItem.contents").hide(),$(".row-fluid .ucPostItem.contents").slice(0,6).show(),$("#loadMore").on("click",(function(t){t.preventDefault(),$(".row-fluid .ucPostItem.contents:hidden").slice(0,3).slideDown("250"),0==$(".row-fluid .ucPostItem.contents:hidden").length&amp;&amp;$("#loadMore").hide()})),$(".row-fluid .ucPostItem.contents").length&lt;=6&amp;&amp;$("#loadMore").hide()}));
 </body>
</html>