(function() {
  var args = this[this.Sputlytics].q;
  var SputlyticsAgent = {
    init: function(params) {
      this.domain = params.domain;
      this.clientKey = params.clientKey;
    },
    pageview: function() {
      var k = this.clientKey;
      var w = window.screen.width;
      var h = window.screen.height;
      var l = navigator.language;
      var q = "?w="+w+"&h="+h+"&l="+l+"&k="+k;
      var img = new Image();
      img.src = this.domain + "/ping" + q;
    }
  }
  for(var i = 0, m = args.length; i < m; i++) {
    SputlyticsAgent[args[i][0]](args[i][1]);
  }
})();
