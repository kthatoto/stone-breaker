
function achievement_init() {
  achievements = {
    "click_count": [
      new Achievement("1001", "click!", achieve_click_count(10), null),
      new Achievement("1002", "click!!", achieve_click_count(15), null),
    ],
    "click_quantity": [
      new Achievement("1101", "click!", achieve_click_count(20), null),
      new Achievement("1102", "click!", achieve_click_count(25), null),
    ],
    "tool0_count": [
    ],
  };
  $.each(achievements, function(type, achs){
    $.each(achs, function() {
      this.init(this.a_id);
    });
  });
}



function achieve_click_count(line){
  return function() {
    return line <= stats.click_count;
  }
}
function achieve_click_quantity(line){
  return function() {
    return line <= stats.click_quantity;
  }
}

function achieve_check(type) {
  var achs = achievements[type];
  $.each(achs, function(){
    if(!this.achieved){
      if(this.condition()){
        this.achieved = true;
        this.gain();
        if(this.reward) this.reward();
      } else {
        return false;
      }
    }
  });
}









Achievement: {
  Achievement = function(a_id, name, condition, reward) {
    this.a_id      = a_id;
    this.name      = name;
    this.achieved  = false;
    this.condition = condition;
    this.reward    = reward;
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