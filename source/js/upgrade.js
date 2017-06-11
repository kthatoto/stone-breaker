
function upgrades_init(){
  upgrades = {
    "101": new Upgrade("test01", 100, multiplier_production(1, 2)),
    "201": new Upgrade("test02", 100, multiplier_production(2, 2)),
    "301": new Upgrade("test03", 100, multiplier_production(3, 2)),
    "401": new Upgrade("test04", 100, multiplier_production(4, 2)),
    "1001": new Upgrade("auto click" , 1000, increment_autoclick(1)),
    "1002": new Upgrade("auto click2", 1000, increment_autoclick(2)),
    "1101": new Upgrade("click power", 1000, increment_click_power(1)),
  };
}

Upgrade: {
  Upgrade = function(name, price, func){
    this.name   = name;
    this.price  = price;
    this.func   = func;
    this.appear = false;
  };
  var p = Upgrade.prototype;

  p.init = function(u_id){
    this.u_id = u_id;
    this.appear = true;
    var self = this;
    $("#sale_upgrade_items").append(
      $("<div>").addClass("upgrade_item box")
                .attr("id", "upgrade_"+self.u_id)
    );
    $("#upgrade_" + this.u_id).on("click", function(){
      if(self.price <= stone){
        self.buy();
      }
    });
  }

  p.buy = function(){
    stone -= this.price;
    stone = float_format(stone, 3);
    var upgrade = $("#upgrade_" + this.u_id);
    upgrade.appendTo("#purchased_upgrade_items");
    upgrade.off("click");
    this.func();
  }
}

function multiplier_production(t_id, multiple_num){
  return function(){
    tools[t_id - 1].t_sps *= multiple_num;
    tools[t_id - 1].set_info(true);
    update_sps();
  }
}
function increment_autoclick(num){
  return function() {
    click_info["autoclick_count"] += num;
  }
}
function increment_click_power(num){
  return function() {
    click_info["base_click_power"] += num;
    click_info.update_spc();
  }
}


