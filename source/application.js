stone = 0;
sps   = 0;
$(function(){
  kongregateAPI.loadAPI(function(){
    window.kongregate = kongregateAPI.getAPI();
  });
  $("#stone_number").text(stone);
  $("#center_stone").on("click", function(){
    stone++;
    console.log(stone);
  });
  setInterval(function(){
    stone += sps / 10;
    $("#stone_number").text(parseInt(stone));
  }, 100);
  var tool1 = new Tool(10, "hand punch", 0.1, "#tool_1");
});


Tool: {
  Tool = function(price, name, t_sps, tool_id) {
    this.price   = price;
    this.name    = name;
    this.t_sps   = t_sps;
    this.count   = 0;
    this.tool_id = tool_id;
    this.set_info(false);
    var self = this;
    $(this.tool_id).on("click", self.buy());
  };
  var p = Tool.prototype;

  p.set_info = function(update) {
    var info = $(this.tool_id).find(".tool_info");
    if(!update){
      info.find(".tool_name").text(this.name);
    }
    info.find(".tool_price_number").text(this.price);
    info.find(".tool_count_number").text(this.count);
    info.find(".tool_sps_number").text(this.t_sps);
  };
  p.buy = function() {
    console.log(this.price);
    stone -= this.price;
    sps   += this.t_sps;
    this.count++;
    this.price *= 1.15;
    this.set_info(true);
  };
}