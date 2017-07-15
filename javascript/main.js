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
$('#bird').click(function(){
  $('#play').attr("src":"media/aud/bird.wav");
});
});
