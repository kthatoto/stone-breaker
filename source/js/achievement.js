
function achievement_init() {
  achievements = {
    "101": new Achievement("tiny punch"),
    "102": new Achievement("small punch"),
    "103": new Achievement("punch!"),
    "1001": new Achievement("nice click"),
    "1002": new Achievement("nice click"),
    "1003": new Achievement("nice click"),
    "1101": new Achievement("nice click"),
    "1102": new Achievement("nice click"),
    "1103": new Achievement("nice click"),
  };
  $.each(achievements, function(a_id, ach){
    ach.init(a_id);
  });
}

Achievement: {
  Achievement = function(name) {
    this.name     = name;
    this.achieved = false;
  }
  var p = Achievement.prototype;

  p.init = function(a_id) {
    this.a_id = a_id;
    var self = this;
    $("#achievement_items").append(
      $("<div>").addClass("achievement_item box")
                .attr("id", "achievement_"+self.a_id)
    );
    $("#achievement_" + this.a_id).append(
      $("<div>").addClass("gray_cover")
    );
    $("#achievement_" + this.a_id).hover(function(){
      // 詳細を表示する
    });
  }

  p.gain = function() {
    $("#achievement_" + this.a_id).children(".gray_cover").remove();
    this.achieved = true;
  }
}

function achieve_check(category, params) {
  var au_id = 0;
  function release_upgrade(u_id){
    if(upgrades[u_id] && !upgrades[u_id].appear) {
      upgrades[u_id].init(u_id);
    }
  }
  switch(category){

    case "tool_count":
      var count = params["count"];
      var achieve_counts = [10, 25, 50, 100];
      if(0 <= achieve_counts.indexOf(count)) {
        au_id = 100*params["t_id"] + achieve_counts.indexOf(count) + 1;
        achievements[au_id].gain();
      }
      break;

    case "click":
      function click_achieve_check(key_name, achieve_array, base_id){
        var num = params[key_name];
        var key = get_count_key(num, achieve_array);
        if(0 <= key) {
          au_id = base_id + key + 1;
          if(achievements[au_id] && !achievements[au_id].achieved){
            achievements[au_id].gain();
          }
          release_upgrade(au_id);
        }
      }
      click_achieve_check("count", [5,10,15], 1000);
      click_achieve_check("quant", [5,10,15], 1100);
      break;
  }
}









