

stone = 0;
sps   = 0; // stone per second

click_info = {
  "spc": 1,
  "autoclick_count": 0,
  "base_click_power": 1,
  "multi_click_power": 1,
  update_spc: function(){
    this.spc = this.base_click_power * this.multi_click_power;
  }
};

atk = 0;

// 統計
stats = {
  "click_count": 0,
  "click_gain": 0,
};

$(function(){
  // kongregateAPI.loadAPI(function(){
  //   window.kongregate = kongregateAPI.getAPI();
  // });
  $("#stone_number").text(stone);

  // クリック
  $("#center_stone").on("click", function(){
    click_stone(1);
  });
  // 自動クリック
  setInterval(function(){
    if(0 <click_info["autoclick_count"]) {
      click_stone(click_info["autoclick_count"]);
    }
  }, 1000);

  // 0.1秒ごとにstone取得
  setInterval(function(){
    stone += sps / 10;
    $("#stone_number").text(parseInt(stone));
  }, 100);

  $(".tool_more_info").hide();

  stones_init();
  tools_init();
  upgrades_init();
  achievement_init();
});
function click_stone(num) {
  stone += click_info["spc"]*num;
  stone = float_format(stone, 3);

  stats["click_count"]+= num;
  stats["click_gain"] += click_info["spc"]*num;
  // 実績確認
  achieve_check("click_count");
  achieve_check("click_quantity");
}


function update_sps() {
  var new_sps = 0;
  $.each(tools, function(){
    new_sps += (this.count * this.t_sps);
  });
  sps = new_sps;
  $("#sps_number").text(float_format(sps, 1));
}
function update_atk() {
  var new_atk = 0;
  $.each(tools, function(){
    new_atk += (this.count * this.t_atk);
  });
  atk = new_atk;
  $("#atk_number").text(float_format(atk, 1));
}

function float_format(number, n) {
  var pow = Math.pow(10 , n);
  return Math.round(number * pow) / pow;
}

function get_count_key(count, array) {
  var key = -1;
  $.each(array, function(i, a_count) {
    if(a_count <= count){
      key = i;
    } else {
      return false;
    }
  });
  return key;
}




