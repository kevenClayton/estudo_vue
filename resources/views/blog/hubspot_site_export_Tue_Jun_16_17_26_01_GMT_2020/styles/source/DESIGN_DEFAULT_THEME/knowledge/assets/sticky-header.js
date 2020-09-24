$(document).ready(function() { 
  var HEADER_IS_STICKY_CLASS = 'header-is-sticky';
  var SIDEBAR_IS_STICKY_CLASS = 'sidebar-is-sticky';
  var SIDEBAR_HAS_REACHED_THE_FOOTER_CLASS = 'sidebar-has-reached-the-footer';
  var DEFAULT_THEME_CLASS = 'kb-theme--default';
  var TILES_THEME_CLASS = 'kb-theme--tiles';

  var bodyElement = document.querySelector('body');
  var headerElement = document.querySelector('header');
  var searchSectionElement = document.querySelector('.kb-search-section');
  var breadcrumbsElement = document.querySelector('.kb-breadcrumbs');
  var categoryMenuElement = document.querySelector('.kb-category-menu');
  var sidebarElement = document.querySelector('.kb-category-menu > ul');
  var contentContainerElement = document.querySelector('main .content-container');
  var contentElement = document.querySelector('.kb-content');
  var stickyFooterElement =  document.querySelector('.kb-sticky-footer');
  var headerHeight = headerElement ? headerElement.getBoundingClientRect().height : 0;
  var breadcrumbsHeight = breadcrumbsElement ? breadcrumbsElement.getBoundingClientRect().height : 0;
  var sidebarHeight = sidebarElement ? sidebarElement.getBoundingClientRect().height : 0;
  var originalSidebarWidth = sidebarElement ? sidebarElement.getBoundingClientRect().width : 0;
  var categoryElementMarginTop = categoryMenuElement ? getStyleProp(categoryMenuElement, 'margin-top') : 0;
  var stickyFooterMarginTop = stickyFooterElement ? getStyleProp(stickyFooterElement, 'margin-top') : 0;
  var breadcrumbDistanceToHeader = contentContainerElement ?
      (getStyleProp(contentContainerElement, 'margin-top') + getStyleProp(contentContainerElement, 'padding-top')) : 0;
  var contentContainerPaddingBottom = contentContainerElement? getStyleProp(contentContainerElement, 'padding-bottom') : 0;
  var targetBottom = isTilesThemeSelected() ? contentContainerPaddingBottom : -stickyFooterMarginTop;

  var targetHeaderHeightWhenSticky = isDefaultThemeSelected() ? 155 : 185;
  var distanceToScrolledHeader = distanceToHeaderBottom(headerElement, targetHeaderHeightWhenSticky);
  var sidebarWillBeSticky = breadcrumbsHeight + categoryElementMarginTop + sidebarHeight < getCurrentContentHeight();

  function toggleClassName(element, className, check) {
    if (!element.classList.contains(className) && check) {
      element.classList.add(className);
    } else if (element.classList.contains(className) && !check) {
      element.classList.remove(className);
    }
  }

  function isDefaultThemeSelected() {
    return bodyElement.classList.contains(DEFAULT_THEME_CLASS);
  }

  function isTilesThemeSelected() {
    return bodyElement.classList.contains(TILES_THEME_CLASS);
  }

  function getStyleProp(element, styleProp) {
    return parseInt(window.getComputedStyle(element).getPropertyValue(styleProp), 10);
  }

  function getCurrentContentHeight() {
    return contentElement ? contentElement.getBoundingClientRect().height : 0;
  }

  function getSearchSectionHeight() {
    return searchSectionElement ? searchSectionElement.getBoundingClientRect().height : 0;
  }

  // Scroll Fixed Header
  function windowScrollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  function distanceToHeaderBottom(element, target) {
    return element.scrollTop + element.offsetHeight - target;
  }

  function hasScrolledPastTarget(target) {
    return windowScrollPosition() >= target;
  }

  function hasSidebarReachedTheFooter() {
    var currentStickyFooterTop = stickyFooterElement ? stickyFooterElement.getBoundingClientRect().top : 0;
    var currentContentContainerBottom = contentContainerElement
      ? (contentContainerElement.getBoundingClientRect().bottom - getStyleProp(contentContainerElement, 'padding-bottom'))
      : 0;
    var target = isTilesThemeSelected() ? currentContentContainerBottom : currentStickyFooterTop;
    return getSearchSectionHeight() + categoryElementMarginTop + sidebarHeight >= target;
  }

  function manageStickyElements() {
    var headerIsSticky = hasScrolledPastTarget(distanceToScrolledHeader);
    var sidebarIsSticky = hasScrolledPastTarget(distanceToScrolledHeader + breadcrumbDistanceToHeader + breadcrumbsHeight);
    var sidebarHasReachedTheFooter = hasSidebarReachedTheFooter();

    toggleClassName(bodyElement, HEADER_IS_STICKY_CLASS, headerIsSticky);
    headerElement.style.height = headerIsSticky ? headerHeight + 'px' : '';

    if (sidebarWillBeSticky) {
      toggleClassName(bodyElement, SIDEBAR_IS_STICKY_CLASS, sidebarIsSticky && !sidebarHasReachedTheFooter);
      toggleClassName(bodyElement, SIDEBAR_HAS_REACHED_THE_FOOTER_CLASS, sidebarIsSticky && sidebarHasReachedTheFooter);

      categoryMenuElement.style.top = '';
      categoryMenuElement.style.bottom = '';
      sidebarElement.style.width = '';

      if (sidebarIsSticky && !sidebarHasReachedTheFooter) {
        categoryMenuElement.style.top = getSearchSectionHeight() + 'px';
        sidebarElement.style.width = originalSidebarWidth + 'px';
      } else if (sidebarHasReachedTheFooter) {
        categoryMenuElement.style.bottom = targetBottom + 'px';
        sidebarElement.style.width = originalSidebarWidth + 'px';
      }
    }
  };

  if (document.documentElement.clientWidth > 1025) {
    // Uses sticky header and sidebar only on larger screen than iPad
    if (contentElement) {
      new MutationObserver(function() {
        sidebarWillBeSticky = breadcrumbsHeight + categoryElementMarginTop + sidebarHeight < getCurrentContentHeight();
        manageStickyElements();
      }).observe(contentElement, {
        childList: true,
        subtree: true,
      });
    }

    window.onscroll = manageStickyElements;
    manageStickyElements();
  }
});