$(function() {
  $('.gnb li').click(function(){
    $txt = $(this).text()
    $('.audth>h1').text($txt)
  })
})
