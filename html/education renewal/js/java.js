$(function(){


  $('.main nav>ul>li').mouseover(function(){
    $(this).children('div').css('display','block')
  })
  $('.main nav>ul>li').mouseout(function(){
    $(this).children('div').css('display','none')
  })





  $('.user_box>ul>li').click(function(){
    $('.user_box>ul>li>a').removeClass('user_on')
    $(this).children('a').addClass('user_on')

    $('.user_box>ul>li>ul').css('display', 'none')
    $(this).children('ul').css('display', 'block')
  })


  $(".notice").children("p").click(function() {
    $('.news_con').removeClass('notice_z')
    $('.notice_con').addClass('notice_z')
  })

  $(".warning").children("p").click(function() {
    $('.news_con').removeClass('notice_z')
    $('.advance_con').addClass('notice_z')
  })

  $(".test_info").children("p").click(function() {
    $('.news_con').removeClass('notice_z')
    $('.test_con').addClass('notice_z')
  })



  $('.title_dox>div>p').click(function(){
    $('.title_dox>div>p').removeClass('new_on')
    $(this).addClass('new_on')
  })


  $('.1_up').click(function(){
    $('.rash_1_cont ul').css('top','+=200px')
  })

  $('.1_down').click(function(){
    $('.rash_1_cont ul').css('top','-=200px')
  })


  $('.2_up').click(function(){
    $('.rash_2_cont ul').css('top','+=200px')
  })

  $('.2_down').click(function(){
    $('.rash_2_cont ul').css('top','-=200px')
  })





})
