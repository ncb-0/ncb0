$(() => {
  $(".item").mouseover(function() {
    $(this).attr("id", "hover");
    $(".item").not(this).attr("id", "");
  });
  // item mouseover hero image change
  $(".item#about").mouseover(function() {
    $(".hero").attr("id", "iabout");
  });
  $(".item#evas").mouseover(function() {
    $(".hero").attr("id", "ievas");
  });
  $(".item#fami").mouseover(function() {
    $(".hero").attr("id", "ifami");
  });
  $(".item#conejo").mouseover(function() {
    $(".hero").attr("id", "iconejo");
  });
  $(".item#sb").mouseover(function() {
    $(".hero").attr("id", "isb");
  });
  $(".item#yakui").mouseover(function() {
    $(".hero").attr("id", "iyakui");
  });
  $(".item#efs").mouseover(function() {
    $(".hero").attr("id", "iefs");
  });
  $(".item#pd9").mouseover(function() {
    $(".hero").attr("id", "ipd9");
  });
  $(".item#zine").mouseover(function() {
    $(".hero").attr("id", "izine");
  });
  $(".item#neet").mouseover(function() {
    $(".hero").attr("id", "ineet");
  });
  $(".item#manga").mouseover(function() {
    $(".hero").attr("id", "imanga");
  });
});