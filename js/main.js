'use strict';

{
$(function() {
  $(".js-hamburger").on('click',function() {
    $(this).toggleClass('is-open');
    $(".header-nav").slideToggle(200);

    if ($(".js-hamburger_bar").text() === 'メニューを開く') {
      $(".js-hamburger_bar").text('メニューを閉じる');
    } else {
      $(".js-hamburger_bar").text('メニューを開く');
    }
  });

  $(".js-nav-li").hover(function() {
    $(this).children(".sub-menu").slideToggle(200);
    $(this).children(".sub-btn").toggleClass('is-active');
  });

  $(window).scroll(function() {
    const scroll = $(this).scrollTop();
    $(".hero_bg").css('background-position-y', parseInt( - scroll  * 0.8 ) + 'px');
  });

  $(window).on('resize', function() {
    const bp = 1200;
    const width = $(this).width();
    const nav = $(".header-nav");

    if (width < bp && nav.is(':visible')) {
      $(".js-hamburger").removeClass('is-open');
      nav.slideUp(200);
    } else if (width >= bp && nav.is(':hidden')) {
      nav.show();
    }
  });
});
}