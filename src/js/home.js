import $ from 'jquery';

function adjustBackground() {
  if ($('section.home')[0] !== undefined && $('.quick-search')[0] !== undefined) {
    if (window.innerHeight >= 650 && window.innerWidth >= 900) {
      $('section.home').css('height', 'calc(100vh - 100px)');
    } else {
      $('section.home').css('height', 'auto');
    }
  }
}

$(document).ready(() => {
  $('.collapse-menu').click(() => {
    if ($('.items')[0].style.display === 'inline-grid') {
      $('.items').css('display', 'none');
      $('.home').css('transform', 'translateY(0)');
      $('.search-section').css('transform', 'translateY(0)');
    } else {
      $('.items').css('display', 'inline-grid');

      const itemsHeight = $('.items')[0].offsetHeight;
      $('.home').css('transform', `translateY(${itemsHeight}px)`);
      $('.search-section').css('transform', `translateY(${itemsHeight}px)`);
    }
  });

  $(window).resize(() => {
    if ($(window).width() >= 900 - 15) {
      $('.items').css('display', 'none');
      $('.home').css('transform', 'translateY(0)');
    }
    adjustBackground();
  });

  adjustBackground();
});
