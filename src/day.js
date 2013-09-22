(function(app) {



  var baseDay = $('.day');
  baseDay.remove();


  app.container.on('click', '.day-label', function(e) {
    e.stopPropagation();
  });

  // TODO: also listen to touchdown
  app.container.on('click', '.day', function(e) {
    var event = app.event();

    $(e.currentTarget)
      .find('.events')
      .append(event);

    event.find('.event-content').focus();
  });


  // returns a day DOM element
  app.day = function(date) {
    var day = baseDay.clone();
    var label = day.find('.day-label');

    label.text(dayOfWeek(date) + ' ' + date.getDate());
    day.attr('data-date', date.toDateString());

    if (isToday(date)) {
      day.attr('id', 'today');
    } else if (isPast(date)) {
      day.addClass('past');
    }

    return day;
  };



  app.day.addEvent = function(day, data) {
    var event = app.event(data);
    day.find('.events').append(event);
  };



  // returns a boolean
  function isToday(date) {
    return date.toDateString() === new Date().toDateString();
  }

  // returns a boolean
  function isPast(date) {
    return date < new Date();
  }


  // return something like 'MON' or 'SUN'
  function dayOfWeek(date) {
    return date.toString().match(/[^\s]+/)[0].toUpperCase();
  }



})(focalendar);
