$(function () {
  console.clear();
  // cursor이벤트 시작
  const $cursor = $(".cursor");
  const $cursorSahdow1 = $(".cursor_shadow1");

  $(window).mousemove(function (e) {
    $cursor.css({
      top: e.clientY,
      left: e.clientX,
    });

    $cursorSahdow1.css({
      top: e.clientY,
      left: e.clientX,
    });
  });

  $(".itemimg").mouseenter(function () {
    $cursor.css({
      width: 100,
      height: 100,
    });
    $(".itemimg").mouseleave(function () {
      $cursor.css({
        width: 30,
        height: 30,
      });
    });
    $(".mainArea").mouseleave(function () {
      $cursor.css({
        width: 30,
        height: 30,
      });
    });
  });

  // cursor이벤트 끝

  // title 이벤트 시작

  const title1 = gsap.timeline({});

  title1.to(".title>span>span", {
    opacity: 1,
    duration: 0.5,
    stagger: 0.2,
  });

  title1.to(".title2 >span >span", {
    opacity: 1,
    duration: 0.5,
    stagger: 0.2,
  });

  title1.to(".title3 >span >span", {
    opacity: 1,
    duration: 0.5,
    stagger: 0.2,
  });

  title1.to(".title4 >span >span", {
    opacity: 1,
    duration: 0.5,
    stagger: 0.2,
  });

  title1.from(".title5 > span > span", {
    opacity: 0,
    y: 300,
    duration: 0.5,
    stagger: 0.2,
  });

  title1.to(".title6 >p", {
    opacity: 1,
    duration: 0.5,
    stagger: 0.2,
  });

  // title 이벤트 끝

  // 스크롤 트리거 플러그인 활성화

  gsap.registerPlugin(ScrollTrigger);

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".title_area",
      start: "top bottom-=100",
      end: "bottom+=200 100%-=300",
      scrub: true,
      stagger: 0.5,
      onEnter: function () {
        // 위에서 아래로 내려오다가 트리거 엘리먼트의 정수리를 발견했을 때
        $("body").addClass("back");
      },
      onLeave: function () {
        // 위에서 아래로 내려오다가 트리거 엘리먼트의 발끝을 지나쳤을 때
        $("body").removeClass("back");
      },
      onEnterBack: function () {
        // 아래에서 위로 올라오다가 트리거 엘리먼트의 발끝을 발견했을 때
        $("body").addClass("back");
      },
      onLeaveBack: function () {
        // 아래에서 위로 올라오다가 트리거 엘리먼트의 정수리를 지나쳤을 때
        $("body").removeClass("back");
      },
    },
    "(max-width : 768px)": function () {
      tl1.to(".title_area > span:first-child", {
        x: 400,
      });

      tl1.to(".title_area > span:last-child", {
        x: 700,
      });
    },
  });

  tl1.to(".title_area > span:first-child", {
    x: 600,
    opacity: 1,
    duration: 8,
  });

  tl1.to(".title_area > span:last-child", {
    x: 800,
    opacity: 1,
    duration: 8,
  });

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".mainArea_item1",
      start: "center-=200 bottom-=100",
      end: "bottom-=400 100%-=300",
      scrub: true,
      onEnter: function () {
        $("body").addClass("back2");
      },
      onLeave: function () {
        $("body").removeClass("back");
      },
      onEnterBack: function () {
        $("body").addClass("back2");
      },
      onLeaveBack: function () {
        $("body").removeClass("back2");
      },
    },
  });

  tl2.to(".mainArea_item1>.secText>.logoBox", {
    x: 0,
    opacity: 1,
  });
  tl2.to(".mainArea_item1>.secText>p:nth-child(2)", {
    x: 0,
    opacity: 1,
  });
  tl2.to(".mainArea_item1>.secText>p:nth-child(3)", {
    x: 0,
    opacity: 1,
  });
  tl2.to(".mainArea_item1>.secText>a", {
    x: 0,
    opacity: 1,
  });

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".mainArea_item2",
      start: "center-=200 bottom-=100",
      end: "bottom-=400 100%-=300",
      scrub: true,
      onEnter: function () {
        // 위에서 아래로 내려오다가 트리거 엘리먼트의 정수리를 발견했을 때
        $(".mainArea_item1>.secText").css("opacity", "0"),
          $("body").addClass("back3");
      },
      onLeave: function () {},
      onEnterBack: function () {},
      onLeaveBack: function () {
        // 아래에서 위로 올라오다가 트리거 엘리먼트의 정수리를 지나쳤을 때
        $(".mainArea_item1>.secText").css("opacity", "1"),
          $("body").removeClass("back3");
      },
    },
  });

  tl3.to(".mainArea_item2>.secText>.logoBox", {
    x: 0,
    opacity: 1,
  });
  tl3.to(".mainArea_item2>.secText>p:nth-child(2)", {
    x: 0,
    opacity: 1,
  });
  tl3.to(".mainArea_item2>.secText>p:nth-child(3)", {
    x: 0,
    opacity: 1,
  });
  tl3.to(".mainArea_item2>.secText>a", {
    x: 0,
    opacity: 1,
  });

  //.mainArea_item2끝

  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".mainArea_item3",
      start: "center-=200 bottom-=100",
      end: "bottom-=400 100%-=300",
      scrub: true,
      onEnter: function () {
        // 위에서 아래로 내려오다가 트리거 엘리먼트의 정수리를 발견했을 때
        $(".mainArea_item2>.secText").css("opacity", "0"),
          $("body").addClass("back4");
      },
      onLeave: function () {},
      onEnterBack: function () {},
      onLeaveBack: function () {
        $(".mainArea_item2>.secText").css("opacity", "1"),
          $("body").removeClass("back4");
      },
    },
  });

  tl4.to(".mainArea_item3>.secText>.logoBox", {
    x: 0,
    opacity: 1,
  });
  tl4.to(".mainArea_item3>.secText>p:nth-child(2)", {
    x: 0,
    opacity: 1,
  });
  tl4.to(".mainArea_item3>.secText>p:nth-child(3)", {
    x: 0,
    opacity: 1,
  });
  tl4.to(".mainArea_item3>.secText>a", {
    x: 0,
    opacity: 1,
  });

  //.mainArea_item3끝

  const tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".mainArea_item4",
      start: "center-=200 bottom-=100",
      end: "bottom-=400 100%-=300",
      scrub: true,
      onEnter: function () {
        // 위에서 아래로 내려오다가 트리거 엘리먼트의 정수리를 발견했을 때
        $(".mainArea_item3>.secText").css("opacity", "0"),
          $("body").addClass("back5");
      },
      onLeave: function () {},
      onEnterBack: function () {},
      onLeaveBack: function () {
        $(".mainArea_item3>.secText").css("opacity", "1"),
          $("body").removeClass("back5");
      },
    },
  });
  tl5.to(".mainArea_item4>.secText>.logoBox", {
    x: 0,
    opacity: 1,
  });
  tl5.to(".mainArea_item4>.secText>p:nth-child(2)", {
    x: 0,
    opacity: 1,
  });
  tl5.to(".mainArea_item4>.secText>p:nth-child(3)", {
    x: 0,
    opacity: 1,
  });
  tl5.to(".mainArea_item4>.secText>a", {
    x: 0,
    opacity: 1,
  });
  //.mainArea_item4끝

  const tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".mainArea_item5",
      start: "center-=200 bottom-=100",
      end: "bottom-=400 100%-=300",
      scrub: true,
      onEnter: function () {
        // 위에서 아래로 내려오다가 트리거 엘리먼트의 정수리를 발견했을 때
        $(".mainArea_item4>.secText").css("opacity", "0"),
          $("body").addClass("back6");
      },
      onLeave: function () {},
      onEnterBack: function () {},
      onLeaveBack: function () {
        $(".mainArea_item4>.secText").css("opacity", "1"),
          $("body").removeClass("back6");
      },
    },
  });
  tl6.to(".mainArea_item5>.secText>.logoBox", {
    x: 0,
    opacity: 1,
  });
  tl6.to(".mainArea_item5>.secText>p:nth-child(2)", {
    x: 0,
    opacity: 1,
  });
  tl6.to(".mainArea_item5>.secText>p:nth-child(3)", {
    x: 0,
    opacity: 1,
  });
  tl6.to(".mainArea_item5>.secText>a", {
    x: 0,
    opacity: 1,
  });
  //.mainArea_item5끝

  const tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: ".mainArea_item6",
      start: "center-=200 bottom-=100",
      end: "bottom-=400 100%-=300",
      scrub: true,
      onEnter: function () {
        // 위에서 아래로 내려오다가 트리거 엘리먼트의 정수리를 발견했을 때
        $(".mainArea_item5>.secText").css("opacity", "0"),
          $("body").addClass("back7");
      },
      onLeave: function () {},
      onEnterBack: function () {},
      onLeaveBack: function () {
        $(".mainArea_item5>.secText").css("opacity", "1"),
          $("body").removeClass("back7");
      },
    },
  });
  tl7.to(".mainArea_item6>.secText>.logoBox", {
    x: 0,
    opacity: 1,
  });
  tl7.to(".mainArea_item6>.secText>p:nth-child(2)", {
    x: 0,
    opacity: 1,
  });
  tl7.to(".mainArea_item6>.secText>p:nth-child(3)", {
    x: 0,
    opacity: 1,
  });
  tl7.to(".mainArea_item6>.secText>a", {
    x: 0,
    opacity: 1,
  });
  //.mainArea_item6끝

  // titleBox2

  const title2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".titleBox2",
      start: "top+=200 bottom-=200",
      end: "bottom+=200 100%-=300",
      scrub: true,
      onEnter: function () {
        // 위에서 아래로 내려오다가 트리거 엘리먼트의 정수리를 발견했을 때
        $(".mainArea_item6>.secText").css("opacity", "0"),
          $("body").addClass("back8");
      },
      onLeave: function () {},
      onEnterBack: function () {},
      onLeaveBack: function () {
        $(".mainArea_item6>.secText").css("opacity", "1"),
          $("body").removeClass("back8");
      },
    },
  });

  title2.to(".titleBox2>.titleBox2_box>span", {
    duration: 2,

    opacity: 1,
    stagger: 1,
  });

  title2.to(".titleBox3>.titleBox3_box>span", {
    duration: 2,

    opacity: 1,
    stagger: 1,
  });
});
