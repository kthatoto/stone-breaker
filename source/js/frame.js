
function frame() {
  stone += sps / 10;
  $("#stone_number").text(parseInt(stone));

  stones[stone_id].update();
}