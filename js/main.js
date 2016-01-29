(function swapTopSectionClass() {
  var top_container = document.querySelector(".top");
  var nav_a = document.querySelectorAll(".navbar a");
  var node;
  var i = 0;
  var blogEntries = document.querySelectorAll(".container.posts");

  if (window.location.pathname.indexOf("/blog/") === 0) {
    top_container.classList.remove("top-home", "top-work", "top-dailyui");
    top_container.classList.add("top-blog");

    for (i=0; i < nav_a.length; i++) {
      node = nav_a[i];
    }

    for (i=0; i < blogEntries.length; i++) {
      node = blogEntries[i];

      if (window.location.pathname.length > 6) {
        node.classList.remove("blog");
      } else {
        node.classList.add("blog");
      }
    }
  }

  else if (window.location.pathname.indexOf("/work/") === 0) {
    top_container.classList.remove("top-home", "top-blog", "top-dailyui");
    top_container.classList.add("top-work");

    for (i=0; i < nav_a.length; i++) {
      node = nav_a[i];
    }

  }

  // else if (window.location.pathname.indexOf("/dailyui/") === 0) {
  //   top_container.classList.remove("top-home", "top-blog", "top-work")
  //   top_container.classList.add("top-dailyui")
  //
  //   for (i=0; i < nav_a.length; i++) {
  //     node = nav_a[i];
  //   }
  // }

  else if (window.location.pathname == "/") {
    top_container.classList.remove("top-blog", "top-work", "top-dailyui");
    top_container.classList.add("top-home");
  }

  // this is a dailyui
  else {
    console.log(window.location.pathname);
    top_container.classList.remove("top-home", "top-work", "top-blog");
    top_container.classList.add("top-dailyui");

    for (i=0; i < nav_a.length; i++) {
      node = nav_a[i];
    }
  }

  if (window.location.pathname == "/") {
    $('body').css('display', 'block');
    // $('nav').css("background", 'rgba(255,255,255,0.1)');
  } else {
    $('body').css({
      'display': '-webkit-flex'
    });
  }

})();

$(".card ol a:eq(0)").click(function(){$("html,body")
  .animate({scrollTop:$("#logo")
  .offset().top},"500");
  return false;
});

// ol no. 0 #logo
$(".card ol a:eq(0)").click(function(){$("html,body")
  .animate({scrollTop:$("#logo").offset().top},"500");return false;});
// ol no. 1 #typography
$(".card ol a:eq(1)").click(function(){$("html,body")
  .animate({scrollTop:$("#typography").offset().top},"500");return false;});
// ol no. 2 #usability
$(".card ol a:eq(2)").click(function(){$("html,body")
  .animate({scrollTop:$("#usability").offset().top},"500");return false;});
  // ol no. 2 #content-storytelling
$(".card ol a:eq(6)").click(function(){$("html,body")
  .animate({scrollTop:$("#content-storytelling").offset().top},"500");return false;});
// ol no. 2 #tech-challenges-solutions
$(".card ol a:eq(7)").click(function(){$("html,body")
  .animate({scrollTop:$("#tech-challenges-solutions").offset().top},"500");return false;});
// ol no. 2 #workflow-optimization
$(".card ol a:eq(8)").click(function(){$("html,body")
  .animate({scrollTop:$("#workflow-optimization").offset().top},"500");return false;});

window.onload = function() {
  var elementButton = document.querySelector('.elevator');
  var elevator = new Elevator({
      element: elementButton,
      duration: 500
  });
  elevator.elevate();
};
