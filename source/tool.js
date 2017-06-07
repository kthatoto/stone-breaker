
Tool: {
  Tool = function(name, price, t_sps, t_id) {
    this.name    = name;
    this.price   = price;
    this.t_sps   = t_sps;
    this.count   = 0;
    this.t_id    = t_id;
  };
  var p = Tool.prototype;

  p.init = function(){
    var self = this;
    this.set_info(false);
    this.more_info();
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
    $(".tool_more_info_btn").hover(function(e){
        var more_info = $(this).parent().siblings(".tool_more_info");
        more_info.show();
        // more_info.css({
        //   "top":  e.originalEvent.layerX,
        //   "left": e.originalEvent.layerY,
        // });
    });
    $(".tool_more_info").hover(function(){
    }, function(){
      $(this).hide();
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