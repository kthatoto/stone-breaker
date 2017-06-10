
Upgrade: {
  Upgrade = function(name, price, u_id){
    this.name  = name;
    this.price = price;
    this.u_id  = u_id;
  };
  var p = Upgrade.prototype;

  p.init = function(){
    var self = this;
    $("#sale_upgrade_items").append(
      $("<div>").addClass("upgrade_item box").attr("id", "upgrade_"+self.u_id)
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
    $("#upgrade_" + this.u_id).appendTo("#purchased_upgrade_items");
    $("#upgrade_" + this.u_id).off("click");
    alert("purchased no." + this.u_id);
  }
}