$(function() {
  (function() {
    var App = {
      Init: function() {
        App.UI();
      },
      UI: function() {

        $('.searchTerm').on('keypress', function(e) {
          if (e.which == 13) {
            e.preventDefault();
            App.wikiSearch();
          }
        });

        $('.clear').bind("click", function() {
          App.clearResults();
          $('.searchTerm').val("");
        });

        $('.search').bind("click", function() {
          App.wikiSearch();
        });
      },
      getWikiURL: function() {
        var searchTerm = $('.searchTerm').val();
        return "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm;
      },
      wikiSearch: function() {
        $.ajax({
          url: App.getWikiURL(),
          dataType: 'jsonp',
          type: 'GET',
          headers: {
            'Api-User-Agent': 'Example/1.0'
          },
          success: App.displayResults
        });
      },
      displayResults: function(searchData) {
        App.clearResults();

        if (searchData[1].length < 1) {
          $('.resultsBox').append("<div class='result'><h1>No results found.</h1></div>");
        }

        for (i = 0; i < searchData[1].length; i++) {
          var content = "" +
            "<div class='result'>" +
            "<a href='" + searchData[3][i] + "' target='_blank'><h1>" + searchData[1][i] + "</h1></a>" +
            "<h3>" + searchData[2][i] + "</h3>" +
            "</div>";
          $('.resultsBox').append(content);
        }
      },
      clearResults: function() {
        $('.resultsBox').html("");
      }
    };

    App.Init();

  })();
});
