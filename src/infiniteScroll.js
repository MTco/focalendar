(function(app) {



  var TOLERANCE = 50;

  var $body = $('body');
  var $window = $(window);



  // TODO: eventually debounce this function for performance. maybe only mobile.
  // TODO: remove some months if list gets to big.
  app.infiniteScroll = function() {
    var top = $window.scrollTop();
    var maxTop = $body.height() - $window.height() - TOLERANCE;

    if (top <= TOLERANCE) return fetchEarlierDates();
    if (top >= maxTop) fetchLaterDates();
  };



  function fetchEarlierDates() {
    var $firstDay = $('.day').attr('data-date');
    var previousDate = new Date($firstDay);

    previousDate.setDate( previousDate.getDate() - 1 );

    var $previousMonth = app.month(previousDate);
    var $currentMonth = $('.month');

    app.$container.prepend($previousMonth);

    $window.scrollTop($currentMonth.offset().top);
  }



  function fetchLaterDates() {
    var $lastDay = $('.day').last().attr('data-date');
    var nextDate = new Date($lastDay);

    nextDate.setDate( nextDate.getDate() + 1 );

    var $nextMonth = app.month(nextDate);

    app.$container.append($nextMonth);
  }



})(focalendar);
