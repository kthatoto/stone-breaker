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
class Tool {
  constructor(init_price, name, t_sps){
    this.price = init_price;
    this.name  = name;
    this.t_sps = t_sps;
    this.count = 0;
  }
  buy(){
    sps += this.t_sps;
    count++;
    this.price *= 1.15;
  }
}