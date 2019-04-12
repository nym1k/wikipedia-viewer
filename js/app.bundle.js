'use strict';

(function () {

  var els = {
    searchInput: document.querySelector('[data-search-input]'),
    searchButton: document.querySelector('[data-search-button]'),
    searchResults: document.querySelector('[data-search-results]')
  };

  var App = {
    Init: function Init() {
      App.UI();
    },
    UI: function UI() {

      // on keypress of search input, run search function

      // on click of search, run search function
      els.searchButton.addEventListener('click', function (e) {
        e.preventDefault();
        App.wikiSearch();
      });

      // On click of clear, clear searchbox

    },
    getWikiURL: function getWikiURL() {
      // get value of search input
      var searchTerm = els.searchInput.value;

      // return url for wikipedia + searchterm
      return "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm;
    },
    wikiSearch: function wikiSearch() {
      // Using the cors-anywhere api to bypass Access-Control-Allow-Origin issue
      var proxyurl = "https://cors-anywhere.herokuapp.com/";
      var url = App.getWikiURL();

      var request = new Request(proxyurl + url, {
        method: 'GET',
        headers: new Headers({})
      });

      fetch(proxyurl + url).then(function (response) {
        return response.json();
      }).then(function (contents) {
        return App.displayResults(contents);
      }).catch(function () {
        return console.log("Can’t access " + url + " response. Blocked by browser?");
      });
      // Ajax call to wikipedia
      // $.ajax({
      //   url: App.getWikiURL(),
      //   dataType: 'jsonp',
      //   type: 'GET',
      //   headers: {
      //     'Api-User-Agent': 'Example/1.0'
      //   },
      //   success: App.displayResults
      // });
    },
    displayResults: function displayResults(searchData) {
      // Run function to remove current all results
      App.clearResults();

      // If no results, display this
      // if (searchData[1].length < 1) {
      //   $('.resultsBox').append("<div class='result'><h1>No results found.</h1></div>");
      // }

      // For each result, output html with data

      console.log(searchData);

      els.searchResults.innerHtml = searchData;

      // for (i = 0; i < searchData[1].length; i++) {
      //   var content = "" +
      //     "<div class='result'>" +
      //     "<a href='" + searchData[3][i] + "' target='_blank'><h1>" + searchData[1][i] + "</h1></a>" +
      //     "<h3>" + searchData[2][i] + "</h3>" +
      //     "</div>";
      //   $('.resultsBox').append(content);
      // }
    },
    clearResults: function clearResults() {
      // clear html of results container
      // $('.resultsBox').html("");
      els.searchResults.innerHtml = '';
    }
  };

  App.Init();
})();
