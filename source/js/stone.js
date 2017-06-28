
function stones_init() {

  stones = [
    new Stone(0, 1000, 50)
  ];

  stones[0].set();
}


Stone: {
  Stone = function(stn_id, hp, recover) {
    this.stn_id  = stn_id;
    this.hp      = hp;
    this.recover = recover;
  };
  var p = Stone.prototype;

  p.set = function() {
    $("#center_stone").css({
      "background-image": "url(./source/stone_images/stone_"+this.stn_id+".png)"
    });
  }

  p.hp_update = function() {
    
  }


}