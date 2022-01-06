//timer
var contador = 0;
var interval;
var segundo= 0;
var minuto= 2;
function countdown() {
  clearInterval(interval);
  interval = setInterval( function() {
      var timer = $('.js-timeout').html();
      timer = timer.split(':');
      var minutes = timer[0];
      var seconds = timer[1];
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
          minutes -= 1;
          seconds = 59;
      }
      else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

      $('.js-timeout').html(minutes + ':' + seconds);

      if (minutes == 0 && seconds == 0) {
        clearInterval(interval)
        $('.time').hide();
        $(".panel-tablero").hide("drop","slow",marcadores);
        $(".distanciamiento").css({'margin-top': '3%'});
      };
  }, 1000);
}
//funcion para poner el marcador en pantalla completa
function marcadores(){
	$( ".panel-score" ).animate({width:'100%'},3000);
	$(".termino").css({"display":"block","text-align":"center", "box-sizing": "border-box"});

};

$('.btn-reinicio').on("click", function(){
  if (contador == 0){
    $('.js-timeout').text("2:00");
    countdown();
    $('.js-timeout').attr('id', 'js-startTimer')
    contador++
    return
  }

  if (contador == 1){
    $('.js-timeout').removeAttr('id', 'js-startTimer')
    $('.js-timeout').text("2:00");
    $(".panel-score").css("width","25%");
    $(".panel-tablero").show();
    $('.time').show();
    $(".distanciamiento").css({'margin-top': '3%'});
    clearInterval(interval);
    contador--
    return
  }
})
