var stone = 0;
var sps   = 0;
$(function(){
  "use strict";
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
  var tool1 = new Tool(10, "hand punch", 0.1, "#tool_1");
});
class Tool {
  constructor(init_price, name, t_sps, tool_id){
    this.price   = init_price;
    this.name    = name;
    this.t_sps   = t_sps;
    this.count   = 0;
    this.tool_id = tool_id;
    this.set_info();
    $(this.tool_id).on("click", this.buy);
  }
  set_info(){
    var info = $(this.tool_id).find(".tool_info");
    info.find(".tool_name").text(this.name);
    info.find(".tool_price_number").text(this.price);
    info.find(".tool_count_number").text(this.count);
    info.find(".tool_sps_number").text(this.t_sps);
  }
  buy(){
    stone -= this.price;
    sps   += this.t_sps;
    this.count++;
    this.price *= 1.15;
  }
}