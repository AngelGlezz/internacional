
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;


var maxTime = 30;
var time = maxTime;
var time_out=0;

$('#dial').knob({
  readOnly : true,
  thickness : 0.2,
  max : maxTime,
  width: 45,
  height: 45,
  inputColor: "#fff",
  fgColor: "#fff",
  bgColor: "rgb(48, 103, 165)",
  angleArc: "360",
  rotation: "anticlockwise",
  displayPrevious: true,
  fontWeight: 16,
  
});

var intervalo;

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = { "preguntas": [ {"pregunta": "¿Cuántos títulos de Champions tiene el Real Madrid?","respuestas": [{"respuesta": "10","tipo": "true"},{"respuesta": "8","tipo": "false"},{"respuesta": "12","tipo": "false"},{"respuesta": "9","tipo": "false"}] }, {"pregunta": "¿Cuántos títulos ganó el Barcelona con Pep Guardiola?","respuestas": [{"respuesta": "10","tipo": "false"},{"respuesta": "14","tipo": "true"},{"respuesta": "17","tipo": "false"},{"respuesta": "11","tipo": "false"}] }, {"pregunta": "¿Nombre del estadio del Manchester United?","respuestas": [{"respuesta": "Stamford Bridge","tipo": "false"},{"respuesta": "Emirates Arena","tipo": "false"},{"respuesta": "Wembley","tipo": "false"},{"respuesta": "Old Trafford","tipo": "true"}] }, {"pregunta": "¿Apodo del Atlético de Madrid?","respuestas": [{"respuesta": "Los madridistas","tipo": "false"},{"respuesta": "Los merengues","tipo": "false"},{"respuesta": "Los colchoneros","tipo": "true"},{"respuesta": "Los de la capital","tipo": "false"}] }, {"pregunta": "¿Cuántos títulos de liga tiene el Manchester City?","respuestas": [{"respuesta": "4","tipo": "true"},{"respuesta": "8","tipo": "false"},{"respuesta": "10","tipo": "false"},{"respuesta": "2","tipo": "false"}] }, {"pregunta": "¿Año de fundación del Atlético de Madrid?","respuestas": [{"respuesta": "1905","tipo": "false"},{"respuesta": "1910","tipo": "false"},{"respuesta": "1903","tipo": "true"},{"respuesta": "1909","tipo": "false"}] }, {"pregunta": "¿Máximo goleador en la Liga española?","respuestas": [{"respuesta": "Cristiano Ronaldo","tipo": "false"},{"respuesta": "Lionel Messi","tipo": "true"},{"respuesta": "Telmo Zarra","tipo": "false"},{"respuesta": "Hugo Sánchez","tipo": "false"}] }, {"pregunta": "¿Club con más títulos en la Primeira Liga?","respuestas": [{"respuesta": "Porto","tipo": "false"},{"respuesta": "Benfica","tipo": "true"},{"respuesta": "Sporting Lisboa","tipo": "false"},{"respuesta": "Braga","tipo": "false"}] }, {"pregunta": "¿Contra qué equipo anotó Hugo Sánchez su gol más recordado de chilena?","respuestas": [{"respuesta": "Barcelona","tipo": "false"},{"respuesta": "Atlético de Madrid","tipo": "false"},{"respuesta": "Logroñés","tipo": "true"},{"respuesta": "Athletic Bilbao","tipo": "false"}] }, {"pregunta": "¿Cuántos títulos de Bundesliga tiene el Bayern Munich?","respuestas": [{"respuesta": "25","tipo": "true"},{"respuesta": "20","tipo": "false"},{"respuesta": "30","tipo": "false"},{"respuesta": "28","tipo": "false"}] }, {"pregunta": "¿Nombre de uno de los himnos del Liverpool?","respuestas": [{"respuesta": "You'll never walk alone","tipo": "true"},{"respuesta": "We will rock you","tipo": "false"},{"respuesta": "Eye of the tiger","tipo": "false"},{"respuesta": "Stairway to heaven","tipo": "false"}] }, {"pregunta": "¿Cuántos años estuvo Alex Ferguson en el Manchester United?","respuestas": [{"respuesta": "30","tipo": "false"},{"respuesta": "29","tipo": "false"},{"respuesta": "27","tipo": "true"},{"respuesta": "22","tipo": "false"}] }, {"pregunta": "¿Máximo goleador en la historia del Barcelona?","respuestas": [{"respuesta": "Lionel Messi","tipo": "true"},{"respuesta": "Ladislao Kubala","tipo": "false"},{"respuesta": "Samuel Eto'o","tipo": "false"},{"respuesta": "Rivaldo","tipo": "false"}] }, {"pregunta": "¿Cuál es el Clásico más emblemático en España?","respuestas": [{"respuesta": "Real Madrid - Atlético de Madrid","tipo": "false"},{"respuesta": "Real Madrid - Barcelona","tipo": "true"},{"respuesta": "Barcelona - Valencia","tipo": "false"},{"respuesta": "Barcelona - Villarreal","tipo": "false"}] }, {"pregunta": "¿Apodo de la Juventus?","respuestas": [{"respuesta": "La Querida","tipo": "false"},{"respuesta": "La Vieja Señora","tipo": "true"},{"respuesta": "Los ganadores","tipo": "false"},{"respuesta": "La Loba","tipo": "false"}] }, {"pregunta": "¿En cuántos clubes europeos jugó Ronaldinho?","respuestas": [{"respuesta": "3","tipo": "true"},{"respuesta": "5","tipo": "false"},{"respuesta": "4","tipo": "false"},{"respuesta": "2","tipo": "false"}] }, {"pregunta": "¿Actual jugador del Borussia Dortmund?","respuestas": [{"respuesta": "Marco Reus","tipo": "true"},{"respuesta": "Robert Lewandowski","tipo": "false"},{"respuesta": "Ciro Immobile","tipo": "false"},{"respuesta": "Mario Götze","tipo": "false"}] }, {"pregunta": "¿La MSN está conformada por?","respuestas": [{"respuesta": "Messi, Suárez y Neymar","tipo": "true"},{"respuesta": "Messi, Sandro y Neuer","tipo": "false"},{"respuesta": "Modric, Silva y Neymar","tipo": "false"},{"respuesta": "Messi, Sandro y Neymar","tipo": "false"}] }, {"pregunta": "¿Actual entrenador del Arsenal?","respuestas": [{"respuesta": "Arsene Wenger","tipo": "true"},{"respuesta": "Louis Van Gaal","tipo": "false"},{"respuesta": "José Mourinho","tipo": "false"},{"respuesta": "Manuel Pellegrini","tipo": "false"}] }, {"pregunta": "¿Año de fundación del Real Madrid?","respuestas": [{"respuesta": "1900","tipo": "false"},{"respuesta": "1899","tipo": "false"},{"respuesta": "1902","tipo": "true"},{"respuesta": "1904","tipo": "false"}] }, {"pregunta": "¿Futbolista con más partidos jugados en la Roma?","respuestas": [{"respuesta": "Daniele De Rossi","tipo": "false"},{"respuesta": "Simone Perrotta","tipo": "false"},{"respuesta": "Francesco Totti","tipo": "true"},{"respuesta": "Gabriel Batistuta","tipo": "false"}] }, {"pregunta": "¿En qué equipo juega Alexis Sánchez?","respuestas": [{"respuesta": "Barcelona","tipo": "false"},{"respuesta": "Udinese","tipo": "false"},{"respuesta": "Chelsea","tipo": "false"},{"respuesta": "Arsenal","tipo": "true"}] }, {"pregunta": "¿Cuántas Champions League ha ganado el Chelsea?","respuestas": [{"respuesta": "4","tipo": "false"},{"respuesta": "1","tipo": "true"},{"respuesta": "2","tipo": "false"},{"respuesta": "5","tipo": "false"}] }, {"pregunta": "¿Argentino que jugó en el Chelsea?","respuestas": [{"respuesta": "Hernán Crespo","tipo": "true"},{"respuesta": "Ángel Di María","tipo": "false"},{"respuesta": "Juan Román Riquelme","tipo": "false"},{"respuesta": "Claudio López","tipo": "false"}] }, {"pregunta": "¿Entrenador que ganó la última Champions con el Madrid?","respuestas": [{"respuesta": "Vicente del Bosque","tipo": "false"},{"respuesta": "José Mourinho","tipo": "false"},{"respuesta": "Carlo Ancelotti","tipo": "true"},{"respuesta": "Fabio Capello","tipo": "false"}] }, {"pregunta": "¿Apodo de Cristiano Ronaldo?","respuestas": [{"respuesta": "CR7","tipo": "true"},{"respuesta": "CR9","tipo": "false"},{"respuesta": "R9","tipo": "false"},{"respuesta": "Cristiano R7","tipo": "false"}] }, {"pregunta": "¿Nombre del estadio del Barcelona?","respuestas": [{"respuesta": "Nou Camp","tipo": "false"},{"respuesta": "El Madrigal","tipo": "false"},{"respuesta": "Ciudad Deportiva","tipo": "false"},{"respuesta": "Camp Nou","tipo": "true"}] }, {"pregunta": "¿Año del retiro de Zinedine Zidane?","respuestas": [{"respuesta": "2005","tipo": "false"},{"respuesta": "2006","tipo": "true"},{"respuesta": "2008","tipo": "false"},{"respuesta": "2002","tipo": "false"}] }, {"pregunta": "¿A cuántos mundiales ha ido Gianluigi Buffon?","respuestas": [{"respuesta": "4","tipo": "false"},{"respuesta": "3","tipo": "false"},{"respuesta": "5","tipo": "true"},{"respuesta": "2","tipo": "false"}] }, {"pregunta": "¿Actual jugador del Liverpool?","respuestas": [{"respuesta": "Luis Suárez","tipo": "false"},{"respuesta": "Steven Gerrard","tipo": "false"},{"respuesta": "Philippe Coutinho","tipo": "true"},{"respuesta": "Pepe Reina","tipo": "false"}] }, {"pregunta": "¿Actual entrenador del Real Madrid?","respuestas": [{"respuesta": "Rafa Benítez","tipo": "false"},{"respuesta": "Zinedine Zidane","tipo": "true"},{"respuesta": "Raúl González","tipo": "false"},{"respuesta": "José Mourinho","tipo": "false"}] }, {"pregunta": "¿Cuántos Balones de Oro tiene Lionel Messi?","respuestas": [{"respuesta": "3","tipo": "false"},{"respuesta": "6","tipo": "false"},{"respuesta": "5","tipo": "true"},{"respuesta": "4","tipo": "false"}] }, {"pregunta": "¿La BBC está conformada por?","respuestas": [{"respuesta": "Benzema, Bale y Cavani","tipo": "false"},{"respuesta": "Bale, Busquets y Cristiano","tipo": "false"},{"respuesta": "Benzema, Bale y Cristiano","tipo": "true"},{"respuesta": "Busquets, Bacca y Cristiano","tipo": "false"}] }, {"pregunta": "¿Actual jugador del Bayern Munich?","respuestas": [{"respuesta": "Arjen Robben","tipo": "true"},{"respuesta": "Lionel Messi","tipo": "false"},{"respuesta": "Gareth Bale","tipo": "false"},{"respuesta": "Yaya Touré","tipo": "false"}] }, {"pregunta": "¿Máximo equipo ganador de la Champions?","respuestas": [{"respuesta": "Barcelona","tipo": "false"},{"respuesta": "Manchester United","tipo": "false"},{"respuesta": "Real Madrid","tipo": "true"},{"respuesta": "Bayern Munich","tipo": "false"}] }, {"pregunta": "¿Actual jugador del PSG?","respuestas": [{"respuesta": "Thiago Silva","tipo": "true"},{"respuesta": "Ronaldinho","tipo": "false"},{"respuesta": "Neymar","tipo": "false"},{"respuesta": "Ezequiel Lavezzi","tipo": "false"}] }, {"pregunta": "¿Año de fundación del Barcelona?","respuestas": [{"respuesta": "1900","tipo": "false"},{"respuesta": "1899","tipo": "true"},{"respuesta": "1905","tipo": "false"},{"respuesta": "1910","tipo": "false"}] }, {"pregunta": "¿Nombre del estadio del Real Madrid?","respuestas": [{"respuesta": "Camp Nou","tipo": "false"},{"respuesta": "Santiago Bernabéu","tipo": "true"},{"respuesta": "Mestalla","tipo": "false"},{"respuesta": "Riazor","tipo": "false"}] }, {"pregunta": "¿Brasileño que jugó en el Real Madrid?","respuestas": [{"respuesta": "Dida","tipo": "false"},{"respuesta": "Kaká","tipo": "true"},{"respuesta": "Adriano","tipo": "false"},{"respuesta": "David Luiz","tipo": "false"}] }, {"pregunta": "¿Equipo en el que jugó el Chicharito?","respuestas": [{"respuesta": "Barcelona","tipo": "false"},{"respuesta": "West Ham","tipo": "false"},{"respuesta": "Real Madrid","tipo": "true"},{"respuesta": "Schalke","tipo": "false"}] }, {"pregunta": "¿Equipo en el que jugó Cuauhtémoc Blanco?","respuestas": [{"respuesta": "Getafe","tipo": "false"},{"respuesta": "Valencia","tipo": "false"},{"respuesta": "Levante","tipo": "false"},{"respuesta": "Valladolid","tipo": "true"}] }, {"pregunta": "¿Selección que ha ganado más Mundiales?","respuestas": [{"respuesta": "Argentina","tipo": "false"},{"respuesta": "Alemania","tipo": "false"},{"respuesta": "Italia","tipo": "false"},{"respuesta": "Brasil","tipo": "true"}] }, {"pregunta": "¿Equipo en el que jugó Maradona?","respuestas": [{"respuesta": "Real Madrid","tipo": "false"},{"respuesta": "Milan","tipo": "false"},{"respuesta": "Juventus","tipo": "false"},{"respuesta": "Barcelona","tipo": "true"}] }, {"pregunta": "¿Entrenador apodado The Special One?","respuestas": [{"respuesta": "Pep Guardiola","tipo": "false"},{"respuesta": "José Mourinho","tipo": "true"},{"respuesta": "Jürgen Klopp","tipo": "false"},{"respuesta": "Luis Enrique","tipo": "false"}] }, {"pregunta": "¿Cuántas Champions ha ganado el Barcelona?","respuestas": [{"respuesta": "6","tipo": "false"},{"respuesta": "9","tipo": "false"},{"respuesta": "3","tipo": "false"},{"respuesta": "5","tipo": "true"}] }, {"pregunta": "¿Mexicano que juega en el Benfica?","respuestas": [{"respuesta": "Miguel Layún","tipo": "false"},{"respuesta": "Alan Pulido","tipo": "false"},{"respuesta": "Raúl Jiménez","tipo": "true"},{"respuesta": "Raúl Gudiño","tipo": "false"}] }, {"pregunta": "¿Jugador que fue suspendido por morder al rival?","respuestas": [{"respuesta": "Edinson Cavani","tipo": "false"},{"respuesta": "Luis Suárez","tipo": "true"},{"respuesta": "Neymar","tipo": "false"},{"respuesta": "Pepe","tipo": "false"}] }, {"pregunta": "¿Actual campeón de Italia?","respuestas": [{"respuesta": "Napoli","tipo": "false"},{"respuesta": "Roma","tipo": "false"},{"respuesta": "Milan","tipo": "false"},{"respuesta": "Juventus","tipo": "true"}] }, {"pregunta": "¿Actual entrenador del Manchester United?","respuestas": [{"respuesta": "Louis Van Gaal","tipo": "true"},{"respuesta": "Pep Guardiola","tipo": "false"},{"respuesta": "Guus Hiddink","tipo": "false"},{"respuesta": "José Mourinho","tipo": "false"}] }, {"pregunta": "¿Año de fundación del Manchester City?","respuestas": [{"respuesta": "1894","tipo": "true"},{"respuesta": "1900","tipo": "false"},{"respuesta": "1890","tipo": "false"},{"respuesta": "1899","tipo": "false"}] }]};
	 
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.jpg" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000, function(){
			$("#indepth_tiempo_cont").css("position","fixed");
			intervalo=setInterval(function() {
			  if(time<=0){
			  	clearInterval(intervalo);
			  	finish_test();
			 }	
			  time--;
			  $('#dial')
			        .val(time)
			        .trigger('change');
			}, 1000);
		})
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				final_time = time;
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				  	
				 console.log("respuestas " + respuestas_num);
				 console.log(respuestas_num);
				
				if(respuestas_num == preguntas.length){
					clearInterval(intervalo);
					window.setTimeout(finish_test, 700);
				}
				
			}
			
		});
		
		
});


$('#dial')
        .val(99)
        .trigger('change');


function finish_test(){
	
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	
	
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho
	});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";
  	
  	if(aciertos<=10){
	  	aficionado="";
	  	msg="decepcionaste más que Leverkusen en fase de grupos…";
  	}

  	if(aciertos>=11 && aciertos<=20){
	  	aficionado="";
	  	msg="hiciste un Porto. Te quedaste a dos de estar entre los grandes.";
  	}
  	
  	if(aciertos>=21){
	  	aficionado="";
	  	msg="¡Eres la envidia de todos! ¡Deberías pedir que el Barcelona te fiche!";
  	}
  	
  	$("#indepth_aciertos").html(aciertos);
  	$("#indepth_aciertos_text").html(msg);
  	$("#tipo_aficionado").html( aficionado );
  	
}



$('.indepth_num').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}

});

$('.idepth_marcador, .idepth_marcador2').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}
});


$('.indepth_num').keyup(function(event) {
	
	if(parseInt($(".indepth_num").val())>0){
		input_goles=true;
	}else{
		input_goles=false;
	}
	indepth_comprobar();

});


$('.idepth_marcador').keyup(function(event) {
	if($(this).val()!="" ){
		input_text=true;
	}else{
		input_text=false;
	}
	
	indepth_comprobar();
});

$('.idepth_marcador2').keyup(function(event) {
	if($(this).val()!="" ){
		input_text2=true;
	}else{
		input_text2=false;
	}
	
	indepth_comprobar();
});


var indepth_comprobar = function(){
	console.log(input_text + " - " + input_text2 + " - " + input_goles);
	
	if(input_text && input_text2 && input_goles){
		$(".indepth_boton").removeClass("disable");
		disable=false;
	}else{
		$(".indepth_boton").addClass("disable");
		disable=true;
	}
	
	console.log(disable);
}


var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

   
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});

$("#indepth_twittear").click(function(){

	if(!disable){

		
		var text = encodeURIComponent("Mi predicción es: PSG "+$("input[name=goleador]").val()+"-"+$("input[name=goleador2]").val())+ " Man City primer gol al minuto "+$("input[name=goles_anotados]").val()+" @juanfutbol";
		var url = encodeURIComponent("http://juanfutbol.com/indepth/");
		window.open("https://twitter.com/share?text="+text+"&hashtags=juanfutbol&url="+url,"","width=500, height=300");

	}else{
		
		
		
	}
	
	});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});
});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


