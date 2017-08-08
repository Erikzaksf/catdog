$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#meow").prepend("<li>Meow</li>");
    $("ul#woof").prepend("<li>Woof!</li>");
  });

  $("button#dog").click(function() {
    $("ul#woof").prepend("<li>Woof!</li>");
    $("ul#meow").prepend("<li>Meow</li>");
  });

});
