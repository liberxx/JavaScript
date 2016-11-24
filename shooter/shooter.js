//Запрашиваем имя игрока
var player = prompt("Введите своё имя", "Игрок");
//Объявляем переменные уничтожаемого объекта и игрового поля

var ball = document.getElementsByClassName("ball");
var ball2 = document.getElementsByClassName("ball2");
var ball3 = document.getElementsByClassName("ball3");

//var ballons = document.querySelector(".ball")
var ballons = [ball[0], ball2[0], ball3[0]];

var body = document.getElementsByTagName("body");


//Массив стартовых координат по Х.
var coordinates = [0, 100, 200, 300, 400, 500, 600, 700];

var scoreboard = document.getElementsByClassName("score");

//Счетчик попаданий
var count = 0;

//Стартовая позиция шарика
var positions_y = [700, 700, 700];

function move(obj) {

	if (positions_y[c] < -200) {
		var position_x = coordinates[Math.floor(Math.random()*coordinates.length)];
		positions_y[c] = 700;
		obj.style.left = position_x + "px";
	}	
			positions_y[c] -= 3;
			obj.style.top = positions_y[c] + "px";
			
}

//При попадании перемещаем объект за нижнюю границу экрана и увеличиваем переменную count.

for (var i = 0, len = ballons.length; i < len; i++){
	
    ballons[i].onclick = function() {

	var position_x = coordinates[Math.floor(Math.random()*coordinates.length)];

	for (var b = 0, len = ballons.length; b < len; b++){
		if (ballons[b].className == this.className) {
			ballons[b].style.left = position_x + "px";
			positions_y[b] = 700;
		}	
	}	
	
	count += 1;
	scoreboard[0].innerHTML = count;
	}
}

//Вызов функции движения для каждого из шаров.
timer_id = setInterval(function(){
	for (c = 0, len = ballons.length; c < len; c++) {
		move.call({}, ballons[c]); }
	}, 10);
	
setTimeout(function() {
  clearInterval(timer_id);
},60000);	

//Если время закончилось - очищаем body и выводим результат игры.
function timer(){
var obj=document.getElementById('timer');
obj.innerHTML--;
    if (obj.innerHTML==0){
        setTimeout(function(){},1000);
		body[0].innerHTML = '';
		
		var result = document.createElement("div");
		result.className = "scroll_container"
		body[0].appendChild(result);
		
		var scrl = document.createElement("img");
		scrl.src = "svitok.jpg";
		scrl.className = "scroll";
		result.appendChild(scrl);
		
		var result_text_container = document.createElement("div");
		result_text_container.className = "result_text_container"
		body[0].appendChild(result_text_container);
		
		
		var scrl_text = document.createElement("p");
		scrl_text.innerHTML = player + "," + "Ваш результат:" + " " + count;
		scrl_text.className = "scroll_text";
		result_text_container.appendChild(scrl_text);
		
    } else {
        setTimeout(timer,1000);
    }
}
setTimeout(timer,1000);