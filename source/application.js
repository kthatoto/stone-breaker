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
    new Tool(10,   "hand punch",  0.1, 1),
    new Tool(100,  "hand punch2", 1,   2),
    new Tool(300,  "hand punch3", 5,   3),
    new Tool(1000, "hand punch4", 15,  4),
  ];
  tools[0].init();
});

Tool: {
  Tool = function(price, name, t_sps, t_id) {
    this.price   = price;
    this.name    = name;
    this.t_sps   = t_sps;
    this.count   = 0;
    this.t_id    = t_id;
  };
  var p = Tool.prototype;

  p.init = function(){
    this.set_info(false);
    this.more_info();
    var self = this;
    $("#tool_" + this.t_id).on("click", function(){
      if(self.price <= stone){
        if(self.count == 0) self.next_tool();
        self.buy();
        self.set_info(true);
      }
    });
  }

  p.next_tool = function(){
    if(tools[this.t_id]) {
      var new_tool_box = $("#tools_box > div:first-child").clone();
      new_tool_box.children(".tool_more_info").hide();
      new_tool_box.attr("id", "tool_" + (this.t_id + 1)).appendTo("#tools_box");
      tools[this.t_id].init();
    }
  }
  p.more_info = function(){
    $("#tool_" + this.t_id).hover(
      function(e){
        var more_info = $(this).children(".tool_more_info");
        more_info.show();
        // more_info.css({
        //   "top":  e.originalEvent.layerX,
        //   "left": e.originalEvent.layerY,
        // });
    },function(e){
        $(this).children(".tool_more_info").hide();
    });
  }

  p.set_info = function(update) {
    var info = $("#tool_" + this.t_id).find(".tool_info");
    if(!update){
      info.find(".tool_name").text(this.name);
    }
    info.find(".tool_price_number").text(this.price);
    info.find(".tool_count_number").text(this.count);
    info.find(".tool_sps_number").text(this.t_sps);
  };
  p.buy = function() {
    stone -= this.price;
    sps   += this.t_sps;
    this.count++;
    this.price *= 1.15;
    stone = float_format(stone, 3);
    this.price = parseInt(this.price);
  };
}

function float_format(number, n) {
  var pow = Math.pow(10 , n) ;

  return Math.round(number * pow) / pow;
}