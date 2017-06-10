
function upgrades_init(){
  upgrades = {
    "101": new Upgrade("test01", 100, multiplier_production(1, 2)),
    "201": new Upgrade("test02", 100, multiplier_production(2, 2)),
    "301": new Upgrade("test03", 100, multiplier_production(3, 2)),
    "401": new Upgrade("test04", 100, multiplier_production(4, 2))
  };
}

Upgrade: {
  Upgrade = function(name, price, func){
    this.name  = name;
    this.price = price;
    this.func  = func;
  };
  var p = Upgrade.prototype;

  p.init = function(u_id){
    this.u_id = u_id;
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



