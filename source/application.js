$(function(){
  kongregateAPI.loadAPI(function(){
    window.kongregate = kongregateAPI.getAPI();
    if(kongregate.services.isGuest()){
      alert("ok");
    }
  });
  var candy = 0;
  $(".candy_number").text(candy);
  $(".center_candy").on("click", function(){
    candy++;
    $(".candy_number").text(candy);
  });
});