$(document).ready(function(){
var $j = jQuery.noConflict();

var count = 0;
var movimiento = 0;
var rellenador;
var verificadorV;
var verificadorH;
var score=0;



//function para rellenar inicio
function rellenadorInicial(){

  //activador de intervalos
  for (y= 0; y <=5; y++){
    for (z=0;z<8;z++){
      var randomCandyA = Math.floor((Math.random() * 4) + 1);
             $('.col-'+z).append("<div class='nuevaDiv ui-droppable'><img src='image/"+randomCandyA+".png' class='dulces' style='position: relative';></div>");

       };
    };

};

  //funcion rellenar espacios
  function rellenar (){
    rell1 = $(".col-1").children();
    rell2  = $('.col-2').children();
    rell3 = $('.col-3').children();
    rell4 = $('.col-4').children();
    rell5 = $('.col-5').children();
    rell6 = $('.col-6').children();
    rell7 = $('.col-7').children();

      if (rell1.length <= 5){
        var randomCandy1 = Math.floor((Math.random() * 4) + 1);
                  $('.col-1').prepend("<div class='nuevaDiv ui-droppable'><img src='image/"+randomCandy1+".png' class='dulces' style='position: relative';></div>");
                  //console.log("columna1");
          };
            if (rell2.length <= 5){
               var randomCandy2 = Math.floor((Math.random() * 4) + 1);
                      $('.col-2').prepend("<div class='nuevaDiv ui-droppable'><img src='image/"+randomCandy2+".png' class='dulces' style='position: relative';></div>");
                    //  console.log("columna2");
              };
            if (rell3.length <= 5){
                var randomCandy3 = Math.floor((Math.random() * 4) + 1);
                      $('.col-3').prepend("<div class='nuevaDiv ui-droppable'><img src='image/"+randomCandy3+".png' class='dulces' style='position: relative';></div>");
                    //  console.log("columna3");
                    };
            if (rell4.length <= 5){
                var randomCandy4 = Math.floor((Math.random() * 4) + 1);
                    $('.col-4').prepend("<div class='nuevaDiv ui-droppable'><img src='image/"+randomCandy4+".png' class='dulces' style='position: relative';></div>");
                    //console.log("columna4");
                    };
           if (rell5.length <= 5){
               var randomCandy5 = Math.floor((Math.random() * 4) + 1);
                    $('.col-5').prepend("<div class='nuevaDiv ui-droppable'><img src='image/"+randomCandy5+".png' class='dulces' style='position: relative';></div>");
                    //console.log("columna5");
                    };
          if (rell6.length <= 5){
               var randomCandy6 = Math.floor((Math.random() * 4) + 1);
                    $('.col-6').prepend("<div class='nuevaDiv ui-droppable'><img src='image/"+randomCandy6+".png' class='dulces' style='position: relative';></div>");
                    //console.log("columna6");
                    };
          if (rell7.length <= 5){
              var randomCandy7 = Math.floor((Math.random() * 4) + 1);
                    $('.col-7').prepend("<div class='nuevaDiv ui-droppable'><img src='image/"+randomCandy7+".png' class='dulces' style='position: relative';></div>");
                    //console.log("columna7");
                    };
                    //remplaza dulces
                      function swapCandy(){
                      //drag
                        $('.dulces').draggable({
                        revert: "invalid",
                        grid: [ 2, 2 ],
                        containment: ".panel-tablero",
                        drag: function(event, ui){
                        $(this).parent().addClass('nuevaDiv1');
                       },
                       });

                       //drop
                      $('.nuevaDiv').droppable({
                        accept: ".dulces",
                        classes: {
                               "ui-droppable-active": "ui-state-highlight"
                             },
                           drop: function(event, ui){
                           var dulceTrans = $(this).children().detach();
                               dulceTrans.appendTo('.nuevaDiv1');
                           $('.col-1 div').removeClass('nuevaDiv1');
                           $('.col-2 div').removeClass('nuevaDiv1');
                           $('.col-3 div').removeClass('nuevaDiv1');
                           $('.col-4 div').removeClass('nuevaDiv1');
                           $('.col-5 div').removeClass('nuevaDiv1');
                           $('.col-6 div').removeClass('nuevaDiv1');
                           $('.col-7 div').removeClass('nuevaDiv1');
                           //contador de movimientos
                           $('#movimientos-text').html(movimiento = movimiento + 1);
                         $(event.target).append($(ui.draggable).detach().css({'top':'', 'left':''}));
                          },
                      });
                    };
                    swapCandy();

  };

  //activador vertical de tripletes
  function verificarVertical() {
var matriz = 0;
    var uno=[], dos=[], tres=[], cuatro=[], cinco=[], seis=[], siete=[];
  for (r = 0; r < 7; r++){
    uno[r] = $('.col-1').find('img').eq(r).attr('src');
    dos[r] = $('.col-2').find('img').eq(r).attr('src');
    tres[r] = $('.col-3').find('img').eq(r).attr('src');
    cuatro[r] = $('.col-4').find('img').eq(r).attr('src');
    cinco[r] = $('.col-5').find('img').eq(r).attr('src');
    seis[r] = $('.col-6').find('img').eq(r).attr('src');
    siete[r] = $('.col-7').find('img').eq(r).attr('src');
  };
  for(var k=1;k<9;k++){
    var matriz= matriz + $(".col-"+k).children().length;
  };
  for (var p=0, q=1, z=2;p<=6;p++){
    if (uno[p] == uno[q] && uno[q] == uno[z] && matriz == 42){
      $(".col-1").find( "img" ).eq( p ).attr("class","borrar");
      $(".col-1").find( "img" ).eq( q ).attr("class","borrar");
      $(".col-1").find( "img" ).eq( z ).attr("class","borrar");
      score = score + 3;

    };
    if (dos[p] == dos[q] && dos[q] == dos[z] && matriz == 42){
      $(".col-2").find( "img" ).eq( p ).attr("class","borrar");
      $(".col-2").find( "img" ).eq( q ).attr("class","borrar");
      $(".col-2").find( "img" ).eq( z ).attr("class","borrar");
      score = score + 3;
    };
    if (tres[p] == tres[q] && tres[q] == tres[z] && matriz == 42){
      $(".col-3").find( "img" ).eq( p ).attr("class","borrar");
      $(".col-3").find( "img" ).eq( q ).attr("class","borrar");
      $(".col-3").find( "img" ).eq( z ).attr("class","borrar");

      score = score + 3;
    };
    if (cuatro[p] == cuatro[q] && cuatro[q] == cuatro[z] && matriz == 42){
      $(".col-4").find( "img" ).eq( p ).attr("class","borrar");
      $(".col-4").find( "img" ).eq( q ).attr("class","borrar");
      $(".col-4").find( "img" ).eq( z ).attr("class","borrar");
      score = score + 3;
    };
    if (cinco[p] == cinco[q] && cinco[q] == cinco[z] && matriz == 42){
      $(".col-5").find( "img" ).eq( p ).attr("class","borrar");
      $(".col-5").find( "img" ).eq( q ).attr("class","borrar");
      $(".col-5").find( "img" ).eq( z ).attr("class","borrar");
      score = score + 3;
    };
    if (seis[p] == seis[q] && seis[q] == seis[z] && matriz == 42){
      $(".col-6").find( "img" ).eq( p ).attr("class","borrar");
      $(".col-6").find( "img" ).eq( q ).attr("class","borrar");
      $(".col-6").find( "img" ).eq( z ).attr("class","borrar");
      score = score + 3;
    };
    if (siete[p] == siete[q] && siete[q] == siete[z] && matriz == 42){
      $(".col-7").find( "img" ).eq( p ).attr("class","borrar");
      $(".col-7").find( "img" ).eq( q ).attr("class","borrar");
      $(".col-7").find( "img" ).eq( z ).attr("class","borrar");
      score = score + 3;
    };
    $(".borrar").hide("pulsate",1400,function(){
      var bodega = $(".borrar").parent().remove();
        $("#score-text").html(" "+score+" ");
    });
    q++;
    z++;
  }
};

//activador horizontal de tripletes
function verificarHorizontal() {
  var matriz = 0;
    var unoH=[], dosH=[], tresH=[], cuatroH=[], cincoH=[], seisH=[], sieteH=[];
    for (var iH = 0; iH <= 6; iH++) {
      unoH[iH]=$(".col-1").find( "img" ).eq( iH ).attr('src');
      dosH[iH]=$(".col-2").find( "img" ).eq( iH ).attr('src');
      tresH[iH]=$(".col-3").find( "img" ).eq( iH ).attr('src');
      cuatroH[iH]=$(".col-4").find( "img" ).eq( iH ).attr('src');
      cincoH[iH]=$(".col-5").find( "img" ).eq( iH ).attr('src');
      seisH[iH]=$(".col-6").find( "img" ).eq( iH ).attr('src');
      sieteH[iH]=$(".col-7").find( "img" ).eq( iH ).attr('src');
    };
    for(var j=1;j<8;j++){
      matriz=matriz+$(".col-"+j).children().length;};
    for (var cH = 0; cH <=7; cH++) {

      if (unoH[cH]==dosH[cH]&&dosH[cH]==tresH[cH]&&tresH[cH]==unoH[cH]&&matriz<=42) {
        $(".col-1").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-2").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-3").find( "img" ).eq( cH ).attr("class","borrar2");
        score=score+3;
      };
      if (dosH[cH]==tresH[cH]&&tresH[cH]==cuatroH[cH]&&dosH[cH]==cuatroH[cH]&&matriz<=42) {
        $(".col-2").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-3").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-4").find( "img" ).eq( cH ).attr("class","borrar2");
        score=score+3;
      }; if(tresH[cH]==cuatroH[cH]&&cuatroH[cH]==cincoH[cH]&&tresH[cH]==cincoH[cH]&&matriz<=42) {
        $(".col-3").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-4").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-5").find( "img" ).eq( cH ).attr("class","borrar2");
        score=score+3;
      };
      if (cuatroH[cH]==cincoH[cH]&&cincoH[cH]==seisH[cH]&& cuatroH[cH]==seisH[cH]&&matriz<=42) {
        $(".col-4").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-5").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-6").find( "img" ).eq( cH ).attr("class","borrar2");
         score=score+3;
      };
      if (cincoH[cH]==seisH[cH]&&seisH[cH]==sieteH[cH]&&cincoH[cH]==sieteH[cH]&&matriz<=42) {
        $(".col-5").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-6").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-7").find( "img" ).eq( cH ).attr("class","borrar2");
          score=score+3;
      };
    }
    $(".borrar2").hide("pulsate",1400,function(){
    var bodega1 =  $(".borrar2").parent().remove();
      $("#score-text").html(" "+score+" ");
    });
};

//mainttitle's functions
function apagar(elemento){
  $(elemento).animate(
    {
      color: "#F2F2F2"
    }, 800, function(){
      encender(elemento)
    }
  )
}

function encender(elemento){
  $(elemento).animate(
    {
      color: "#F0FB01"
    }, 700, function(){
      apagar(elemento)
    }
  )



}


// encendidoApagado intervalo
function encenderIntervalosRellenar(){
     rellenador= setInterval(rellenar, 700);
};
function encenderIntervalosV(){
  verificadorV = setInterval(verificarVertical, 1000);
  score = score + 3;
};
function encenderIntervalosH(){
  verificadorH = setInterval(verificarHorizontal, 1000);
  score = score + 3;
};

function apagarIntervalos(){
  clearInterval(rellenador);
  clearInterval(verificadorV);
  clearInterval(verificadorH);

}

//funcion start
$('.btn-reinicio').on("click", function(){
    if (count == 0){
    encenderIntervalosRellenar();
     rellenadorInicial();
    encenderIntervalosV();
    encenderIntervalosH();

//Pone texto de inicio
$('.btn-reinicio').empty().append('Reiniciar')
//prender luces titulo
      encender($(".main-titulo"));
      count++
      return
    }

  //detener luces campero
    if (count == 1){
      //detener relleno de faltantes
       apagarIntervalos();
     //resetear Movimientos
      $('#movimientos-text').html(movimiento = movimiento - movimiento);
      //detiene luces que indican que el juego está en marcha
      $(".main-titulo").stop().animate(
        {
          color: "#F0FB01"
        });
//boton cambia para iniciar de nuevo
$('.btn-reinicio').empty().append('Iniciar')
//se esconden los dulces
$('.panel-tablero').children().empty();
  //resetear score
  score=0;
  $('#score-text').html(""+score+"");
      count--
      return
    }

});
});
