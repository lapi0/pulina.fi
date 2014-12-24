$(document).ready(function(){

// Valikko
$(".menu").flexNav({
    "hover": true,
    "hoverIntent": false,
    "hoverIntentTimeout": 0,
    "animationSpeed": 0,
    "transitionOpacity": false,
    "calcItemWidths": false
});

$('.slide-irclog, .irclog, .slide-placeholder').css('height', window.innerHeight);
    $(window).resize(function(){
        $('.slide-irclog, .irclog, .slide-placeholder').css('height', window.innerHeight);
});

$(".slide-irclog, .irclog").hover(function () {
        setTimeout(function() {
            $(".slide-irclog .shade").addClass("hidden");
        }, 1000);
    $(".slide-irclog h2, .slide-irclog p, .slide-irclog span").addClass("hover");
    $(".slide-irclog .btn").addClass("hover-btn");
}, function () {
        setTimeout(function() {
            $(".slide-irclog .shade").removeClass("hidden");
        }, 1000);
    $(".slide-irclog h2, .slide-irclog p, .slide-irclog span").removeClass("hover");
    $(".slide-irclog .btn").removeClass("hover-btn");
});

$('.firstcontainer').waypoint(function(){
    $('.burger').toggleClass('over-the-edge');
},{offset:'0'});

// console anim
var dataName, inserChar, inserClass, jAnimConsole, separator;

inserChar = '<span class="cursor"></span>';
separator = ';';
dataName = "list";
inserClass = "inserChar";

jAnimConsole = function() {
  // var blinkAnim, currentChar, currentWord, htmlInser, list, out, printWord, timeBwtLetters, timeBwtWords;
  var currentChar, currentWord, htmlInser, list, out, printWord, timeBwtLetters, timeBwtWords;
    out = $(this);
  list = $(this).data(dataName).split(separator);
  htmlInser = "<span class=" + inserClass + ">" + inserChar + "</span>";
  out.html(htmlInser);
  // blinkAnim = function() {
  //   $("." + inserClass).delay(1000).hide(100).delay(1000).show(100);
  //   $("." + inserClass).queue(function(next) {
  //     next();
  //     blinkAnim();
  //   });
  // };
  currentWord = 0;
  currentChar = 1;
  timeBwtLetters = 60;
  timeBwtWords = 4000;
  printWord = function() {
    var substr;
    substr = list[currentWord].substr(0, currentChar++);
    out.html("" + substr + htmlInser);
    if (currentChar <= list[currentWord].length) {
      return setTimeout(printWord, timeBwtLetters);
    } else {
      // setTimeout(blinkAnim, timeBwtLetters);
      currentWord = (currentWord + 1) % list.length;
      currentChar = 1;
      return setTimeout(printWord, timeBwtWords);
    }
  };
  setTimeout(printWord, 0);
};

$(".type p").each(jAnimConsole);

});