//Functions Jigoku Tsuushin PTBR

const jigokuOnline = () => {
	$(window).on('load', e => {
		 $('.notfound').hide();
		 $('.f1').show(100);
		 $('.f2').show(300);
		 $('.f3').show(500);
		 $('.f4').show(700);
		 setTimeout(function(){
			  $('.fires').hide();
			  $('.form').fadeIn(1000);
		 },700);
		 e.stopPropagation();
	});

	$('.form').submit( e => {
		 e.preventDefault();
		 let ippen = document.createElement("audio");
		 ippen.src = 'media/ippen.mp3';
		 ippen.volume = 0.4;
		 ippen.autoPlay = false;
		 ippen.preLoad = true;

		 let music = document.createElement("audio");
		 music.src = 'media/music.mp3';
		 music.volume = 0.4;
		 music.autoPlay = false;
		 music.preLoad = true;
		 
		 $('*').css('cursor','url("media/hourglass.png"), wait');
		 setTimeout( () => {
			  $('*').css('cursor','default');
			  $('form').fadeOut(400);
		 },2000);
		 setTimeout( () => {
			  $('#main').toggleClass('main');
			  ippen.play();
		 },5000);
		 setTimeout( () => {
			  music.play();
		 },7000);
		 setTimeout( () => {
			  $('#main').fadeOut(1000);
		 },21000);
	})
};//end function jigoku_online


const checkHour = () => {
    let time = new Date();
    let hr = time.getHours();
	 let min = time.getMinutes();

    if(hr == "00" && min == "00"){
        jigokuOnline();
    }else if (hr == "23" && min >= 59){
        setInterval( () => {
            location.reload();
        },10000);   
    }
};//End function checkHour

checkHour();