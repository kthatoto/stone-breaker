var stone = 0;
var sps   = 0;
$(function(){
  kongregateAPI.loadAPI(function(){
    window.kongregate = kongregateAPI.getAPI();
  });
  $("#stone_number").text(stone);
  $("#center_stone").on("click", function(){
    stone++;
  });
  setInterval(function(){
    stone += sps / 10;
    $("#stone_number").text(parseInt(stone));
  }, 100);
});