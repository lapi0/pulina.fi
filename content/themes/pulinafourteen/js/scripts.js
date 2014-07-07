$(document).ready(function() {

$(".progressBar").load('http://pulina.dev/content/themes/pulinafourteen/inc/tanaan-pulistu.php');
   var refreshId = setInterval(function() {
      $(".progressBar").load('http://pulina.dev/content/themes/pulinafourteen/inc/tanaan-pulistu.php');
      $(".irclog").load('http://pulina.dev/content/themes/pulinafourteen/inc/scroller.php');
   }, 1000);
   $.ajaxSetup({ cache: true });
   
   //Chromelle, ettei lataa loputtomiin:
   // setTimeout("window.stop()",30000);

if (window.innerWidth > 600) {

$(".kayttajat").css({'height':($(".frontpage").outerHeight()+'px')});
$(".ministats div").css({'height':($(".kayttajat-yhteensa").outerHeight()+'px')});

$(window).on('resize', function() {

	if (window.innerWidth > 600) {
		$(".kayttajat").css({'height':($(".frontpage").outerHeight()+'px')});
		$(".ministats div").css({'height':($(".kayttajat-yhteensa").outerHeight()+'px')});
	}

});

}

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

$("body").find("a").wrapInner("<span/>")
$("span").each(function() {
$(this).attr("data-title", $(this).text());
});

});