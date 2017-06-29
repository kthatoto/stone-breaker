
function stones_init() {

  stone_id = 0;

  stones = [
    new Stone(0, 1000, 50)
  ];

  stones[0].set();
}


Stone: {
  Stone = function(stn_id, hp, recover) {
    this.stn_id  = stn_id;
    this.max_hp  = hp;
    this.hp      = hp;
    this.recover = recover;
  };
  var p = Stone.prototype;

  p.set = function() {
    $("#center_stone").css({
      "background-image": "url(./source/stone_images/stone_"+this.stn_id+".png)"
    });
  }

  p.update = function() {

    this.hp -= atk/10;
    this.hp += this.recover/10;
    if (this.max_hp < this.hp) { this.hp = this.max_hp }
    $("#stone_hp_bar").css("width", float_format(this.hp / this.max_hp, 3)*100 + "%");
  }


}