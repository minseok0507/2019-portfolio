$(function() {

  $('.back ul').find('li:gt(0)').fadeOut();
  setInterval(function() {
    $('.back ul').find('li:first').stop().fadeOut(1000).next().fadeIn(1000).end().appendTo('.back ul')
  }, 6000)

  $('.map span').click(function() {
    $('.popup').css('display', 'block')
    txt = $(this).text()
    $('.popup').children('h1').text(txt)

  })

  $('.head').click(function() {
    $('.popup').css('display', 'none')
  })


})
