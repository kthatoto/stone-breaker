
function achievement_init() {
  achievements = {
    "101": new Achievement("tiny punch"),
    "102": new Achievement("small punch"),
    "103": new Achievement("punch!"),
    "1001": new Achievement("nice click"),

    "1002": new Achievement("nice click"),
    "1003": new Achievement("nice click"),
  };
  $.each(achievements, function(a_id, ach){
    ach.init(a_id);
  });
}

Achievement: {
  Achievement = function(name) {
    this.name = name;
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
  }
}

function achieve_check(category, params) {
  switch(category){
    case "tools_count":
      var count = params["count"];
      var achieve_counts = [10, 25, 50, 100];
      if(0 <= achieve_counts.indexOf(count)) {
        var a_id = 100*params["t_id"] + achieve_counts.indexOf(count) + 1;
        achievements[a_id].gain();
      }
      break;
  }
}









