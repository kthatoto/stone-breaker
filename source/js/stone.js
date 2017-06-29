
function stones_init() {

  stone_id = 0;

  stones = [
    new Stone(0, 1000,   50,  1000),
    new Stone(1, 10000, 500, 10000),
  ];

  stones[0].available = true;
  stones[0].set();
}


Stone: {
  Stone = function(stn_id, hp, recover, reward) {
    this.stn_id    = stn_id;
    this.max_hp    = hp;
    this.hp        = hp;
    this.recover   = recover;
    this.reward    = reward;
    this.available = true;
  };
  var p = Stone.prototype;

  p.set = function() {
    $("#center_stone").css({
      "background-image": "url(./source/stone_images/stone_"+this.stn_id+".png)"
    });
    $("#stone_prev_btn, #stone_next_btn").show().off("click");

    var keys = {"prev": -1, "next": 1};

    var self = this;
    $.each(keys, function(key, crement){
      if(stones[self.stn_id + crement] && stones[self.stn_id + crement].available){
        $("#stone_"+key+"_btn").on("click", function(){
          stone_id += crement;
          stones[stone_id].set();
        });
      } else {
        $("#stone_"+key+"_btn").hide();
      }
    });
  }

  p.update = function() {

    this.hp -= atk/10;
    this.hp += this.recover/10;
    if(this.max_hp < this.hp) { this.hp = this.max_hp }
    $("#stone_hp_bar").css("width", float_format(this.hp / this.max_hp, 3)*100 + "%");
    if(this.hp <= 0){ this.destroy(); }
  }

  p.destroy = function() {
    stone += this.reward;
    // cores[this.stn_id].count++;
    this.hp = this.max_hp;
  }


}