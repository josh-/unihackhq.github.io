$(function() {
  const navActive = function() {
    const wrap = $('.slideover-wrap');
    const navBtnIcon = $('.mobile-nav-btn i');
    const wrapBtn = $('.mobile-inner-btn');
    const navBtn = $('.mobile-nav-btn');
    if (wrap.hasClass('is-open') && navBtn.hasClass('is-open')) {
      wrap.removeClass('is-open');
      navBtn.removeClass('is-open');
      navBtnIcon.addClass('fa-bars');
      navBtnIcon.removeClass('fa-times');
    } else {
      wrap.addClass('is-open');
      navBtn.addClass('is-open');
      navBtnIcon.addClass('fa-times');
      navBtnIcon.removeClass('fa-bars');
    }
    return false;
  };

  const cityActive = function() {
    const list = $('.city-nav ul');
    const icon = $('.city-nav a i');
    const btn = $('.city-nav a');
    if (list.hasClass('is-open') && btn.hasClass('is-open')) {
      list.removeClass('is-open');
      btn.removeClass('is-open');
      icon.addClass('fa-caret-down');
      icon.removeClass('fa-caret-up');
    } else {
      list.addClass('is-open');
      btn.addClass('is-open');
      icon.removeClass('fa-caret-down');
      icon.addClass('fa-caret-up');
    }
    return false;
  };

  $('.mobile-inner-btn').on('click', navActive);
  $('.mobile-nav-btn').on('click', navActive);
  $('.city-nav-button').on('click', cityActive);

  return $(window).scroll(function() {
    const header = $('#gl-head');
    if(($(window).scrollTop() > 100) && !header.hasClass('docked')) {
      return header.addClass('docked');
    } else if(($(window).scrollTop() <= 100) && header.hasClass('docked')) {
      return header.removeClass('docked');
    }
  });
});
