var $ = jQuery

function _scrollToContent() {
  $('#scroll-bottom').on('click', function() {
    $('html, body').animate({
      scrollTop: $("#main-content").offset().top - 102
    }, 1200);
  })
}

function _asyncImagesOnScrollLoading() {
  $(window).scroll(function() {
    $.each($('img'), function() {
        if ( $(this).attr('data-src') && $(this).offset().top < ($(window).scrollTop() + $(window).height() + 100) ) {
            var source = $(this).data('src');
            $(this).attr('src', source);
            $(this).removeAttr('data-src');
        }
    })
  })
}

$('document').ready(function() {
  _scrollToContent()

  _asyncImagesOnScrollLoading()
})