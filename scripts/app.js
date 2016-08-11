  //SKAPAR TABBADE PANELER
  $(function() {
    $( "#tabs" ).tabs();
  });

  //GER ALLA LÄNKAR MED KLASSEN newWin ATTRIBUTET target="_blank" (ÖPPNAR DEM I NY FLIK)
$(document).ready(function(){
  $('.newWin').attr('target', '_blank');
});
