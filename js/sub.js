
// 코드실행
$(function () {

  // 윈도우 스크롤 시 실행
  $(window).scroll(function () {

    // 스크롤 위치가 100px을 넘으면,
    if ($(this).scrollTop() > 100) {

      // .header_scrolled 클래스가 추가된다.
      $(".bg1").addClass("header_scrolled");
    } else {
      // 스크롤이 위로 올라가면 클래스 제거
      $(".bg1").removeClass("header_scrolled");
    }
  });

  // 마우스를 올렸을 때(hover 시)
  $(".bg1").hover(function () {

    // header_scrolled 클래스 제거
    $(this).removeClass("header_scrolled");
  },
    // 마우스가 나갔을 때 실행할 로직을 따로 정의
    // hover는 들어올 때/ 나갈 때 동작이 다르기 때문에, 각각의 동작을 처리하려고 function 실행문을 두개 쓰는 것이다.
    function () {
      // 마우스가 나갔을 때, 스크롤 위치가 100px 이상이면 다시 header_scrolled 클래스를 추가한다.
      if ($(window).scrollTop() > 100) {
        $(this).addClass("header_scrolled");
      }
    }
  );
});


var swiper = new Swiper('.detail', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
