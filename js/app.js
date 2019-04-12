(function() {

  const els = {
    searchInput: document.querySelector('[data-search-input]'),
    searchButton: document.querySelector('[data-search-button]'),
    searchResults: document.querySelector('[data-search-results]'),
    searchResultsTitle: document.querySelector('[data-search-results-title]'),
    searchResultsContainer: document.querySelector('[data-search-results-container]')
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
        App.wikiSearch()
      })


      // On click of clear, clear searchbox



    },
    getWikiURL: function() {
      // get value of search input
      const searchTerm = els.searchInput.value

      // return url for wikipedia + searchterm
      return "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm;
    },
    wikiSearch: function() {
      // Using the cors-anywhere api to bypass Access-Control-Allow-Origin issue
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = App.getWikiURL()

      var request = new Request(proxyurl + url, {
        method: 'GET',
        headers: new Headers({

        })
      })

      fetch(proxyurl + url)
      .then(response => response.json())
      .then(contents => App.displayResults(contents))
      .catch((err) => console.log("Can’t access " + url + " response. Error: " + err.message))
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
      let searchDataHTML = []

      for (i = 0; i < searchData[1].length; i++) {
        let searchDataItem = ""
          + "<li class='lst-List_Item'>"
          + "<div class='crd-Wikipedia_Card'>"
          + "<a href='" + searchData[3][i] + "' target='_blank' rel='noreferrer'><h3>" + searchData[1][i] + "</h3></a>"
          + "<p>" + searchData[2][i] + "</p>"
          + "</div>"
          + "</li>"
        searchDataHTML += searchDataItem
      }

      console.log(searchDataHTML);

      els.searchResults.classList.remove('utl-Hidden')
      els.searchResultsTitle.innerHTML = `Showing results for: ${searchData[0]}`
      els.searchResultsContainer.innerHTML = searchDataHTML
    },
    clearResults: function() {
      // clear html of results container
      // $('.resultsBox').html("");
      els.searchResults.classList.add('utl-Hidden')
      els.searchResultsTitle.innerHTML = ''
      els.searchResultsContainer.innerHTML = ''
    }
  };

  App.Init();

})()
