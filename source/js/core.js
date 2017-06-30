function stones_init() {

  cores = [
    new Core(0),
    new Core(1),
  ];
}


Core: {
  Core = function(cr_id) {
    this.cr_id = cr_id;
    this.count = 0;
  };
  var p = Core.prototype;

  p.init = function() {
  }


}