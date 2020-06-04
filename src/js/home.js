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
    adjustBackground();
  });

  adjustBackground();


  function adjustBackground() {
    if ($('section.home')[0] !== undefined && $('.quick-search')[0] !== undefined) { // If we are in home page
      if (window.innerHeight >= 650)// 650 is the addition of quick-search heihgt(450), padding(50*2) and header(100)
      { $('section.home').css('height', 'calc(100vh - 100px)'); } else { $('section.home').css('height', 'auto'); }
    }
  }
});
