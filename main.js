$(() => {
  $(".item").mouseover(function() {
    $(this).attr("id", "hover");
    $(".item").not(this).attr("id", "");
  });
  // item mouseover hero image change
  $(".item#asb").mouseover(function() {
    $(".hero").attr("id", "sb");
  });
  $(".item#apiraba").mouseover(function() {
    $(".hero").attr("id", "piraba");
  });
  $(".item#ayakui").mouseover(function() {
    $(".hero").attr("id", "yakui");
  });
  $(".item#aitemlabel").mouseover(function() {
    $(".hero").attr("id", "itemlabel");
  });
  $(".item#acrushed").mouseover(function() {
    $(".hero").attr("id", "crushed");
  });
  $(".item#aefs").mouseover(function() {
    $(".hero").attr("id", "efs");
  });
  $(".item#apd9").mouseover(function() {
    $(".hero").attr("id", "pd9");
  });
  $(".item#azine").mouseover(function() {
    $(".hero").attr("id", "zine");
  });
  $(".item#aneet").mouseover(function() {
    $(".hero").attr("id", "neet");
  });
});