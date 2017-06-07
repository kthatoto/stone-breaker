stone = 0;
sps   = 0;
$(function(){
  // kongregateAPI.loadAPI(function(){
  //   window.kongregate = kongregateAPI.getAPI();
  // });
  $("#stone_number").text(stone);
  $("#center_stone").on("click", function(){
    stone++;
    stone = float_format(stone, 3);
  });
  setInterval(function(){
    stone += sps / 10;
    $("#stone_number").text(parseInt(stone));
    $("#sps_number").text(float_format(sps, 1));
  }, 100);

  $(".tool_more_info").hide();

  tools = [
    new Tool("hand punch",    10, 0.1, 1),
    new Tool("hand punch2",  100,   1, 2),
    new Tool("hand punch3",  300,   5, 3),
    new Tool("hand punch4", 1000,  15, 4),
  ];
  tools[0].init();
  upgrades = [
    new Upgrade("test01", 100, 1),
    new Upgrade("test02", 100, 2),
    new Upgrade("test03", 100, 3),
    new Upgrade("test04", 100, 4)
  ];
  $.each(upgrades, function(){
    this.init();
  });
});

function float_format(number, n) {
  var pow = Math.pow(10 , n) ;

  return Math.round(number * pow) / pow;
}