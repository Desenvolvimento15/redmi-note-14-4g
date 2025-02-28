$(document).ready(function(){
    $('.slider-2').slick({
      slidesToShow: 3,  // Mostra 3 slides por vez (ajuste se necessário)
      slidesToScroll: 1, // Avança 1 slide por vez
      autoplaySpeed: 5000,
      autoplay: true, 
      dots: false, 
      arrows: true,
      infinite: true, // Garante o loop infinito
      cssEase: 'linear',
      variableWidth: true,// Evita que os slides tenham larguras variáveis
    });
  });

