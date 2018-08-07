$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul.cat").prepend("<img src=\"image/cat.jpg\"><li>Hello Dawg!</li>");
      $("ul.dog").before("<img src=\"image/dog.gif\"><li>what's up kitty!</li>");
      $("ul.cat").children("li").first().click(function() {
        $(this).remove();
          });
    });

    $("button#goodbye").click(function() {
      $("ul.cat").prepend("<li>Goodbye!</li>");
        $("ul.dog").prepend("<li>Goodbye, cat!</li>");
        $("ul.cat").children("li").first().click(function() {
          $(this).remove();
            });
    });

    $("button#stop").click(function() {
      $("ul.cat").prepend("<li>Stop copying me!</li>");
        $("ul.dog").prepend("<li>No you stop!</li>");
        $("ul.cat").children("li").first().click(function() {
          $(this).remove();
            });
    });
  });
