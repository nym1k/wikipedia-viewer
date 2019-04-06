(function() {

  const els = {
    searchInput: document.querySelector('[data-search-input]'),
    searchButton: document.querySelector('[data-search-button]'),
    searchResults: document.querySelector('[data-search-results]')
  }

  const App = {
    Init: function() {
      App.UI();
    },
    UI: function() {

      // on keypress of search input, run search function

      // on click of search, run search function
      els.searchButton.addEventListener('click', function(e) {
        e.preventDefault()
        console.log(e.target)
      })


      // On click of clear, clear searchbox



    },
    getWikiURL: function() {
      // get value of search input
      // const searchTerm = $('.searchTerm').val();
      // return url for wikipedia + searchterm
      // return "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm;
    },
    wikiSearch: function() {
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
    displayResults: function(searchData) {
      // Run function to remove current all results
      App.clearResults();

      // If no results, display this
      // if (searchData[1].length < 1) {
      //   $('.resultsBox').append("<div class='result'><h1>No results found.</h1></div>");
      // }

      // For each result, output html with data
      // for (i = 0; i < searchData[1].length; i++) {
      //   var content = "" +
      //     "<div class='result'>" +
      //     "<a href='" + searchData[3][i] + "' target='_blank'><h1>" + searchData[1][i] + "</h1></a>" +
      //     "<h3>" + searchData[2][i] + "</h3>" +
      //     "</div>";
      //   $('.resultsBox').append(content);
      // }
    },
    clearResults: function() {
      // clear html of results container
      // $('.resultsBox').html("");
    }
  };

  App.Init();

})()
