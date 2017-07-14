$(document).ready(function() {
  $('.multi-item-carousel').carousel({
    interval: 1000 * 3
  });

  // for every slide in carousel, copy the next slide's item in the slide.
  // Do the same for the next, next item.
  $('.multi-item-carousel .item').each(function() {
    var next = $(this).next();
    var next2 = next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    if (!next2.length) {
      next2 = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    next2.children(':first-child').clone().appendTo($(this));

    if (next2.next().length > 0) {
      next2.next().children(':first-child').clone().appendTo($(this));
    } else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });
  $('marquee').hover(function () {
    this.stop();
}, function () {
    this.start();
});
});
/*
$('#marqi').marquee('events_marquee').mouseover(function () {
  $(this).trigger('stop');
}).mouseout(function () {
  $(this).trigger('start');
}).mousemove(function (event) {
  if ($(this).data('drag') == true) {
    this.scrollLeft = $(this).data('scrollX') + ($(this).data('x') - event.clientX);
  }
}).mousedown(function (event) {
  $(this).data('drag', true).data('x', event.clientX).data('scrollX', this.scrollLeft);
}).mouseup(function () {
  $(this).data('drag', false);
});
      // basic version is: $('div.demo marquee').marquee() - but we're doing some sexy extras
      $('div.demo marquee').marquee('pointer').mouseover(function () {
          $(this).trigger('stop');
      }).mouseout(function () {
          $(this).trigger('start');
      }).mousemove(function (event) {
          if ($(this).data('drag') == true) {
              this.scrollLeft = $(this).data('scrollX') + ($(this).data('x') - event.clientX);
          }
      }).mousedown(function (event) {
          $(this).data('drag', true).data('x', event.clientX).data('scrollX', this.scrollLeft);
      }).mouseup(function () {
          $(this).data('drag', false);
      });
*/
