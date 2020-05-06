import $ from 'jquery';

$(document).ready(() => {
  $('.collapse-menu').click(() => {
    if ($('.items')[0].style.display === 'inline-grid') {
      $('.items').css('display', 'none');
      $('.home').css('transform', 'translateY(0)');
    } else {
      $('.items').css('display', 'inline-grid');

      const itemsHeight = $('.items')[0].offsetHeight;
      $('.home').css('transform', `translateY(${itemsHeight}px)`);
    }
  });

  $(window).resize(() => {
    if ($(window).width() >= 900 - 15) {
      $('.items').css('display', 'none');
      $('.home').css('transform', 'translateY(0)');
    }
  });
});
