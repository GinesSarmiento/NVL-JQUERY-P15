


$(document).ready(function() {
	//Declaramos una variable global que contará el número de veces que se pulsa
	var repeticiones=0;

	//Declaramos el evento asociado al botón que se ejecutará cuando se pulse
	$("#boton_animacion").on({
		"click":function(){
			
			//Comprobamos si se ha llegado a la repetición número 10 para empezar de nuevo
			if (repeticiones==10){
				repeticiones-=10;
			};

			//En función del número de repeticiones, usamos un efecto u otro
			switch (repeticiones){
				case 0:
					$(".imagen1").hide();
					$(".imagen2").show();
				break;
				case 1:
					$(".imagen1").show("slow");
					$(".imagen2").hide("slow");
				break;
				case 2:
					$(".imagen1").hide("normal");
					$(".imagen2").show("normal");
				break;
				case 3:
					$(".imagen1").show("fast");
					$(".imagen2").hide("fast");
				break;
				case 4:
					$(".imagen1").slideUp(200);
					$(".imagen2").slideDown(200);
				break;
				case 5:
					$(".imagen1").slideDown(600);
					$(".imagen2").slideUp(600);
				break;
				case 6:
					$(".imagen1").fadeOut(200);
					$(".imagen2").fadeIn(200);
				break;
				case 7:
					$(".imagen1").fadeIn(600);
					$(".imagen2").fadeOut(600);
				break;
				case 8:
					$(".imagen1").toggle(200);
					$(".imagen2").toggle(200);
				break;
				case 9:
					$(".imagen1").toggle(600);
					$(".imagen2").toggle(600);
					break;
				};

				//Aumentamos el contador para la siguiente repetición
				repeticiones++;
			}
		});
});