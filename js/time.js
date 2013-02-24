/*jslint vars: true, indent: 2, browser: true*/
/*global console, jQuery, $*/

(function (window) {
  'use strict';

  var debug = (function (enable) {
    return enable ? function (message) {
      if (window.console) {
        var args = Array.prototype.slice.call(arguments);
        console.log.apply(console, ['time.js: ' + message].concat(args.slice(1)));
      }
    } : function (msg) {
    };
  }(true));

  var app = (function () {
    var app = {};

    app.loadData = function (date, cb) {
    };

    app.start = function start() {
      debug("開始");
      var $switch = $('#switch');

      $switch.find('a').on('click', function () {
        var $this = $(this);
        var $parent = $this.parent();
        var index = $parent.index();
        $parent.addClass('current').siblings('.current').removeClass('current');
        debug('切換到 ' + $this.text());
        
        switch (index) {
        case 0:
          break;
        case 1:
          break;
        }

        return false;
      });

      $('#time').on('submit', function () {
        return false;
      });

      var $prev;
      $('.detial').each(function () {
        var $this = $(this);
        if ($this.index() % 2 !== 0) {
          if ($this.height() < $prev.height()) {
            $this.height($prev.height());
          } else {
            $prev.height($this.height());
          }
        } else {
          $prev = $this;
        }
      });
    };

    return app;
  }());

  window.app = app;

}(this));

jQuery(function () {
  'use strict';
  window.app.start();
});
