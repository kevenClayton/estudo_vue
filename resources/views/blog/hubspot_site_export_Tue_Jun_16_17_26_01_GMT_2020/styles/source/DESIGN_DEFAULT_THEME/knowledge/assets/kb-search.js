var hsSearch = function(_instance) {
  var searchForm 					=	_instance,
      searchField 				= _instance.find('.kb-search__input'),
      searchTerm      		= "",
      searchResults 			= _instance.find('.kb-search__suggestions'),
      searchCloseButton 	= _instance.find('.kb-search__close');

  /* Debounce */
  var debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
          args = arguments;
      var later = function() {
        timeout = null;
        if ( !immediate ) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait || 200);
      if ( callNow ) {
        func.apply(context, args);
      }
    };
  },
  emptySearchResults = function(){
    searchResults.empty();
    searchField.focus();
    searchForm.removeClass('kb-search--open');
  },
  fillSearchResults = function(results){
    var items = [];
    $.each(results, function( key, val ) {
      var title             = val.title,
          category          = val.category,
          subcategory       = val.subcategory,
          resultUrl         = val.url,
          resultDescription = val.description;

      var subcategoryContent = !!subcategory ? '&nbsp;&nbsp;>&nbsp;&nbsp;' + subcategory : '';

      if (resultDescription && resultDescription.includes("hs-search-highlight")) {
        var highlightedResult = resultDescription + '...';
        var categoryAndSubcategory = !!category ? '<div class="kb-search__suggestions__category-and-subcategory">' + category + subcategoryContent + '&nbsp;&nbsp;>&nbsp;&nbsp;' + title + '</div>' : '';
      } else {
        var highlightedResult = title;
        var categoryAndSubcategory = !!category ? '<div class="kb-search__suggestions__category-and-subcategory">' + category + subcategoryContent + '</div>' : '';
      }

      items.push('<li id="result' + key + '"><a href="' + resultUrl + '"><div class="kb-search__suggestions__title">' + highlightedResult + '</div>' + categoryAndSubcategory + '</a></li>');

    });
    searchResults.empty().append(items.join(""));
    searchForm.addClass('kb-search--open');
  },
  getSearchResults = function(){
    var searchUrl = "/_hcms/search?portalId="+encodeURIComponent(hsVars.portal_id)+"&term="+encodeURIComponent(searchTerm)+"&type=KNOWLEDGE_ARTICLE&analytics=true&autocomplete=true&limit=5";
    $.getJSON(searchUrl, function(data){
      if (data.results.length > 0) {
        fillSearchResults(data.results);
        trapFocus();
      }
      else {
        emptySearchResults();
      }
    });
  },
  /* Contain focus and tab order to search results */
  trapFocus = function(){
    /* Collect tabbable items */
    var tabbable = [];
    tabbable.push(searchField[0]);
    searchResults.find('a').each(function() {
      tabbable.push(this);
    });
    var firstTabbable = $(tabbable[0]),
        lastTabbable  = $(tabbable[tabbable.length-1]);

    var tabResult = function(e){
      if (e.target == lastTabbable[0] && !e.shiftKey) {
        e.preventDefault();
        firstTabbable.focus();
      }
      else if (e.target == firstTabbable[0] && e.shiftKey) {
        e.preventDefault();
        lastTabbable.focus();
      }
    },
    nextResult = function(e) {
      e.preventDefault();
      if (e.target == lastTabbable[0]) {
        firstTabbable.focus();
      }
      else {
        tabbable.forEach(function(el){
          if (el == e.target) {
            $(tabbable[tabbable.indexOf(el) + 1]).focus();
          }
        });
      }
    },
    lastResult = function(e) {
      e.preventDefault();
      if (e.target == firstTabbable[0]) {
        lastTabbable.focus();
      }
      else {
        tabbable.forEach(function(el){
          if (el == e.target) {
            $(tabbable[tabbable.indexOf(el) - 1]).focus();
          }
        });
      }
    };
    /* Bind key events */
    searchForm.on('keydown', function(e){
      switch (e.which) {
        case 9:
          tabResult(e);
          break;
        case 27:
          emptySearchResults();
          break;
        case 38:
          lastResult(e);
          break;
        case 40:
          nextResult(e);
          break;
      }
    });
    searchCloseButton.on('click',function(){
    	emptySearchResults();
    });
  },
  db = debounce(function() {
    searchTerm = searchField.val();
    if (searchTerm.length > 0) {
      getSearchResults();
    }
    else if (searchTerm.length == 0)  {
      emptySearchResults();
    }
  }, 250),
  init = (function(){
    searchField.on('keyup', function(e) {
      if ((e.which != 9) && (e.which != 40) && (e.which != 38) && (e.which != 27) && (searchTerm != searchField.val())) {
        db();
      }
    });
  })();
}

$('.kb-search').each(function(){
  var hsSearchModule = hsSearch($(this));
});

document.addEventListener('invalid', (function () {
  return function (e) {
    e.preventDefault();
    document.getElementById("searchInput").focus();
  };
})(), true);