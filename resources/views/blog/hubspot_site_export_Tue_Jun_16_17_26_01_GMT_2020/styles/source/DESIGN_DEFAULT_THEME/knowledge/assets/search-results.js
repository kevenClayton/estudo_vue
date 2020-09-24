window.URLSearchParams = window.URLSearchParams || function (searchString) {
  var self = this;
  self.searchString = searchString;
  self.get = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(self.searchString);
    if (results == null) {
      return null;
    }
    else {
      return decodeURIComponent(results[1]) || 0;
    }
  };
}

var hsResultsPage = function(_resultsClass) {
  var url = window.location,
    params = new URLSearchParams(url.search),
    term = params.get('term') || '',
    offset = params.get('offset') || 0,
    portalId = params.get('portalId'),
    limit = params.get('limit') || 10;

  var buildResultsPage = function(_instance) {
      var resultsContainer = _instance,
        resultTemplate = resultsContainer.querySelector(
          '.kb-search-results__template'
        ),
        resultsSection = resultsContainer.querySelector(
          '.kb-search-results__listing'
        ),
        searchPath = resultsContainer
          .querySelector('.kb-search-results__pagination')
          .getAttribute('data-search-path'),
        prevLink = resultsContainer.querySelector(
          '.kb-search-results__prev-page'
        ),
        nextLink = resultsContainer.querySelector(
          '.kb-search-results__next-page'
        ),
        resultsTitle = resultsContainer.querySelector(
          '.kb-search-results__heading'
        );

      var addResult = function(title, url, cat, subcat, description) {
          var newResult = document.createElement('div');
          newResult.innerHTML = resultTemplate.innerHTML;
          newResult = newResult.firstElementChild;
          newResult.querySelector(
            '.kb-search-results__title'
          ).innerHTML = title;
          newResult.querySelector('.kb-search-results__title').href = url;
          newResult.querySelector('.kb-search-results__cat').innerHTML = cat;
          if (subcat != undefined) {
            newResult.querySelector(
              '.kb-search-results__subcat-text'
            ).innerHTML = subcat;
          } else {
            newResult.querySelector('.kb-search-results__subcat').innerHTML =
              '';
          }
          newResult.querySelector('.kb-search-results__description').innerHTML = description;
          resultsSection.appendChild(newResult);
        },
        fillResults = function(results) {
          results.results.forEach(function(result, i) {
            resultsTitle.textContent = resultsTitle.getAttribute(
              'data-lang-with-results'
            );
            addResult(
              result.title,
              result.url,
              result.category,
              result.subcategory,
              result.description
            );
          });
        },
        emptyPagination = function() {
          prevLink.innerHTML = '';
          nextLink.innerHTML = '';
        },
        emptyResults = function() {
          resultsTitle.textContent = resultsTitle.getAttribute('data-lang-no-results');

          var resultsHeading = document.createElement('p');
          var resultsMessage = document.createElement('p');
          resultsHeading.textContent = resultsSection.getAttribute('data-lang-heading');
          resultsMessage.textContent = resultsSection.getAttribute('data-lang-message');

          resultsSection.appendChild(resultsHeading);
          resultsSection.appendChild(resultsMessage);
        },
        httpRequest = function(portalId, term, offset) {
          var SEARCH_URL = '/_hcms/search?';
          var requestUrl =
            SEARCH_URL +
            'term=' +
            term +
            '&offset=' +
            offset +
            '&type=KNOWLEDGE_ARTICLE&analytics=true';
          var request = new XMLHttpRequest();

          request.open('GET', requestUrl, true);
          request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
              var data = JSON.parse(request.responseText);
              if (data.total > 0) {
                fillResults(data);
                paginate(data.total, data.page);
              } else {
                emptyResults();
                emptyPagination();
              }
            } else {
              console.error('Server reached, error retrieving results.');
            }
          };
          request.onerror = function() {
            console.error('Could not reach the server.');
          };
          request.send();
        },
        paginate = function(total, page) {
          if (page > 0) {
            var prevlink =
              searchPath +
              '?term=' +
              term +
              '&offset=' +
              (page * limit - limit) +
              '&type=KNOWLEDGE_ARTICLE';
            prevLink.href = prevlink;
            prevLink.innerHTML = '&lt; ' + prevLink.getAttribute('data-lang');
          } else {
            prevLink.parentNode.removeChild(prevLink);
          }

          if (offset < total - limit) {
            var nextlink =
              searchPath +
              '?term=' +
              term +
              '&offset=' +
              (page * limit + limit) +
              '&type=KNOWLEDGE_ARTICLE';
            nextLink.href = nextlink;
            nextLink.innerHTML = nextLink.getAttribute('data-lang') + ' &gt;';
          } else {
            nextLink.parentNode.removeChild(nextLink);
          }
        },
        getResults = (function() {
          if (term.length > 0) {
            httpRequest(portalId, term, offset);
          } else {
            emptyPagination();
          }
        })();
    },
    setSearchBarDefault = function() {
      var searchBars = document.querySelectorAll('.kb-search__input');
      Array.prototype.forEach.call(searchBars, function(el) {
        el.value = term;
      });
    },
    init = (function() {
      var searchResults = document.querySelectorAll(_resultsClass);
      Array.prototype.forEach.call(searchResults, function(el) {
        buildResultsPage(el);
      });
      setSearchBarDefault();
    })();
};
var resultsPages = hsResultsPage('.kb-search-results');
