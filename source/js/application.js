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

  tools_init();

  upgrades_init();
});

function update_sps(){
  var new_sps = 0;
  $.each(tools, function(){
    new_sps += (this.count * this.t_sps);
  });
  sps = new_sps;
}

function float_format(number, n) {
  var pow = Math.pow(10 , n);
  return Math.round(number * pow) / pow;
}